const form = document.querySelector('.form');
let userId = getWithExpiry('userId');
let token = getWithExpiry('token');

let registerId  = JSON.parse(localStorage.getItem('registerId'));

const API_URL_GET = `/api/register/${registerId}/${userId}`;


const profilePic = document.querySelector('#input-profilePic');
const field1 = document.querySelector('#input-field1');
const tc = document.querySelector('#input-tc');
const studentName = document.querySelector('#input-studentName');
const dob = document.querySelector('#input-dob');
const weather = document.querySelector('#input-weather');
const applicatIsMy = document.querySelector('#input-applicatIsMy');
const fatherName = document.querySelector('#input-fatherName');
const fatherQualification = document.querySelector('#input-fatherQualification');
const motherName = document.querySelector('#input-motherName')
const motherQualification = document.querySelector('#input-motherQualification')
const guardianName = document.querySelector('#input-guardianName')
const guardianQualification = document.querySelector('#input-guardianQualification')
const transportation = document.querySelector('#input-transportation')
const occupationOfParets = document.querySelector('#input-occupationOfParets')
const motherTounge = document.querySelector('#input-motherTounge')
const religion = document.querySelector('#input-religion')
const caste = document.querySelector('#input-caste')
const town = document.querySelector('#input-town')
const post = document.querySelector('#input-post')
const district = document.querySelector('#input-district')
const state = document.querySelector('#input-state')
const localAddress = document.querySelector('#input-localAddress')
const phone = document.querySelector('#input-phone');
const gender = document.querySelector('.input-gender')
const nationality = document.querySelector('#input-nationality')
const field17 = document.querySelector('.input-field17')
const field17Name = document.querySelector('#input-field17Name')
const field17Class = document.querySelector('#input-field17Class')
const field17Rollno = document.querySelector('#input-field17Rollno')
const aadhar = document.querySelector('#input-aadhar')
const aadharImg = document.querySelector('#input-aadharImg')
const lastSchool = document.querySelector('#lastSchool')
const profilePhoto = document.querySelector('#profilePhoto')
// const = document.querySelector('#')

listRegistration();

function listRegistration() {
    fetch(API_URL_GET, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(register => {
      console.log(register)
        
        field1.value = register.field1;
        tc.value = register.tc;
        studentName.value = register.studentName;
        dob.value = register.dob;
        weather.value = register.weather;
        applicatIsMy.value = register.applicatIsMy;
        fatherName.value = register.fatherName;
        fatherQualification.value = register.fatherQualification;
        motherName.value = register.motherName;
        motherQualification.value = register.motherQualification;
        guardianName.value = register.guardianName;
        guardianQualification.value = register.guardianQualification;
        transportation.value = register.transportation;
        occupationOfParets.value = register.occupationOfParets;
        motherTounge.value = register.motherTounge;
        religion.value = register.register;
        caste.value = register.caste;
        town.value = register.town;
        post.value = register.post;
        district.value = register.district;
        state.value = register.state;
        localAddress.value = register.localAddress;
        phone.value = register.phone;
        gender.value = register.gender;
        nationality.value = register.nationality;
        field17.value = register.field17;
        field17Class.value = register.field17Class;
        field17Name.value = register.field17Name;
        field17Rollno.value = register.field17Rollno;
        aadhar.value = register.aadhar;
        lastSchool.value = register.lastSchool;
    })
  }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const name = formData.get('name');

//     const updateCategory = {
//         name
//     }

//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization' : `Bearer ${token}`
//         },
//         body: JSON.stringify(updateCategory)
//     }
    
//     fetch(API_URL, options)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//          console.log(data);
//       window.location.pathname = '/client/admin/admin.html'
        
//     })
      
//       // window.location = '/client/login.html'
//       // window.location.pathname = '/client/quantam-lite/index.html'
// })


function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)

  // if the item doesn't exist, return null
  if (!itemStr) {
    window.location.pathname = '/admin/error403.html';
      
  }

  const item = JSON.parse(itemStr)
  return item.value
}