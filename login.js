document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validasi sederhana
    if (username === "farel" && password === "33") {
        // Redirect ke halaman lain setelah login berhasil
        window.location.href = "crud.html";
    } else {
        errorMessage.textContent = "Username atau password salah!";
    }
});

// Menangani pop-up untuk Lupa Password
const forgotPasswordLink = document.getElementById('forgotPassword');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const displayPassword = document.getElementById('displayPassword');

// Menampilkan pop-up saat tautan diklik
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tautan dari pengalihan
    popup.style.display = 'block';
});

// Menutup pop-up saat tombol close diklik
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Menutup pop-up saat area di luar pop-up diklik
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

