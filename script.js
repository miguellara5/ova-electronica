document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname !== '/login.html' && !localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }
    
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});
