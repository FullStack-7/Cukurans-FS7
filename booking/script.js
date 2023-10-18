document.getElementById('submit-btn').addEventListener('click', async () => {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const selectElement = document.getElementById('pilihan');
    const layanan = selectElement.options[selectElement.selectedIndex].text;
    const pesan = document.getElementById('pemberitahuan');


    // menyimpan data ke local storage
    if (date != "" && time != "" && layanan != "") {
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
        localStorage.setItem('layanan', layanan);
    }
    

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
        // push data ke api
        if (api.ok) {
            const apiData = await api.json();
            console.log(apiData);

            document.getElementById('modal-date').textContent = date;
            document.getElementById('modal-time').textContent = time;
            document.getElementById('modal-layanan').textContent = layanan;

            if (date == "" || time == "" || layanan == "") {
                pesan.innerHTML = 'Masukkan data ! Data tidak boleh kosong';
            } else {
                $('#dataModal').modal('show');
            }
        } else {
            throw new Error('Gagal mengirim data ke API.');
        }
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
    }
});

// penambahan layanan
const selectElement = document.getElementById("pilihan");
const options = [
    { value: "Cukur + Keramas = Rp.30.000", text: "Cukur + Keramas = Rp.30.000" },
    { value: "Coloring = Rp.100.000", text: "Coloring = Rp.100.000" },
    { value: "Cukur + rubah wajah = Rp.1.000.000", text: "Cukur + rubah wajah = Rp.1.000.000" }
];

options.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    selectElement.appendChild(optionElement);
});


