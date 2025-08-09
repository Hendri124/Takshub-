const form = document.getElementById("form")
const email = document.getElementById("email")
const nama = document.getElementById("nama")
const text = document.getElementById("text")

form.addEventListener('submit',(x)=>{
  x.preventDefault()
  const data_email = email.value
  const data_nama = nama.value
  const data_pesan = text.value
  
  if(data_nama === ""|| data_pesan === ""|| data_email === ""){
    alert("data tidak boleh kosong ")
  } else {
    alert("pesan berhasil terkirim terimakasih telah menghubungi ")
  }
})