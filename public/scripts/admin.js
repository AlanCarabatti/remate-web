// admin.js

// Definir las credenciales del administrador
const USERNAME = "admin";
const PASSWORD = "admin123";

// Verificar que los elementos existan antes de acceder a ellos
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

if (loginBtn && usernameInput && passwordInput) {
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Comprobar si las credenciales son correctas
        if (username === USERNAME && password === PASSWORD) {
            // Si son correctas, muestra el panel de administración
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
        } else {
            alert("Credenciales incorrectas");
        }
    });
} else {
    console.error("Algunos elementos no se encuentran en el DOM.");
}
