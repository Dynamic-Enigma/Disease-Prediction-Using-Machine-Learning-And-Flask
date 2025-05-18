// Show selected file name
document.getElementById("fileInput").addEventListener("change", function () {
    const fileName = this.files[0]?.name || "No file chosen";
    document.getElementById("fileName").textContent = fileName;
});
