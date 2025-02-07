function validatePhone(){
    let phone = document.querySelector('#tel').value;
    let nameInput = document.querySelector('#name');
    let error = document.querySelector('.error');
    var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
     if(pattern.test(phone)){        
        console.log(phone);       
     } else{
        error.style.display = 'inline';
        error.style.color = 'red';
        nameInput.style.marginTop = '15px';
        console.log('Number not validate!!');
     }    
}


