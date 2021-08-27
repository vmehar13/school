const form = document.querySelector('.form');
let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
const API_URL = `/api/admin/register/${userId}`;

const profilePic = document.querySelector('#input-profilePic');
const field1 = document.querySelector('#input-field1');
const tc = document.querySelector('#input-tc');
const studentName = document.querySelector('#input-studentName');
const dob = document.querySelector('#input-dob');
const weather = document.querySelector('#input-weather')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');

    const updateCategory = {
        name
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(updateCategory)
    }
    
    fetch(API_URL, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
         console.log(data);
      window.location.pathname = '/client/admin/admin.html'
        
    })
      
      // window.location = '/client/login.html'
      // window.location.pathname = '/client/quantam-lite/index.html'
})


function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)

  // if the item doesn't exist, return null
  if (!itemStr) {
    window.location.pathname = '/admin/error403.html';
      
  }

  const item = JSON.parse(itemStr)
  return item.value
}