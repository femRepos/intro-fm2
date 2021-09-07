const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

inputs.forEach(input => {
    input.addEventListener('focusout', event => {
        checkValidation(validateString)
    })
})

function checkValidation(isValid) {
    let firstname = form.firstName;
    let lastname = form.lastName;
    let email = form.address;
    let password = form.password;

    if (firstname.value) {
        isValid(firstname.value, 'name') ? removeError(firstname) : alertError(firstname)
    } else alertError(firstname)

    if (lastname.value) {
        isValid(lastname.value, 'name') ? removeError(lastname) : alertError(lastname)
    } else alertError(lastname)

    if (email.value) {
        isValid(email.value, 'email') ? removeError(email) : alertError(email)
    } else alertError(email)

    if (password.value) {
        isValid(password.value, 'password') ? removeError(password) : alertError(password)
    } else alertError(password)
}

function validateString(string, type) {
    // check whqt type of string to validate
    switch(type) {
        case 'name':
            // ensure name only includes alphabets
            const alphabet = 'abcdefghijklmnopqrstuvwxyz '

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
        case 'email':
            return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(string)
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
