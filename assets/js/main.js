const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
});

sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval:200})

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__img',{delay:400})

sr.reveal('.work__img',{interval:200})

sr.reveal('.contact__input',{delay:200})


const names = document.getElementById('name')
const mail = document.getElementById('email')
const textarea = document.getElementById('textarea')
const error = document.getElementById('error')
const form = document.getElementById('form')
const number = document.getElementById('number')

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInput();
})
const showAlert = ()=>{
    swal({
        title: "Fields Empty!",
        text: "Please check the missing fields!",
        icon: "warning",
        button: 'OK',
    });
}
const hideAlert = ()=>{
    swal({
        title:'Successfully Submitted',
        icon:'success',
        button:'OK',
    });
}
   


const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
} 

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
} 

const isValidEmail = email => {
    const re = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
    return re.test(String(email).toLowerCase())    
}

const validateInput = ()=>{
    const username = names.value.trim();
    const usermail = mail.value.trim();
    const usertextarea = textarea.value.trim();
    const usernumber = number.value.trim()
    count = 0;
    if(count < 10 ){
        if(username.value === ''){
            setError(names,'Username is Required!');
            showAlert();
        }else if(username.length<=4){
            setError(names,'Name not available!');
            showAlert();
        }else{
            setSuccess(names);
            hideAlert()
        }
        if(usermail === ''){
            setError(mail,'Email is Required!');
            showAlert();
        }else if(!isValidEmail(usermail)){
            setError(mail,'Provide a valid email address!');
            showAlert();
        }
        else{
            setSuccess(mail);
        }
        if(usernumber === ''){
            setError(number,'Please enter number!');
            showAlert();
        }else if(usernumber.length<10){
            setError(number,'please enter valid number!');
            showAlert();
        }else if(usernumber.length>10){
            setError(number,'Number exceed!');
            showAlert();
        }else{
            setSuccess(number);
        }
        if(usertextarea === ''){
            setError(textarea,'please provide Some information!');
            showAlert();
        }else if(usertextarea.length<=10){
            setError(textarea,'Please provide some information!');
            showAlert();
        }
        else{
            setSuccess(textarea);
            
        }
    }
}
   

