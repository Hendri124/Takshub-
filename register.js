const form = document.getElementById("Registrasi")
const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

form.addEventListener('submit',(x)=>{
  x.preventDefault()
  const data_user = username.value.trim()
  const data_pw = password.value.trim()
  const data = {data_user,data_pw}
  localStorage.setItem("data",JSON.stringify(data))
  alert("login success ")
  window.location.href = "login.html"
})