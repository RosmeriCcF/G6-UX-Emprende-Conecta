const buttonSubmit = document.getElementById('div-form__form__submit');
const passwordText = document.querySelectorAll('.div-form__form__input')[1];

buttonSubmit.addEventListener('click', (e) => {
    if(passwordText.value == ""){
        e.preventDefault();
    }
})