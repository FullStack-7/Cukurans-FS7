document.getElementById("showForm1").addEventListener("click", function() {
    document.getElementById("form1").classList.remove("hidden");
    document.getElementById("form2").classList.add("hidden");
    document.getElementById("pemberitahuan").textContent = "";
});

document.getElementById("showForm2").addEventListener("click", function() {
    document.getElementById("form1").classList.add("hidden");
    document.getElementById("form2").classList.remove("hidden");
    document.getElementById("pemberitahuan").textContent = "";
});

document.addEventListener("DOMContentLoaded", function() {
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');
    const layanan = localStorage.getItem('layanan');

    if (date && time && layanan) {
        document.getElementById('display-date').textContent = date;
        document.getElementById('display-time').textContent = time;
        document.getElementById('display-layanan').textContent = layanan;
    }

    document.getElementById("submit-btn").addEventListener("click", function() {
        if (!document.getElementById("form1").classList.contains("hidden")) {
            const nama_kartu = document.getElementById("nama_kartu").value;
            const nomor_kartu = document.getElementById("nomor_kartu").value;
            const bulan = document.getElementById("bulan").value;
            const tahun = document.getElementById("tahun").value;
            const cvv = document.getElementById("cvv").value;

            if (nama_kartu === "" || nomor_kartu === "" || bulan === "" || tahun === "" || cvv === "") {
                document.getElementById("pemberitahuan").textContent = "Form kartu kredit harus diisi dengan lengkap.";
            } else {
                $('#successModal').modal('show');
            }
        } else if (!document.getElementById("form2").classList.contains("hidden")) {
            const pilihan = document.getElementById("pilihan").value;
            const ewallet = document.getElementById("ewallet").value;

            if (!pilihan || !ewallet) {
                document.getElementById("pemberitahuan").textContent = "Form E-Wallet harus diisi dengan lengkap.";
            } else {
                $('#successModal').modal('show');
            }
        }
    });

    // Tambahkan event listener untuk tombol "Bayar" di Form2 (ewallet)
    document.getElementById("submit-btn-form2").addEventListener("click", function() {
        const pilihan = document.getElementById("pilihan").value;
        const ewallet = document.getElementById("ewallet").value;

        if (!pilihan || !ewallet) {
            document.getElementById("pemberitahuan").textContent = "Form E-Wallet harus diisi dengan lengkap.";
        } else {
            $('#successModal').modal('show');
        }
    });

    // Tambahkan event listener untuk tombol "showForm1" dan "showForm2"
    document.getElementById("showForm1").addEventListener("click", function() {
        document.getElementById("form1").classList.remove("hidden");
        document.getElementById("form2").classList.add("hidden");
        document.getElementById("pemberitahuan").textContent = "";
    });

    document.getElementById("showForm2").addEventListener("click", function() {
        document.getElementById("form1").classList.add("hidden");
        document.getElementById("form2").classList.remove("hidden");
        document.getElementById("pemberitahuan").textContent = "";
    });
});
