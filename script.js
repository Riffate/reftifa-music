// script.js
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById('musicUpload');
  uploadInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`Lagu "${files[0].name}" berhasil diupload dan dikirim sebagai permintaan pembuatan lagu (simulasi).`);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
