let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
let edrole = getWithExpiry('edrole');

function check(){
    console.log('working')
    if( edrole = undefined || edrole != 1 || edrole.isEmpty()){
        console('working1');
    
        window.location.pathname = 'client/admin/error403.html';
    }
}

check();
console.log(userId)

const form = document.querySelector('.form');

// let userId = JSON.parse(localStorage.getItem('userId'));
// let token = JSON.parse(localStorage.getItem('token'));

form.action = `/api/banner/6124c4f252223203f4ef4efc/${userId}`;

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    // if (!itemStr) {
    //     return null
    // }

    const item = JSON.parse(itemStr)
    return item.value
}