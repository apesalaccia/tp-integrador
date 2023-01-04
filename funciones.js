const box1 = document.getElementById('Estudiante')
const box2 = document.getElementById('Trainee')
const box3 = document.getElementById('Junior')
const cards = document.getElementsByClassName('cards')
const Name = document.getElementById('inputNombre')
const firstName = document.getElementById('inputApellido')
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


btnCalculate.addEventListener('click', calculate)
btnDelete.addEventListener('click', Delete)


function ticketsSubmit() {

    let form = document.getElementById("form");
    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.getElementById("." + form[i].id).style.border = "2px solid red";
            } else {
                document.getElementById("." + form[i].id).style.border = "1px solid var(--gray-300)";
            }
        }


        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.getElementById("." + form[2].id).style.border = "1px solid var(--gray-300)";
            } else {
                alert("Debe ingresar un correo válido");
                document.getElementById("." + form[2].id).style.border = "2px solid red"
            }
        } else {
            alert("Completar los campos en rojo");
        }

    }
}

function calculate() {
    if (CantOfTickets.value >= 1) {
        let total = price * CantOfTickets.value
        desc = selectCate[category.value]
        total *= desc
        totalBuy.textContent = total
        CantOfTickets.style.border = "2px solid light grey"
        alert("compra realizada")
    } else {
        totalBuy.textContent = "" || alert("completa todos los campos")

    }

}

function Delete(e) {
    e.preventDefault()
    totalBuy.textContent = ''
    category.value = ""
    CantOfTickets.value = ''
    CantOfTickets.style.border = "1px solid light grey"
    Name.value = ""
    firstName.value = ""
    email.value = ""
}

function handleClick(box) {
    box.ariaChecked = true
    box.classList.replace('bg-transparent','bg-light')
    category.value = 
    (box.id === "Estudiante" && "1") ||
    (box.id === "Trainee" && "2") ||
    (box.id === "Junior" && "3")

    for (let item of cards){
        if (item.id !== box.id) {
        console.log(item.id)
        }
    }
}

    

function asignarE(box){
box.addEventListener('click', ()=> handleClick(box))
}

asignarE(box1)
asignarE(box2)
asignarE(box3)
