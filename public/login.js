const form = document.getElementById("login")
const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

form.addEventListener('submit',(x)=>{
  x.preventDefault()
  const ambil_Data = localStorage.getItem("user")
  const input_user = username.value
  const input_pw = password.value
    
const validation = JSON.parse(ambil_Data)
if(validation.data_user === input_user&& validation.data_pw === input_pw){
  alert("succes")
}else {
  alert("failed")
}
})