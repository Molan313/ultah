document.getElementById('cek').addEventListener('click', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.toLowerCase().trim();
    
    if(!nameInput) {
        alert("Nama tidak boleh kosong");
    }
    else if (nameInput === "wina suresti") {
        window.location.href = "ultah.html"; // Redirect to ultah.html
    }
    else if (nameInput === "faisal masri maulana") {
        alert("Itu nama saya! (╬≖_≖)");
    }
    else {
        window.location.href = "salah.html"; // Redirect to no.html
    }
});