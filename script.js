document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('musicUpload');
    uploadInput.addEventListener('change', (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        alert(`Lagu "${files[0].name}" berhasil diupload (simulasi).`);
        // Simulasi upload: bisa dihubungkan ke server / firebase nanti
      }
    });
  });
  