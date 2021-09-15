const API_URL_GALLERY = `/api/gallery`
// const panel1 = document.querySelector('.panel1');
const SliderContainerAll = document.querySelector('#SliderContainerAll');
const SliderContainerClasses = document.querySelector('#SliderContainerClasses');
const SliderContainerParty = document.querySelector('#SliderContainerParty');
const SliderContainerContest = document.querySelector('#SliderContainerContest');
const SliderContainerMusic = document.querySelector('#SliderContainerMusic');



const imageSlider = document.querySelector('#image-slider-all');
const imageSliderClasses = document.querySelector('#image-slider-classes');
const imageSliderParty = document.querySelector('#image-slider-party');
const imageSliderContest = document.querySelector('#image-slider-contest');
const imageSliderMusic = document.querySelector('#image-slider-music');

const all1 = document.getElementById('all');
const classes1 = document.getElementById('classes');
const party1 = document.getElementById('party');
const contest1 = document.getElementById('contest');
const music1 = document.getElementById('music');


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
            // const li = document.createElement('li');
            // li.className = `isotopeSelector ${gallery.category}`;
                
            //     const div = document.createElement('div');
            //     div.className = 'overlay'

            //         const a = document.createElement('a');
            //         a.className = 'galleryItem';
            //         a.href = `/api/${gallery.photo}`;

            //             const span = document.createElement('span');
            //             span.className = 'icon-enlarge-icon';
            //             a.appendChild(span);

            //         div.appendChild(a);

            //     li.appendChild(div);

            //     const figure = document.createElement('figure');

            //         const img = document.createElement('img');
            //         img.className = 'img-responsive';
            //         img.src = `/api/${gallery.photo}`;

            //     figure.appendChild(img);

            //     li.appendChild(figure);
            //     panel1.appendChild(li);
            const li = document.createElement('li');
            li.className = `${gallery.category}`
            // li.style = "post"

            const a = document.createElement('a');
            a.href = "#";

            const img = document.createElement('img');
            img.className = 'img-responsive';
            img.src = `/api/${gallery.photo}`;
            img.alt = "";

            a.appendChild(img);
            li.appendChild(a);
            imageSlider.appendChild(li);
            if(gallery.category == "classes"){
                imageSliderClasses.appendChild(li);
            }
            else if(gallery.category == "Party"){
                imageSliderParty.appendChild(li);
            }
            else if(gallery.category == "contest"){
                imageSliderContest.appendChild(li)
            }
            else{
                imageSliderMusic.appendChild(li);
            }

        })
    })
}


function allBtn(){
    all1.className = "active"
    classes1.className = ""
    party1.className = ""
    contest1.className = ""
    music1.className = ""



    SliderContainerAll.hidden = false
    SliderContainerClasses.hidden = true
    SliderContainerParty.hidden = true
    SliderContainerContest.hidden = true
    SliderContainerMusic.hidden = true
}

function classes(){
    all1.className = ""
    classes1.className = "active"
    party1.className = ""
    contest1.className = ""
    music1.className = ""

    SliderContainerAll.hidden = true
    SliderContainerClasses.hidden = false
    SliderContainerParty.hidden = true
    SliderContainerContest.hidden = true
    SliderContainerMusic.hidden = true
}

function party(){
    all1.className = ""
    classes1.className = ""
    party1.className = "active"
    contest1.className = ""
    music1.className = ""

    SliderContainerAll.hidden = true
    SliderContainerClasses.hidden = true
    SliderContainerParty.hidden = false
    SliderContainerContest.hidden = true
    SliderContainerMusic.hidden = true
}

function contest(){
    all1.className = ""
    classes1.className = ""
    party1.className = ""
    contest1.className = "active"
    music1.className = ""

    SliderContainerAll.hidden = true
    SliderContainerClasses.hidden = true
    SliderContainerParty.hidden = true
    SliderContainerContest.hidden = false
    SliderContainerMusic.hidden = true
}

function music(){
    all1.className = ""
    classes1.className = ""
    party1.className = ""
    contest1.className = ""
    music1.className = "active"

    SliderContainerAll.hidden = true
    SliderContainerClasses.hidden = true
    SliderContainerParty.hidden = true
    SliderContainerContest.hidden = true
    SliderContainerMusic.hidden = false
}