function validarInputs() {
    let image = document.querySelector("#images")
    let imageError = document.querySelector(".imageError")

    let name = document.querySelector("#name")
    let nameError = document.querySelector(".nameError")

    let price = document.querySelector("#price")
    let priceError = document.querySelector(".priceError")

    let form = document.querySelector("form.reservation")

    name.addEventListener("input", (e)=> {
        console.log(name)
        console.log(nameError)
        e.target.style.borderColor = "green";
        if (e.target.value.length < 3) {
            nameError.style.display = "block"
            e.target.style.borderColor = "red";
        } else {
            nameError.style.display = "none"
        }
    })

    price.addEventListener("input", (e) => {
        console.log(price)
        console.log(priceError)
        e.target.style.borderColor = "green";
        if (e.target.value.length < 3) {
            priceError.style.display = "block"
            e.target.style.borderColor = "red";
        } else {
            priceError.style.display = "none"
        }
    })


    image.addEventListener("input", (e)=> {
        console.log(image)
        console.log(imageError)
        const extensions = /(\.jpg|\.png|\.gif|\.jpeg)$/i;
        const filePath = e.target.value;
        if (!extensions.exec(filePath)) {
            imageError.style.display = "block";
        } else {
            imageError.style.display = "none";
        }
    });
}

window.onload = function() {
    validarInputs();
};