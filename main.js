
document.querySelector('button').onclick = function (){
  const $moneda = document.querySelector('#bases').value;
  const $fecha = document.querySelector('#fecha').value;
  fetch(`https://api.ratesapi.io/api/${$fecha}?base=${$moneda}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("FALLO", error))

 
}
