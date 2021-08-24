const form = document.querySelector('.form');

let userId = JSON.parse(localStorage.getItem('userId'));
let token = JSON.parse(localStorage.getItem('token'));

form.action = `/api/banner/6124c4f252223203f4ef4efc/${userId}`;

