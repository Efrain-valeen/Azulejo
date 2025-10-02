// Evento que se dispara cuando se termina de cargar el DOM
//DOM document object model

document.addEventListener("DOMContentLoaded", function(){
    //declaramos variables en JavaScript que representan los botones
    var btnOK = document.getElementById("btn-ok");
    var btnresta = document.getElementById("btn-resta");
    var btnMulti  = document.getElementById("btn-multi");
    var btnDivision   = document.getElementById("btn-division");

    // evento click para el botón suma
    btnOK.addEventListener("click", function(){
        calcular("suma");});
    // evento click para boton resta
    btnresta.addEventListener("click", function(){ 
        calcular("resta"); });
        //evento click para boton multi
    btnMulti.addEventListener("click", function(){ 
        calcular("multi"); });
        //evento click para boton division
    btnDivision.addEventListener("click", function(){ 
        calcular("division"); });

    function calcular(operacion){
        // obtenemos los valores de los inputs
        var value1Number = parseFloat(document.getElementById("input-value1").value);
        var value2Number = parseFloat(document.getElementById("input-value2").value);

        if(isNaN(value1Number) || isNaN(value2Number)){
            alert("Introduce solo valores numéricos");
            console.error("El usuario ingresó un valor inválido");
            return;
        }

        var resultado;
        switch(operacion){
            case "suma":
                resultado = value1Number + value2Number;
                break;
            case "resta":
                resultado = value1Number - value2Number;
                break;
            case "multi":
                resultado = value1Number * value2Number;
                break;
            case "division":
                if(value2Number === 0){
                    alert("No se puede dividir entre 0");
                    return;
                }
                resultado = value1Number / value2Number;
                break;
        }
        alert("El resultado es: " + resultado);
    }
});







    