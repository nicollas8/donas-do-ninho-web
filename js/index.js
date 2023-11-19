const insta = document.getElementById("instagram")
const email = document.getElementById("email")
const dowload = document.getElementById("dowload")

dowload.addEventListener('click', () => {
  location.href = "https://drive.google.com/file/d/10sSFKXIwm0Rpb5ztYWWZ7ay7G7exc7wq/view?usp=drive_link"
})

insta.addEventListener('click', () =>{
  location.href = "https://www.instagram.com/donasdoninho/"
})

email.addEventListener('click', () => {
  location.href = "donasdoninhosuporte@gmail.com"
})