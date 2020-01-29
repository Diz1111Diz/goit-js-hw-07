const input = document.querySelector('#validation-input')

function validation (){
  if(input.value.length >= Number(input.dataset.length)){
    input.classList.add('valid')
    input.classList.remove('invalid')
  }else if(input.value.length < Number(input.dataset.length) && input.value.length >= 1){
    input.classList.add('invalid')
    input.classList.remove('valid')
  }else{
    input.classList.remove('invalid')    
  }
  
}
input.addEventListener('blur', validation)
