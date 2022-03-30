
//Pegar os dados do input e adicionar ao localStorage;
export const addStorage = (object) => {
    let storage = JSON.parse(localStorage.getItem('clients'));
    if (storage === null){
        localStorage.setItem('clients', JSON.stringify([object]));  
      }
      else {
         storage.push(object);
         localStorage.setItem('clients', JSON.stringify(storage));  
      }   
}

//Validanto formulário;
export function Validator(name, phone, email, captchaValid){
    if (name.split('').length < 5){
        window.alert('Digite seu nome e sobrenome');
        return false;
    }else if (phone.split('').length < 9){
        window.alert('Digite um telefone valido');
        return false;
    }else if (email.indexOf('@') === -1){
        window.alert('Digite um email valido');  
        return false;       
    }else if (captchaValid === false) {
        window.alert('Aceite o recaptcha para continuar')
        return false;
    }else return true;   
}