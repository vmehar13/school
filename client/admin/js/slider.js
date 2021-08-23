const form = document.querySelector('.form');

let userId = JSON.parse(localStorage.getItem('userId'));
let token = JSON.parse(localStorage.getItem('token'));

form.action = `/api/banner/611b514a425b532a18dad041/${userId}`;

