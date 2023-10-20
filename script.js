function animateBlink() {
	const icons = document.querySelectorAll('.icon');
	icons.forEach((icon, index) => {
		setTimeout(() => {
			icon.classList.add('blink');
		}, index * 500);
	});
}

// Panggil fungsi animasi berkedip setelah halaman dimuat
window.addEventListener('load', animateBlink());

// Api list services
async function fetchData() {
	try {
		let response = await fetch(
			'https://6526a485917d673fd76cb35c.mockapi.io/services',
		);
		let service = await response.json();
		return service;
	} catch (error) {
		throw error;
	}
}

// Mengambil data services dari MockAPI
async function getDataServices() {
	try {
		let service = await fetchData();
		let listServices = document.getElementById('list-services');

		service.map((item, index) => {
			let cardServices = `
      <div class="col-md-4 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="card-services rounded-4" onclick="showModalService(${index})">
          <div class="icon-round rounded-4 position-relative mx-auto">
            <img
              src="${item.imageUrl}"
              alt=""
              srcset=""
              class="img-fluid icon-img position-absolute top-50 start-50 translate-middle" />
          </div>
          <h3 class="text-primary mt-4 text-center">${item.name}</h3>
          <p class="text-white mt-3 text-center">${item.description}</p>
        </div>
      </div>`;

			listServices.innerHTML += cardServices;
		});
	} catch (error) {
		console.log(error);
	}
}

getDataServices();

async function showModalService(index) {
	let services = await fetchData();

	let modalTitle = document.getElementById('modal-title');
	let modalContent = document.getElementById('modal-content');

	modalTitle.innerHTML = services[index].name;
	modalContent.innerHTML = services[index].detailDescription;
}

// ========= Api list Products ========= //
async function fetchDataProducts() {
	try {
		let response = await fetch(
			`https://6526a485917d673fd76cb35c.mockapi.io/products`,
		);

		let result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
}

async function getDataProducts() {
	try {
		let products = await fetchDataProducts();
		let listProducts = document.getElementById('list-products');

		products.map((item, index) => {
			let cardProducts = `
			<div class="col-md-6 mb-4">
				<div class="card rounded-4">
					<img
					src="${item.imgUrl}"
					class="card-img-top rounded-4"
					alt="..." />
						<div class="card-body align-self-center">
							<div class="text-section">
								<h5 class="card-title">${item.title}</h5>
								<p class="card-text">
									${item.description}
								</p>
								<p>${item.price}</p>
								<button onclick="showProductsById(${item.id})" class="btn btn-primary w-100">Book now</button>
							</div>
						</div>
				</div>
			</div>
			`;

			listProducts.innerHTML += cardProducts;
		});
	} catch (error) {
		console.log(error);
	}
}

getDataProducts();

// Membuat booking berdasarkan id
async function showProductsById(id) {
	try {
		let productsById = await fetch(
			`https://6526a485917d673fd76cb35c.mockapi.io/products/${id}`,
		);
		let result = await productsById.json();

		window.location.href = `./booking/index.html?id=${result.id}&name=${result.title}&price=${result.price}&image=${result.imgUrl}`;
	} catch (error) {
		console.log(error);
	}
}

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
