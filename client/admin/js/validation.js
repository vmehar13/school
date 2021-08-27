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
let edrole = getWithExpiry('edrole')
let role = edrole.value;

// let userId1 = JSON.parse(localStorage.getItem('userId'));
// let token2 = JSON.parse(localStorage.getItem('token'));
function check(){
    console.log('working')
    if(role != 1 || role == undefined || role == null || role != Number){
        window.location.pathname = 'client/admin/error403.html';
    }
}
let edrole = JSON.parse(localStorage.getItem('edrole'));

check();


function deleteItem() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("edrole");

    window.location.pathname = '/index-2.html';


  }