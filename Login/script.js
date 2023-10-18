document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form')

    form.addEventListener('submit', async function(event) {
        event.preventDefault()

        const pesan = document.getElementById('pemberitahuan')
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email.trim() === '' || password.trim() === ''){
            pesan.innerHTML = 'Masukkan Email dan Password'
        } else {
            pesan.innerHTML = ''
            await getData(email, password)
        }
    })
})

async function getData(email, password) {
    try {
        let response = await fetch('https://65275571917d673fd76d9437.mockapi.io/Users');
        if (!response.ok) {
            console.error("Terjadi kesalahan:", response.status);
            return;
        }

        let users = await response.json();

        const userFound = users.find(user => user.Email === email && user.Password === password);
        const pesan = document.getElementById('pemberitahuan')

        if (userFound){
            window.location.href = '/index.html'
        } else {
            pesan.innerHTML = 'Email atau Password anda salah'
        }

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}