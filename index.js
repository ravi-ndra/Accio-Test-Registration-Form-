function validate(){
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneInput = document.getElementById('phone').value
    let batchInput = document.getElementById('batch').value
    let moduleInput = document.getElementById('module').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false

    //for first name
    if(firstNameInput.length >= 3){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    //for last name
    if(lastNameInput.length >= 3){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    /*
      -Email entered (not left blank)
      -Should contain '@' and '.'
      -After last ., there should be at least be 2 characters
      -First character cannot be @ 
    */
    if(emailInput && 
        emailInput.includes('@') && 
        emailInput.indexOf('@')!=0 && 
        emailInput.includes('.') && 
        (emailInput.lastIndexOf('.') <= emailInput.length -3)){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    //for phone
    if(phoneInput.length === 10 && !isNaN(parseInt(phoneInput))){
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-invalid').style.display = 'block'
        document.getElementById('phone-valid').style.display = 'none'
        error = true
    }

    //for batch
    if(batchInput !== 'Select Batch...'){
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'
    }
    else{
        document.getElementById('batch-invalid').style.display = 'block'
        document.getElementById('batch-valid').style.display = 'none'
        error = true
    }

    //for module
    if(moduleInput !== 'Select Module...'){
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById('module-invalid').style.display = 'none'
    }
    else{
        document.getElementById('module-invalid').style.display = 'block'
        document.getElementById('module-valid').style.display = 'none'
        error = true
    }

    //for T&C
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''
        document.getElementById('batch').value='Select Batch...'
        document.getElementById('module').value='Select Module...'
        document.getElementById('tnC').checked=false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'
    }
}
