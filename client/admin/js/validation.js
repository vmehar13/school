//=================Validation-Updation====================

let userId1 = JSON.parse(localStorage.getItem('userId'));
// let token2 = JSON.parse(localStorage.getItem('token'));
let edrole = JSON.parse(localStorage.getItem('edrole'));

if(edrole != 1){
    
    window.location.pathname = 'client/admin/error403.html';
}