const nameInput = document.getElementById("name")
const surenameInput = document.getElementById("surename")
const dateInput = document.getElementById("date")
const emailInput = document.getElementById("email")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const repeatPasswordInput = document.getElementById("repeatPassword")

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()

nameInput.addEventListener('keyup', function(){
    if (nameInput.value.length < 3){
        console.log("ponga un nombre mas largo")
    }
})
surenameInput.addEventListener('keyup', function(){
    if (surenameInput.value.length < 3){
        console.log("apellido no es muy largo")
    }
})
dateInput.addEventListener('keyup', function(){
    try { 
        actualDate = new Date(dateInput.value)
        const year = actualDate.getFullYear()
        const month = actualDate.getMonth()
        var age = currentDate.getFullYear() - year;
        
        if (currentDate.getMonth() - month < 0){
            age--;
        }
        console.log(age)
    } catch (error) {
        console.log("irror")
    }
})
dateInput.addEventListener('click', function(){
    try { 
        actualDate = new Date(dateInput.value)
        const year = actualDate.getFullYear()
        const month = actualDate.getMonth()
        var age = currentDate.getFullYear() - year;
        
        if (currentDate.getMonth() - month < 0){
            age--;
        }
        console.log(age)
    } catch (error) {
        console.log("irror")
    }
})
emailInput.addEventListener('keyup', function(){
    if (emailInput.value.toLowerCase().includes('@duocuc.cl')){
        console.log("esto va a ser epico papus")
    }
})
usernameInput.addEventListener('keyup', function(){
    if (usernameInput.value.toLowerCase().length < 6){
        console.log("username es muy poco")
    }
})
passwordInput.addEventListener('keyup', function(){
    if (passwordInput.value.length < 8){
        console.log("Contraseña muy corta")
    }
})
repeatPasswordInput.addEventListener('keyup', function(){
    if (repeatPasswordInput.value === passwordInput.value){
        console.log("Las contraseñas coinciden")
    }else{
        console.log("Las contraseñas no coinciden")
    }
})