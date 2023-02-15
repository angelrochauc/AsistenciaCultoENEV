function sumar(){
  var valor1 = Number(document.getElementById('niños').value);
  var valor2 = Number(document.getElementById('joven').value);
  var valor3 = Number(document.getElementById('hora').value);

  var total = valor1 + valor2 + valor3;

  document.getElementById('total').value = total;
}




var hoy = new Date()
var fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2) ;
var hora = ('0' + hoy.getHours()).slice(-2) + ':' + ('0' + hoy.getMinutes()).slice(-2);

var fecha = fecha +' '+ hora;
document.getElementById('fecha').value = fecha;

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573104866092";

  const cliente = document.querySelector("#niños").value;
  const joven = document.querySelector("#joven").value;
  const total = document.querySelector("#total").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;

  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*Asistencia*%0A
		*Niños:*  
		${cliente}%0A
		*Jóvenes:* 
		${joven}%0A
		*Adultos:* 
		${hora}%0A
		*Total:* 
		${total}%0A
		*Coodinador:* 
		${empleado}%0A
		*Fecha:* 
		${fecha}%0A`;

  if (cliente === "" || fecha === "" || hora === "" || joven === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado`;



  window.open(url);
});

