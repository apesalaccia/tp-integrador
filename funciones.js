const CantOfTickets = document.getElementById('cantidadEnt')
const btnCalculate = document.getElementById('btnResumen')
const btnDelete = document.getElementById('btnBorrar')
const category = document.getElementById('categoria')
const totalBuy = document.getElementById('total')
const price = 200
const selectCate = {
    1: 0.2,
    2: 0.5,
    3: 0.85
};


btnCalculate.addEventListener('click',calculate)
btnDelete.addEventListener('click', Delete)


function calculate(){
    if(CantOfTickets.value >= 1  ){
let total = price * CantOfTickets.value
desc = selectCate[category.value]
total *= desc
totalBuy.textContent = total
CantOfTickets.style.border ="2px solid light grey"
alert("compra realizada")
}
else {totalBuy.textContent ="" || alert("completa el campo")

CantOfTickets.style.border = "2px solid red"
}

}

function Delete(e){
    e.preventDefault()
totalBuy.textContent = ''
category.value = ""
CantOfTickets.value = ''
CantOfTickets.style.border ="1px solid light grey"

}

