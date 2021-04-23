/// <reference types='jquery' />

document.querySelector('button').onclick = function (){
  const $moneda = document.querySelector('#bases').value;
  const $fecha = document.querySelector('#fecha').value;
  fetch(`https://api.ratesapi.io/api/${$fecha}?base=${$moneda}`)
    .then(response => response.json())
    .then(data =>{
      Object.keys(data.rates).forEach(function(key){
        const $table = $('table')
        $table.append(`<tr><td>${key}</td><td>${data.rates[key]}</td></tr>`)
      })
    })
    .catch(error => console.error("FALLO", error))

  
}

