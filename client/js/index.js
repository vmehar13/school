
const API_URL = "/api/banner/611b514a425b532a18dad041"
const panel = document.querySelector('.panel');


listBanners();


function listBanners() {
    fetch(API_URL, {
        method: 'GET',
        headers: {
        
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(banner => {
        console.log(banner.banner1)
        const bn1 = document.querySelector('#bn1');
        bn1.src = `http://localhost:8000/api/${banner.banner1}`

        const bn2 = document.querySelector('#bn2');
        bn2.src = `http://localhost:8000/api/${banner.banner2}`

        const bn3 = document.querySelector('#bn3');
        bn3.src = `http://localhost:8000/api/${banner.banner3}`
    })
}

const API_URL_BANNERB = "http://localhost:8000/api/slider/611dc50217e1950aa89d868e";
const bannerBB1 = document.querySelector('.bannerBB');

bannerBB1.id = 'aaa';

listBannerB()

function listBannerB() {
    fetch(API_URL_BANNERB, {
        method: 'GET',
        headers: {
        
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(bannerB1 => {

        const div = document.createElement('div');
        div.className = "container";
            
        console.log("working")
            const ul = document.createElement('ul');
            ul.className = "owl-carousel clearfix";

                
                const li = document.createElement('li');
                const img = document.createElement('img');
                img.src = `http://localhost:8000/api/${bannerB1.slider1}`
                img.className = "img-responsive";
                li.appendChild(img);
                ul.appendChild(li);


                const li2 = document.createElement('li');
                const img2 = document.createElement('img');
                img2.src = `http://localhost:8000/api/${bannerB1.slider2}`
                img2.className = "img-responsive";
                li2.appendChild(img2);
                ul.appendChild(li2);

                const li3 = document.createElement('li');
                const img3 = document.createElement('img');
                img3.src = `http://localhost:8000/api/${bannerB1.slider3}`
                img3.className = "img-responsive";
                li3.appendChild(img3);
                ul.appendChild(li3);

                const li4 = document.createElement('li');
                const img4 = document.createElement('img');
                img4.src = `http://localhost:8000/api/${bannerB1.slider4}`
                img4.className = "img-responsive";
                li4.appendChild(img4);
                ul.appendChild(li4);

                const li5 = document.createElement('li');
                const img5 = document.createElement('img');
                img5.src = `http://localhost:8000/api/${bannerB1.slider5}`
                img5.className = "img-responsive";
                li5.appendChild(img5);
                ul.appendChild(li5);

                const li6 = document.createElement('li');
                const img6 = document.createElement('img');
                img6.src = `http://localhost:8000/api/${bannerB1.slider6}`
                img6.className = "img-responsive";
                li6.appendChild(img6);
                ul.appendChild(li6);



                div.appendChild(ul);
                bannerBB1.appendChild(div);
                
    })
}
