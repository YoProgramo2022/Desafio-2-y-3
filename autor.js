var mensaje = "Las suscripciones se habilitarán pronto";
var boton=document.getElementById("suscripcion");

function redireccionar(){
   window.location ="contacto.html";
   alert();
}

boton.addEventListener ("click", function(){
      alert(mensaje);
      let respuesta = prompt("¿Desea dejar una consulta online? (escribir si o no en minuscula)");
      if(respuesta == "si"){
         redireccionar();      
      }       
});




function seguro(){ 

    let x=document.getElementById("nombre").value;
    let respuestados=confirm("¿Estás seguro de querer enviar este mensaje?");

    if(respuestados){
       alert("Gracias por tu mensaje, "+ x); 
    } else {
            alert("Mensaje Cancelado"); 
    }             
}


