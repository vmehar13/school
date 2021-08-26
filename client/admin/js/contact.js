// let userId = JSON.parse(localStorage.getItem('userId'));
// let token = JSON.parse(localStorage.getItem('token'));

let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
console.log(userId)

const API_URL = `/api/admin/contact/${userId}`
const panel = document.querySelector('.panel');


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
    .then(contact => {
        contact.forEach(contact => {
            const tr = document.createElement('tr');
            
            const td = document.createElement('td');
            td.textContent
            
            const td1 = document.createElement('td');
            td1.textContent = contact.fullName;
            
            const td2 = document.createElement('td');
            td2.textContent = contact.email;

            const td3 = document.createElement('td');
            td3.textContent = contact.admission_session

            const td4 = document.createElement('td');
            td4.textContent = contact.phone

            const td5 = document.createElement('td');
            td5.textContent = contact.message

            const td6 = document.createElement('td');
            td6.textContent = contact.admission_class

            tr.appendChild(td)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)

            panel.appendChild(tr);


        })
    })

}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    // if (!itemStr) {
    //     return null
    // }

    const item = JSON.parse(itemStr)
    return item.value
}