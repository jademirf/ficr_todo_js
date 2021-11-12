const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const formNovaLista = document.getElementById('novaLista')


const listas = []

btnNovaLista.addEventListener('click', function() {
  cardNovaLista.style.display = 'block'
})

formNovaLista.addEventListener('submit', function(event) {
  event.preventDefault()
  const inputTitulo = document.querySelector('input[name="tituloLista"]')
  if(inputTitulo.value != '') {
    const novaLista = {
      id: listas.length + 1,
      titulo: inputTitulo.value
    }
    inputTitulo.value = ''
    listas.push(novaLista)
    window.localStorage.listas = JSON.stringify(listas)
  }
  console.log(listas)
})

formNovaLista.addEventListener('reset', function(event) {
  cardNovaLista.style.display = 'none'
})