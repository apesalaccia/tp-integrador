const CantOfTickets = document.getElementById('cantidadEnt')
const btnCalculate = document.getElementById('btnResumen')
const btnDelete = document.getElementById('btnBorrar')
const category = document.getElementById('categoria')
const totalBuy = document.getElementById('total')
const form = document.forms.formu
const price = 200
const selectCate = {
    1: 0.2,
    2: 0.5,
    3: 0.85
};

btnCalculate.addEventListener('click',calculate)
btnDelete.addEventListener('click', Delete)

function calculate(){
let total = price * CantOfTickets.value
desc = selectCate[category.value]
total *= desc
totalBuy.textContent = total
}
function Delete(e){
    e.preventDefault()
totalBuy.textContent = ""
category.textContent = ""
CantOfTickets.textContent = ""

}