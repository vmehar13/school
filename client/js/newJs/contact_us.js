const contactForm = document.querySelector('.contact');
const API_URL_CONTACT = 'http://localhost:8000/api/contact/create';

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const admission_class = formData.get('admission_class');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const admission_session = formData.get('admission_session');

    const contact = {
        fullName,
        email,
        admission_session,
        phone,
        message,
        admission_class
    }
    
    fetch(API_URL_CONTACT, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(
        alert("your request sumbited succesfully")
    )
});