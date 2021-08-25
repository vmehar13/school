const API_URL_GALLERY = `/api/gallery`
const panel1 = document.querySelector('.panel1');


listGallery();

function listGallery() {
    fetch(API_URL_GALLERY, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(galleries => {
        galleries.forEach(gallery => {
            const li = document.createElement('li');
            li.className = `isotopeSelector ${gallery.category}`;
                
                const div = document.createElement('div');
                div.className = 'overlay'

                    const a = document.createElement('a');
                    a.className = 'galleryItem';
                    a.href = `/api/${gallery.photo}`;

                        const span = document.createElement('span');
                        span.className = 'icon-enlarge-icon';
                        a.appendChild(span);

                    div.appendChild(a);

                li.appendChild(div);

                const figure = document.createElement('figure');

                    const img = document.createElement('img');
                    img.className = 'img-responsive';
                    img.src = `/api/${gallery.photo}`;

                figure.appendChild(img);

                li.appendChild(figure);
                panel1.appendChild(li);
        

        })
    })
}