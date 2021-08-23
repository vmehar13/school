const form = document.querySelector('.form');

let userId = JSON.parse(localStorage.getItem('userId'));
let token = JSON.parse(localStorage.getItem('token'));

form.action = `/api/slider/611dc50217e1950aa89d868e`;

