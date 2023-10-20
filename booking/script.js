document.getElementById('submit-btn').addEventListener('click', async () => {
	const date = document.getElementById('date').value;
	const time = document.getElementById('time').value;
	const selectElement = document.getElementById('pilihan');
	const layanan = selectElement.options[selectElement.selectedIndex].text;
	const pesan = document.getElementById('pemberitahuan');

	// menyimpan data ke local storage
	if (date != '' && time != '' && layanan != '') {
		localStorage.setItem('date', date);
		localStorage.setItem('time', time);
		localStorage.setItem('layanan', layanan);
	}

	const data = {
		date: date,
		time: time,
		layanan: layanan,
	};

	const req = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	try {
		const api = await fetch(
			'https://65275571917d673fd76d9437.mockapi.io/datetime',
			req,
		);
		// push data ke api
		if (api.ok) {
			const apiData = await api.json();
			console.log(apiData);

			document.getElementById('modal-date').textContent = date;
			document.getElementById('modal-time').textContent = time;
			document.getElementById('modal-layanan').textContent = layanan;

			if (date == '' || time == '' || layanan == '') {
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
const selectElement = document.getElementById('pilihan');
const options = [
	{ value: 'Cukur + Keramas = Rp.30.000', text: 'Cukur + Keramas = Rp.30.000' },
	{ value: 'Coloring = Rp.100.000', text: 'Coloring = Rp.100.000' },
	{
		value: 'Cukur + rubah wajah = Rp.1.000.000',
		text: 'Cukur + rubah wajah = Rp.1.000.000',
	},
];

options.forEach((option) => {
	const optionElement = document.createElement('option');
	optionElement.value = option.value;
	optionElement.text = option.text;
	selectElement.appendChild(optionElement);
});

// Mengambil data booking melalui API Products
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const title = urlParams.get('name');
const price = urlParams.get('price');
const imgUrl = urlParams.get('image');

const resultElement = document.getElementById('booking');

const cardBooking = `			
        <img 
            src="${imgUrl}" 
            alt="" 
            class="rounded-4 img-fluid"
						/> 
        <div class="d-flex flex-col justify-content-between"> 
            <h4 class="mt-3">${title}</h4> 
            <h5 class="mt-3">${price}</h5> 
        </div> 
        <h5>⭐⭐⭐⭐✰</h5> 
    `;

resultElement.innerHTML += cardBooking;

// Menampilkan user yang sedang login
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
	const user = JSON.parse(loggedInUser);
	const loginButton = document.getElementById('btn-login');
	const userElement = (document.getElementById('user-login').textContent =
		user.Name);

	// Sembunyikan tombol login
	loginButton.style.display = 'none';

	// Tampilkan elemen user
	userElement.style.display = 'block';
} else {
	alert('Silakan login terlebih dahulu');
}
