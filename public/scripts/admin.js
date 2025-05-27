// admin.js

// Definir las credenciales del administrador
const USERNAME = "admin";
const PASSWORD = "admin123";

// Lógica para el inicio de sesión
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Comprobar si las credenciales son correctas
    if (username === USERNAME && password === PASSWORD) {
        // Si son correctas, muestra el panel de administración
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert("Credenciales incorrectas");
    }
});
