// Basic form validation example
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !password) {
        alert('Please enter both email and password.');
        e.preventDefault();
    }
});
