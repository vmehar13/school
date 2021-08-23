const form = document.querySelector('.form-outer');
const API_URL = `/api/signup`;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const userInfo = formData.get('userInfo');




    const signup = {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        userInfo
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
    }
    
    fetch(API_URL, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        alert("User Register Sucessfully")
    })
      
    //  window.location.pathname = '/client/index.html'
})