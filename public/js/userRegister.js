window.onload = function(){
console.log("probando")
    let firstName = document.querySelector("#firstName");
    let firstNameError = document.querySelector(".firstNameError");

    let lastName = document.querySelector("#lastName");
    let lastNameError = document.querySelector(".lastNameError");

    let email = document.querySelector("#email");
    let emailError = document.querySelector(".emailError");

    let userName = document.querySelector("#userName");
    let userNameError = document.querySelector(".userNameError");

    let password = document.querySelector("#password");
    let passwordError = document.querySelector(".passwordError");

    let form = document.querySelector("form")

    
    firstName.addEventListener("input", (e)=> {
        if (e.target.value.length < 2) {
            firstNameError.style.display = "block"
            // form.addEventListener("submit", (e)=> {
            //     e.preventDefault();
            // })
        } else {
            firstNameError.style.display = "none"
            // form.addEventListener("submit", (e)=> {
            // })
        }
    })
    lastName.addEventListener("input", (e)=> {
        if (e.target.value.length < 2) {
            lastNameError.style.display = "block"
        } else {
            lastNameError.style.display = "none"
        }
    })
    email.addEventListener("input", (e)=> {
        if (!e.target.value.includes("@")) {
            emailError.style.display = "block"
        } else {
            emailError.style.display = "none"
        }
    })
    userName.addEventListener("input", (e)=> {
        if (e.target.value.length < 8) {
            userNameError.style.display = "block"
        } else {
            userNameError.style.display = "none"
        }
    })
    password.addEventListener("input", (e)=> {
        if (e.target.value.length < 8) {
            passwordError.style.display = "block"
        } else {
            passwordError.style.display = "none"
        }
    })


}