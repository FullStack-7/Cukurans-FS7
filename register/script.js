document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form')

    form.addEventListener('submit', async function(event) {
        event.preventDefault()

        const pesan = document.getElementById('pemberitahuan');
        const Name = document.getElementById('text').value;
        const Email = document.getElementById('email').value;
        const Password = document.getElementById('password').value;
        const Repassword = document.getElementById('repas').value;

        if (Name.trim() === '' || Email.trim() === '' || Password.trim() === '' || Repassword.trim() === '') {
           pesan.innerHTML = 'Masukkan data yang benar'
        } else if (Password !== Repassword) {
            pesan.innerHTML = "Password dan Repasword tidak sama!"
        } else {
            pesan.innerHTML = ''
            
            const data = { Name, Email, Password, Repassword };

            const req = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            
            try {
                const api = await fetch('https://65275571917d673fd76d9437.mockapi.io/Users', req);
                if (api.ok) {
                    const apiData = await api.json();
                    console.log(apiData);
                    window.location.href = '/Login/index.html'
                } else {
                    throw new Error('Error');
                }
            } catch (err) {
                console.error(err);
            }
        }
    })
})
