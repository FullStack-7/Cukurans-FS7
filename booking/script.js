document.getElementById('submit-btn').addEventListener('click', async () => {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const layanan = document.getElementById('pilihan').value

    const data = {
        date: date,
        time: time,
        layanan: layanan
    };

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {
        const api = await fetch('https://65275571917d673fd76d9437.mockapi.io/datetime', req);

        if (api.ok) {
            const apiData = await api.json();
            console.log(apiData);
        } else {
            throw new Error('Gagal mengirim data ke API.');
        }
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
});