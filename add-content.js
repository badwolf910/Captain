const inquiryForm = document.querySelector('#inquiry-form');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(inquiryForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const trip = formData.get('trip').trim();
        const subject = encodeURIComponent(`Boat trip inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nTrip details:\n${trip}`);

        window.location.href = `mailto:shweeman@hotmail.com?subject=${subject}&body=${body}`;
    });
}

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}