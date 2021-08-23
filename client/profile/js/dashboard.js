
let userId = JSON.parse(localStorage.getItem('userId'));
const API_URL = `http://localhost:8000/api/profile/dashboard/${userId}`;
let token = JSON.parse(localStorage.getItem('token'));

//EDIT BUTTON CODE

const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');
const firstName = document.querySelector('#input-first-name');
const lastName = document.querySelector('#input-last-name');
const address = document.querySelector('#input-address');
const phone = document.querySelector('#input-phone');

const button1 = document.querySelector('#form1-button');

const pName = document.getElementById('pName');
const iam = document.getElementById('iam');
const pAddress = document.querySelector('#pAddress');

const bHeading = document.getElementById('bHeading');

const updateUser = document.querySelector('.updateUser');

updateUser.addEventListener('click', () => {
    email.disabled = false;
    password.disabled = false;
    firstName.disabled = false;
    lastName.disabled = false;
    address.disabled = false;
    phone.disabled = false;
    button1.hidden = false;
})

//----GETTING-USER-DATA-FROM-BACKEND

const API_URL_USER = `http://localhost:8000/api/user/${userId}`;


listUser();

function listUser() {
    fetch(API_URL_USER, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(user => {
        console.log(user)
        email.value = user.email;
        firstName.value = user.firstName;
        lastName.value = user.lastName
        address.value = user.address;
        phone.value = user.phone;
        pName.textContent = `${user.firstName} ${user.lastName}`;
        iam.textContent = user.userInfo;
        pAddress.textContent = user.address;

        bHeading.textContent = `Hello ${user.firstName}`
    })
}    

//-----Updating-USER-DATA
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
e.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const address = formData.get('address');
    const phone = formData.get('phone');


    const updateU = {
        firstName,
        lastName,
        email,
        password,
        address,
        phone
    }
    fetch(API_URL_USER, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(updateU)
    })
    .then(res => res.json())
    location.reload();
})

