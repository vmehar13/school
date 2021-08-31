let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
console.log(userId)

const API_URL = `/api/admin/register/${userId}`
const panel = document.querySelector('.panel');

//=============Start-For-Dashboard==================
const bl1 = document.querySelector('#bl-1');
const bl2 = document.querySelector('#bl-2');
const bl3 = document.querySelector('#bl-3');



//=============End-for-Dashboard====================


listRegistrations();

function listRegistrations() {
    fetch(API_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(register => {
        bl1.innerHTML = register.length 
        register.forEach(register => {
        console.log(register);

            const tr = document.createElement('tr');
            
            const td = document.createElement('td');
            td.textContent
            
            const td1 = document.createElement('td');
            td1.textContent = register._id;
            td1.id = register._id;

            const td2 = document.createElement('td');
            td2.textContent = register.studentName;

            const td3 = document.createElement('td');
            const abc = document.createElement('a');
            abc.type = 'submit';
        
            abc.textContent = "View";
            abc.addEventListener('click', () => {
                localStorage.setItem("registerId", JSON.stringify(register._id)); 
                
                window.location.pathname = '/admin/updateRegister.html'
            })
            td3.appendChild(abc);


            const td4 = document.createElement('td');
            const abc1 = document.createElement('a');
            abc.type = 'submit';
            abc1.textContent = 'Delete';

            abc1.addEventListener('click', () => {
                localStorage.setItem("registerId", JSON.stringify(register._id));
                let registerId  = JSON.parse(localStorage.getItem('registerId'));
                const URL12 = `/api/admin/register/${registerId}/${userId}`;

                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `Bearer ${token}`
                    },
                    
                }
                
                fetch(URL12, options)
                  .then(response => {
                    return response.json();
                  })
                  .then(data => {
                      console.log(data)
                  })

                window.location.pathname = '/admin/register.html'

            })
            td4.appendChild(abc1);

            tr.appendChild(td)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)

            panel.appendChild(tr);
        })
    })
}

const API_URL_CONTACT = `/api/admin/contact/${userId}`


listContacts();

function listContacts() {
    fetch(API_URL_CONTACT, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(contact => {
        bl2.innerHTML = contact.length
    })
}

const API_URL_GALLERY = `/api/gallery`


listGallery();

function listGallery() {
    fetch(API_URL_GALLERY, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(gallery => {
        bl3.innerHTML = gallery.length
    })
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
    window.location.pathname = '/admin/error403.html';
        
    }

    const item = JSON.parse(itemStr)
    return item.value
}