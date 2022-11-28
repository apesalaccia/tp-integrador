const box1 = document.getElementById('Estudiante')
const box2 = document.getElementById('Trainee')
const box3 = document.getElementById('Junior')
const cards = document.getElementsByClassName('card')
const Name= document.getElementById('inputNombre')
const firstName= document.getElementById('inputApellido')
const email = document.getElementById('inputCorreo')
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
else {totalBuy.textContent ="" || alert("completa todos los campos")

}

}

function Delete(e){
    e.preventDefault()
totalBuy.textContent = ''
category.value = ""
CantOfTickets.value = ''
CantOfTickets.style.border ="1px solid light grey"
 Name.value = ""
firstName.value = ""
email.value = ""
}

function handleClick(box) {
    box.ariaChecked = true
    box.classList.replace('bg-transparent','bg-light')
    category.value=(box.id==="Estudiante" && "1") ||
    (box.id ==="Trainee" && "2") ||
    (box.id ==="Junior" && "3")
    for (let item of cards) {
        if (item.id !== box.id) {       
            item.classList.replace("bg-light","bg-transparent")
            item.ariaChecked = false
        }
    }
    }




function assignEvents(box){
    box.addEventListener("click", () => handleClick(box))
}
assignEvents(Estudiante)
assignEvents(Trainee)
assignEvents(Junior)






