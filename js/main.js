function validatePhone(){
    let phone = document.querySelector('#tel').value;
    var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
     if(pattern.test(phone)){

        
        console.log(phone + ' norma');
     } else{
        console.log('ne norma');
     }
    
}

