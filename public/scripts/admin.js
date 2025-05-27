// admin.js

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqMqsungqJZ16UvlPLWURQ4Lj7cjkEGks",
    authDomain: "remateerynunez.firebaseapp.com",
    projectId: "remateerynunez",
    storageBucket: "remateerynunez.appspot.com",
    messagingSenderId: "531727003623",
    appId: "1:531727003623:web:cf09ca8d5bdf0267ae1742",
    measurementId: "G-CM0X4KMZJW"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Función para verificar las credenciales del admin
const USERNAME = "Alan Carabatti";
const PASSWORD = "21334AlanC*";

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === USERNAME && password === PASSWORD) {
        // Si las credenciales son correctas, muestra el panel
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
