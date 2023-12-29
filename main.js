const submit = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');
const error = document.querySelectorAll('.error');
let password = '', Success = true;

const findErrors = (input)=>{
    let errors = [];
    if(input.value === ''){
        errors.push(`${input.name} cannot be empty`);
    }else if(input.id=='name'){
        if(!/^[a-zA-Z]+$/.test(input.value)){
            errors.push("Name should only contain letters");
        }
    }else if(input.id=='email'){
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(input.value)){
            errors.push("Invalid email");
        }
    }else if(input.id=='password'){
        let passwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        password= input.value;
        if( !passwRegex.test(input.value)) {
            errors.push("Password must contain at least one number and one uppercase letter, lowercase letter, and have a length between 6 to 20");
        }
    }else if(input.id=='confirmPassword'){
        if(password!==input.value){
            errors.push("Passwords do not match");
        }
    }
    if(Success&&errors.length!=0)
        Success= false;
    return errors;
}
submit.addEventListener('click',(e)=>{
    Success= true;
    e.preventDefault();
    inputs.forEach((input,index) => {
        const errorMessage = findErrors(input);
        errorMessage? error[index].innerHTML=errorMessage : error[index].innerHTML='';
    });
    if(Success){
        alert('Sign in Successfully!');
        inputs.forEach((input) => {
            input.value='';
        });
    }  
})