let form = document.querySelector('.formSelf');
let inputName = document.getElementById('inpName');
let inputPhone = document.getElementById('tel');
let check = document.getElementById('checkbox');
let fail = document.querySelectorAll('.fail');

let formattedInputValue = '';



form.onsubmit = function( event) {
   event.preventDefault();
   let name = inputName.value;
   let phone = inputPhone.value;
   num = phone.length;

   checkEmpty(phone, name);
   isChecked(check)
   
   
}

inputPhone.oninput = function() {
   let inputNumbersValue = inputPhone.value.replace(/\D/g,"");

   if (!inputNumbersValue) {
      return inputPhone.value = '';
   }

   inputPhone.value = mask(inputNumbersValue)
   
}

inputName.addEventListener('input',()=> {
   inputName.value = inputName.value.replace(/[^а-я]/,'');
});


function mask (inputNumbersValue) {
   

   if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if(inputNumbersValue[0] == '9') {
         inputNumbersValue = '7' + inputNumbersValue;
      }
         let firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
          formattedInputValue = firstSymbols + ' '
         if(inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1,4);
         }
         if(inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4,7);
         }
         if(inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7,9);
         }
         if(inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9,11);
         }

   } 
   else {
      formattedInputValue = '+7' + inputNumbersValue.substring(0,16);
   }
   return formattedInputValue
}



const checkEmpty = (phone, name) => {
   if ((phone === '')||( phone == ' ')) {
      inputPhone.classList.add('input-error')
      fail[2].textContent = 'Это обязательное поле!'
   }
   else {
      // inputPhone.classList.remove('input-error')
      fail[2].textContent = ''
      chechPhoneLenght(num)
   }

   if((name === '')||( name == ' ')) {
      inputName.classList.add('input-error')
      fail[0].textContent = 'Это обязательное поле!'
   }
   else {
      inputName.classList.remove('input-error')
      inputName.classList.add('input-success')
      fail[0].textContent = ''
   }

}

const chechPhoneLenght =(input) =>{
   if (input < 17) {
      inputPhone.classList.add('input-error')
      fail[2].textContent = 'Вы ввели неполный номер'
   }
   else {
      inputPhone.classList.remove('input-error')
      inputPhone.classList.add('input-success')

   }
}

function isChecked(check) {
   if (!check.checked) {
      fail[3].style.color = '#ff3860';
      check.style.outline = '1px solid #ff3860';
   }
   else {
      console.log('df4')
      check.style.removeProperty('outline');
      fail[3].style.removeProperty('color');
   }
}