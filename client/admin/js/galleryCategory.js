// let userId = JSON.parse(localStorage.getItem('userId'));
// let token = JSON.parse(localStorage.getItem('token'));
let userId = getWithExpiry('userId');
let token = getWithExpiry('token');
console.log(userId)

let gal = document.querySelector('.gal');
gal.action = `/api/gallery/create/${userId}`;

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
        gallery.forEach(gallery => {
            console.log(gallery)
            const tr = document.createElement('tr');
            
            const td = document.createElement('td');
            td.textContent
            
            const td1 = document.createElement('td');
            td1.textContent = gallery._id;
            td1.id = gallery._id;

            const td2 = document.createElement('td');
            td2.textContent = gallery.category;

            const td3 = document.createElement('td');
            const img = document.createElement('img');
            img.src = `/api/${gallery.photo}`
            img.height = '100px';
            img.width = "100px"
            td3.appendChild(img);


            // const td4 = document.createElement('td');
            // const abc1 = document.createElement('a');
            // abc.type = 'submit';
            // abc1.textContent = 'Delete';

            // abc1.addEventListener('click', () => {
            //     localStorage.setItem("galleryId", JSON.stringify(gallery._id)); 
            //     const URL12 = `http://localhost:8000/api/gallery/${gallery._id}/${userId}`;

            //     const options = {
            //         method: 'DELETE',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization' : `Bearer ${token}`
            //         },
                    
            //     }
                
            //     fetch(URL12, options)
            //       .then(response => {
            //         return response.json();
            //       })
            //       .then(data => {
            //           console.log(data)
            //       })

            //     window.location.pathname = '/client/admin/admin.html'

            // })
            // td4.appendChild(abc1);

            tr.appendChild(td)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)

            galleryPanel.appendChild(tr);
        })
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