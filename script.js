let boton = document.getElementById("icono")
let enlaces = document.getElementById("enlaces")
let preprarar = document.getElementById("Submit")
let contador = 0

boton.addEventListener("click", function() {
    if (contador==0)
    {
        enlaces.className = ("enlaces dos")
        contador=1
    }
    else{
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador = 0
    }

})

preprarar.addEventListener("click", function(){

    alert("En un momento lo preparamos!")

})

