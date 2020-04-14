import validator from './validator.js'; //Importamos el objeto validator del otro archivo JS

//git push origin master:gh-pages

//Botones 
let botonConfirmar=document.getElementById("confirmarbtn");
let botonVolver=document.getElementById("volverbtn");

let creditCardNumber; //Definiendo variable donde guardaremos el numero que ingresa el usuario
botonConfirmar.addEventListener("click",function(){ //Funcion para validar campo de texto admitiendo solo numeros
    let numeroParaComprobar = document.getElementById("numTarjeta").value; //Guarda lo ingresado
     
    let numeroEnmascarado;
    
    //Condicion, si el campo esta vacio, tiene espacios, etc mostrar mensaje
    if(numeroParaComprobar==null || numeroParaComprobar=="" || document.getElementById("numTarjeta").value.indexOf(" ") !== -1) {     
        alert("El campo no puede estar vacio");
        document.getElementById("error").innerHTML = "Ingrese numero de tarjeta valido";
        document.getElementById("mensajeError").style.display = "block"; //Mostrar en la pagina mensaje de error
        
  
    }else if(isNaN(numeroParaComprobar)){
        alert("Solo ingrese numeros");
    }else{//Si la tarjeta es solo numeros
         creditCardNumber=numeroParaComprobar; //Guardamos los numeros en la variable
         
         if(validator.isValid(creditCardNumber)==true){ //Si es un numero de tarjeta valido
            
            numeroEnmascarado=validator.maskify(creditCardNumber); //Enmascaramos los digitos con #
            
            //Aqui redirigir a la ultima pantalla html y mostrar el digito oculto con # al usuario

           
            document.getElementById("tarjetaCorrecta").innerHTML = "Su tarjeta numero "+numeroEnmascarado+" ha realizado la compra con éxito";
            document.getElementById("numeroCorrectoTarjeta").style.display = "block";

            
         }
         if(validator.isValid(creditCardNumber)==false){
            
            numeroEnmascarado=validator.maskify(creditCardNumber); //Enmascaramos los digitos con #
            
            document.getElementById("error").innerHTML = "Ingrese numero de tarjeta valido";
            document.getElementById("mensajeError").style.display = "block"; //Mostrar en la pagina mensaje de error
            document.getElementById("errorNumero").innerHTML = "Numero "+numeroEnmascarado+" no es correcto";
            document.getElementById("numeroErroneoTarjeta").style.display = "block";
            
         }
    }
});

//Boton para volver
botonVolver.addEventListener("click",function(){ //Boton para volver a pagina anterior
    location.href="index.html";
});




