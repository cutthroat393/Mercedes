
function formSubmitted(event){
    let nameTxt = document.getElementById('nameTxt')
    
    let name = nameTxt.value
    let email = document.getElementById('emailTxt').value
    let address = document.getElementById('addressTxt').value
    let phonenum = document.getElementById('phonenumTxt').value


    if(name.length <2){
        alert('Please enter your full name')
    }

    else if (!email.endsWith("@gmail.com")){
        alert('Email must ends with @gmail.com')
    }

    else if (address.length <10){
        alert('Please enter your full address')
    }

    else if (phonenum.length <8){
        alert('Please enter your full phone number')
    }

    else{
        alert('register success')
    }

    event.preventDefault()
}

function imageClicked1(){
    window.open("https://www.instagram.com/mercedesbenz/")
}

function imageClicked2(){
    window.open("https://www.facebook.com/MercedesBenz/")
}

function imageClicked3(){
    window.open("https://twitter.com/MercedesBenz")
}