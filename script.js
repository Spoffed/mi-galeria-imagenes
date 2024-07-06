const uploadedFiles = new Set();

function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];

        // Check if the file has already been uploaded
        if (uploadedFiles.has(file.name)) {
            alert("Este archivo ya ha sido subido.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.title = "Haz clic para eliminar";
            img.onclick = function () {
                if (confirm("¿Estás seguro de que deseas eliminar esta imagen?")) {
                    gallery.removeChild(img);
                    uploadedFiles.delete(file.name);
                }
            };
            gallery.appendChild(img);
            uploadedFiles.add(file.name);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Por favor, seleccione una imagen.");
    }
}
