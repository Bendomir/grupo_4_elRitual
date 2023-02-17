window.onload = function(){
    
           
        let userName = document.querySelector("#userName");
        let userNameError = document.querySelector(".userNameError");
        
        let password = document.querySelector("#password");
        let passwordError = document.querySelector(".passwordError");
    
        let form = document.querySelector("form")
    
        
       
      
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