fetch('https://api.ratesapi.io/api/latest')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("FALLO", error))

document.querySelector('button').onclick = function (){
 
}
