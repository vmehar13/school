let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
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