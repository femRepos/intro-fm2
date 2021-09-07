const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    checkValidation(validateString)
})

function checkValidation(isValid) {
    let firstname = form.firstName;
    let lastname = form.lastName;
    let email = form.address;
    let password = form.password;

    if (firstname.value) {
        if (isValid(firstname.value, 'name')) {
            console.log('Firstname is valid! ' + firstname.value)
            removeError(firstname)
        } else {
            console.log('Firstname is invalid!')
            alertError(firstname)
        }
    } else {
        console.log('First name cannot be empty!')
        alertError(firstname)
    } 


    if (lastname.value) {
        if (isValid(lastname.value, 'name')) {
            console.log('Lastname is valid! ' + lastname.value)
            removeError(lastname)
        } else {
            console.log('Lastname is invalid!')
            alertError(lastname)
        }
    } else {
        console.log('Last name cannot be empty!')
        alertError(lastname)
    }

    if (!email.value) {
        console.log('Email cannot be empty!')
        alertError(email)
    } else {
        console.log('Email is valid!')
        removeError(email)
    }

    if (password.value) {
        if (isValid(password.value, 'password')) {
            console.log('Password is valid! ' + password.value)
            removeError(password)
        } else {
            console.log('Password must contain at least 8 characters consisting of a number & a special character: ' + password)
            alertError(password)
        }
    } else {
        console.log('Password cannot be empty!')
        alertError(password)
    } 
}

function validateString(string, type) {
    // check whqt type of string to validate
    switch(type) {
        case 'name':
            // ensure name only includes alphabets
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'

            for (char of string) {
                if (!alphabet.includes(char.toLowerCase())) {
                    return false
                }
            }
            return (string) ? true : false
            break
        case 'password':
            return string.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/)
            break
        default:
            return false
            break
    }
}

function alertError(element) {
    // add error class name to the label of a particular element
    if (!element.parentNode.classList.contains('error')) {
        element.parentNode.classList.add('error')
    }
}

function removeError(element) {
    // remove error class name from the label of a particular element
    if (element.parentNode.classList.contains('error')) {
        element.parentNode.classList.remove('error')
    }
}
