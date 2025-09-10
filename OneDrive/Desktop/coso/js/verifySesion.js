const nameInput = document.getElementById("name")
const surenameInput = document.getElementById("surename")
const dateInput = document.getElementById("date")
const emailInput = document.getElementById("email")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const repeatPasswordInput = document.getElementById("repeatPassword")
const terms = document.getElementById("terms")
const errorMessage = document.getElementById("verificationError")


const nameConfirmation = document.getElementById("nameConfirmation")
const surenameConfirmation = document.getElementById("surenameConfirmation")
const dateConfirmation = document.getElementById("dateConfirmation")
const emailConfirmation = document.getElementById("emailConfirmation")
const usernameConfirmation = document.getElementById("usernameConfirmation")
const passwordConfirmation = document.getElementById("passwordConfirmation")
const repeatPasswordConfirmation = document.getElementById("repeatPasswordConfirmation")

document.getElementById("session").addEventListener("submit", function(event){
  event.preventDefault();
});

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()

nameInput.addEventListener('keyup', function(){
    if (nameInput.value.length < 3){
        nameConfirmation.innerHTML = "Minimo un largo de 3"
    }else{
        nameConfirmation.innerHTML = ""
    }
})
surenameInput.addEventListener('keyup', function(){
    if (surenameInput.value.length < 3){
        surenameConfirmation.innerHTML = "Minimo un largo de 3"
    }else{
        surenameConfirmation.innerHTML = ""
    }
})
dateInput.addEventListener('change', function(){
    try { 
        actualDate = new Date(dateInput.value)
        const year = actualDate.getFullYear()
        const month = actualDate.getMonth()
        var age = currentDate.getFullYear() - year;
        
        if (currentDate.getMonth() - month < 0){
            age--;
        }
        if (age < 18){
            dateConfirmation.innerHTML = "No puedes crear una cuenta siendo menor de 18 años"
        }else{
            dateConfirmation.innerHTML = ""
        }
    } catch (error) {
        console.log("irror")
    }
})
emailInput.addEventListener('keyup', function(){
    if (emailInput.value.toLowerCase().includes('@duocuc.cl')){
        emailConfirmation.innerHTML = "Correo duoc obtiene un 20% de descuento"
    }else{
        emailConfirmation.innerHTML = ""
    }
})
usernameInput.addEventListener('keyup', function(){
    if (usernameInput.value.toLowerCase().length < 6){
        usernameConfirmation.innerHTML = "Minimo 6 caracteres"
    }else{
        usernameConfirmation.innerHTML = ""
    }
})
passwordInput.addEventListener('keyup', function(){
    if (passwordInput.value.length < 8){
        passwordConfirmation.innerHTML = "La contraseña minimo debe tener 8 caracteres"
    }else{
        passwordConfirmation.innerHTML = ""
    }
})
repeatPasswordInput.addEventListener('keyup', function(){
    if (repeatPasswordInput.value === passwordInput.value){
        repeatPasswordConfirmation.innerHTML = ""
    }else{
        repeatPasswordConfirmation.innerHTML = "Las contraseñas no coinciden"
    }
})

function heIs18(){
    try { 
        actualDate = new Date(dateInput.value)
        const year = actualDate.getFullYear()
        const month = actualDate.getMonth()
        var age = currentDate.getFullYear() - year;
        
        if (currentDate.getMonth() - month < 0){
            age--;
        }
        if (age < 18){
            return false
        }else{
            return true
        }
    } catch (error) {
        return false
    }
}

function verifyInfo() {
    
    if (nameInput.value.length < 3) {
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "El nombre debe tener minimo 3 caracteres."
        errorMessage.classList.add("verificationError")
    }else if(surenameInput.value.length < 3){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "El apellido debe tener minimo 3 caracteres."
        errorMessage.classList.add("verificationError")
    }else if(!(emailInput.value.toLowerCase().includes('@gmail') || emailInput.value.toLowerCase().includes("@"))){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "Debes ingresar un correo valido."
        errorMessage.classList.add("verificationError")
    }else if(!heIs18()){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "No puedes crear una cuenta siendo menor de 18 años."
        errorMessage.classList.add("verificationError")
        console.log("menor")
    }else if(usernameInput.value.toLowerCase().length < 6){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "El nombre de usuario debe tener minimo 6 caracteres."
        errorMessage.classList.add("verificationError")
    }else if(passwordInput.value.length < 8){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "La contraseña debe tener minimo 8 caracteres."
        errorMessage.classList.add("verificationError")
    }else if(repeatPasswordInput.value != passwordInput.value){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "Las contraseñas no coinciden."
        errorMessage.classList.add("verificationError")
    }else if(!terms.checked){
        errorMessage.classList.remove("hideConteiner")
        errorMessage.innerHTML = "Debe aceptar los terminos y condiciones."
        errorMessage.classList.add("verificationError")
    }else{
        errorMessage.classList.add("hideConteiner")
        errorMessage.innerHTML = ""
        if (emailInput.value.toLowerCase().includes('@duocuc.cl')){
            alert("Nueva cuenta creada con descuento de 20%")
        }else{
            alert("Nueva cuenta creada")
        }
        
    }
}