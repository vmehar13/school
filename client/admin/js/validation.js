//=================Validation-Updation====================

// function getWithExpiry(key) {
//     const itemStr = localStorage.getItem(key)

//     // if the item doesn't exist, return null
//     if (!itemStr) {
//         return null
//     }

//     const item = JSON.parse(itemStr)
//     const now = new Date()

//     // compare the expiry time of the item with the current time
//     if (now.getTime() > item.expiry) {
//         // If the item is expired, delete the item from storage
//         // and return null
//         localStorage.removeItem(key)
//         return null
//     }
//     return item.value
// }
// let userId = getWithExpiry('userId');
// let edrole = getWithExpiry('edrole')

// let userId1 = JSON.parse(localStorage.getItem('userId'));
// let token2 = JSON.parse(localStorage.getItem('token'));
let edrole = JSON.parse(localStorage.getItem('edrole'));
console.log(edrole.value)

if(edrole.value != 1){
    
    window.location.pathname = 'client/admin/error403.html';
}

function deleteItem() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("edrole");

  }