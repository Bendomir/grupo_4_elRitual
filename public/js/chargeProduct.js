window.onload = function() {    

    let image = document.querySelector("#images")
    let imageError = document.querySelector(".imageError")
    let name = document.querySelector("#name")
    let nameError = document.querySelector(".nameError")
    let form = document.querySelector("form.reservation")
    
    name.addEventListener("input", (e)=> {
        if (e.target.value.length < 5) {
           nameError.style.display = "block"
        } else {
            nameError.style.display = "none"
        }
    })
    
    image.addEventListener("input", (e)=> {
        if (!e.target.value) {
            imageError.style.display = "block"
        } else {
            imageError.style.display = "none"
        }
    })
  }