document.getElementById('cek').addEventListener('click', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.toLowerCase().trim();

    if (nameInput === "wina suresti") {
        window.location.href = "ultah.html"; // Redirect to ultah.html
    } else {
        window.location.href = "salah.html"; // Redirect to no.html
    }
});