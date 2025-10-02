// Evento que se dispara cuando se termina de cargar el DOM
//DOM documnet objet model

document.addEventListener("DOMContentLoaded", function(){
    //declaramos una variable en javaScrip que representa el boton
    var btncalculo1= document.getElementById("button-ok");


    // declaramos un evento click a ese boton 
    btncalculo1.addEventListener("click",function(){

        //declaramos las variables que representara el imput en html
        var value1 = parseFloat(document.getElementById("input-value1").value);
        var value2 = parseFloat(document.getElementById("input-value2").value);
        var value3 = parseFloat(document.getElementById("input-value3").value);

        //valida que los valores sean numericos
        //  muestra una alerta y detiene la funcion si no los son
        if(isNaN(value1) || isNaN(value2)|| isNaN(value3)){
            alert("Introduce solo valores validos");

            // console son solo comentarios para el desarrolador 
            console.error("El usuario ingresó un valor inválido");
            return;
        }
        
        /*var area = (value1*100)*(value2*100)
        var superficieAzulejo = 25 * 25
        var cantidadAzulejos = superficieAzulejo/625
        var precioAzulejo = parseFloat(document.getElementById("input-value3").value);
        var precioTotal = cantidadAzulejos * precioAzulejo*/


        // Este bloque de código calcula el área total de una superficie,
        // determina cuántos azulejos de 25x25 cm se necesitan para cubrirla,
        // obtiene el precio unitario de un azulejo desde el input del usuario
        // y calcula el costo total de la compra.    
        var  largo = value1 *100
        var  ancho = value2 *100
        var area = largo * ancho
        var areaAzulejo = 25 * 25
        var cantidadAzulejos = area / areaAzulejo
        var precioAzulejo = parseFloat(document.getElementById("input-value3").value);
        var precioTotal = cantidadAzulejos * precioAzulejo
       

        

        //mostramos alerta del navegador con el contenido del input
         alert("El area a cubrir es de " + area + " cm2 \n se necesitan " + cantidadAzulejos + " azulejos \n el costo total es de: $" + precioTotal + "\n area en m2: " + (area/10000) );
        
    });


        console.log("se imprimio el hola mundo");
        console.error("esto es un error")



    })




