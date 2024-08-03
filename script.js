document.getElementById('googleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted:', { name, email, age, gender, message });

    this.reset();
    window.location.href = 'confirmation.html';

});
