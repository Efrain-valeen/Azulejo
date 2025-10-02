// Evento que se dispara cuando se termina de cargar el DOM
//DOM documnet objet model

document.addEventListener("DOMContentLoaded", function(){
    //declaramos una variable en javaScrip que representa el 
    var btnOK = document.getElementById("btn-ok");


    // declaramos un evento click a ese boton 
    btnOK.addEventListener("click",function(){

        //declaramos una variable que represnta el imput en html
        var name = document.getElementById("input-name");

        //mostramos alerta del navegador con el contenido del input
        alert("hello world"   +   name.value);

        console.log("se imprimio el hola mundo");
        console.error("esto es un error")



    })




})