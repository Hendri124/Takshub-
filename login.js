const form = document.getElementById("login")
const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

form.addEventListener('submit', (x) => {
  x.preventDefault();

  const ambil_Data = localStorage.getItem("data");
  if (!ambil_Data) {
    alert("Data user belum tersimpan");
    return;
  }

  const input_user = username.value;
  const input_pw = password.value;
  const validation = JSON.parse(ambil_Data);

  if (validation.data_user === input_user && validation.data_pw === input_pw) {
    alert("success");
    window.location.href = "index.html"
  } else {
    alert("failed");
  }
});