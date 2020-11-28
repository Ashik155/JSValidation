document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('phone').addEventListener('blur', validatePhone)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('pincode').addEventListener('blur', validatePincode)


function validateName(){
    const val_from_text = document.getElementById('name')
    const re = /^[a-zA-Z0-9]{3,10}$/;
    if(re.test(val_from_text.value)){
        val_from_text.classList.remove('is-invalid')

    }else{
        val_from_text.classList.add("is-invalid")
    }

}

function validateEmail(){
    const email = document.getElementById('email')
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,5}$/;
    if(re.test(email.value)){
        email.classList.remove('is-invalid')

    }else{
        email.classList.add("is-invalid")
    }


}

function validatePhone(){
    const phone_val = document.getElementById('phone')
    const re = /^[0-9]{10}$/;
    if(re.test(phone_val.value)){
        phone_val.classList.remove('is-invalid')

    }else{
        phone_val.classList.add("is-invalid")
    }
}

function validatePincode(){
    const pincode_val = document.getElementById('pincode')
    const re = /^[0-9]{6}$/;
    if(re.test(pincode_val.value)){
        pincode_val.classList.remove('is-invalid')

    }else{
        pincode_val.classList.add("is-invalid")
    }


}