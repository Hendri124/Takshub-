const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})
const modal = document.getElementById("modal");
  const addBtn = document.getElementById("addrepo");
  const cancelBtn = document.getElementById("cancelBtn");
  const saveRepoBtn = document.getElementById("saveRepo");

  // Munculin modal
  addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Tutup modal
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Simpan data
  saveRepoBtn.addEventListener("click", () => {
    const repoName = document.getElementById("repoName").value.trim();
    const participants = document.getElementById("participants").value.trim();

    if(repoName && participants) {
      alert(`Repo: ${repoName} | Peserta: ${participants}`);
      // bisa simpan ke localStorage atau kirim ke backend di sini
      modal.style.display = "none";
    } else {
      alert("Isi semua field dulu dong ");
    }
  });

  // Klik di luar modal buat nutup
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });