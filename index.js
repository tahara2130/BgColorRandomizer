//Creamos una variable button y le asignamos que busque el boton creado por el id
button = document.getElementById('btn')

//Al hacer click ejecutamos la una funcion
button.onclick = function() {
    //Creamos una variable r y hacemos que genere un numero random
    r = Math.floor(Math.random() * (255 - 0)) + 0
    //Creamos una variable g y hacemos que genere un numero random
    g = Math.floor(Math.random() * (255 - 0)) + 0
    //Creamos una variable b y hacemos que genere un numero random
    b = Math.floor(Math.random() * (255 - 0)) + 0
    //Cambiamos el estilo del backgroundColor a los parametros que hicimos arriba
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    return
}