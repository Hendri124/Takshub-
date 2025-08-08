const form = document.getElementById("Registrasi")
const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

form.addEventListener('submit',(x)=>{
  x.preventDefault()
  const data_user = username.value.trim()
  const data_pw = password.value.trim()
  localStorage.setItem('data_user', data_user)
  localStorage.setItem('data_pw',data_pw)
  alert("login success ")
})