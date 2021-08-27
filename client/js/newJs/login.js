const form = document.querySelector('.form-outer');
const API_URL = '/api/signin';

function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

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
          setWithExpiry("token", data.token, 500000)
          setWithExpiry("userId", data.user._id, 500000)
          setWithExpiry("edrole", data.user.role, 500000)
          // localStorage.setItem("token", JSON.stringify(data.token));
          // localStorage.setItem("userId", JSON.stringify(data.user._id));
          // localStorage.setItem("edrole", JSON.stringify(data.user.role));

          window.location = '/login.html'

          window.location.pathname = '/admin/dashboard.html';

        }
        
    })
      
      // window.location = '/client/login.html'
      // window.location.pathname = '/client/quantam-lite/index.html'
})

