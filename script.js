let listServices = document.getElementById('list-services');

// Mengambil data services dari MockAPI
async function getDataServices() {
	try {
		let response = await fetch(
			'https://6526a485917d673fd76cb35c.mockapi.io/services',
		);
		let service = await response.json();

		service.map((item, index) => {
			let cardServices = `
      <div class="col-md-4 mt-3">
        <div class="card-services rounded-4">
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
