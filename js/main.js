let inputEmail = document.querySelector('input[name=email]');
let btn = document.querySelector('button');
let pError = document.querySelector('#isError');
let pSuccess = document.querySelector('#isSuccess');

function validEmail(email) {

    let valid = /\S+@\S+\.\S+/;
    return valid.test(email);
}

btn.onclick = function(e){
    e.preventDefault();
    if(validEmail(inputEmail.value)){
        
        inputEmail.id = 'inputEmail';
        inputEmail.placeholder = 'Your email address...';
        pError.style.display = 'none';
        pSuccess.style.display = 'initial';

    } else {

        inputEmail.setAttribute('id', 'error');
        inputEmail.placeholder = 'example@email.com';
        pError.style.display = 'initial';
        pSuccess.style.display = 'none';
    }

}