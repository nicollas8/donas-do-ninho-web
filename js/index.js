const insta = document.getElementById("instagram")
const email = document.getElementById("email")
const dowload = document.getElementById("dowload")

dowload.addEventListener('click', () => {
  location.href = "https://drive.google.com/file/d/1RBsLfXQBskGlVgGFR7sWqeQe9USUZqbA/view?usp=sharing"
})

insta.addEventListener('click', () =>{
  location.href = "https://www.instagram.com/donasdoninho/"
})

email.addEventListener('click', () => {
  location.href = "donasdoninhosuporte@gmail.com"
})