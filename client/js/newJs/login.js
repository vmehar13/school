const form = document.querySelector('.form-outer');
const API_URL = '/api/signin';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    const signin = {
        email,
        password
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signin)
    }
    
    fetch(API_URL, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("userId", JSON.stringify(data.user._id));
          localStorage.setItem("edrole", JSON.stringify(data.user.role));

          window.location = '/client/login.html'

          window.location.pathname = 'client/profile/dashboard.html';

        }
        
    })
      
      // window.location = '/client/login.html'
      // window.location.pathname = '/client/quantam-lite/index.html'
})

