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
