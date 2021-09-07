const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    checkValidation(validateString)
})

function checkValidation(isValid) {
    let firstname = form.firstName.value;
    let lastname = form.lastName.value;
    let email = form.address.value;
    let password = form.password.value;

    if (firstname) {
        if (isValid(firstname, 'name')) {
            console.log('Firstname is valid! ' + firstname)
        } else {
            console.log('Firstname is invalid!')
        }
    } else console.log('First name cannot be empty!')


    if (lastname) {
        if (isValid(lastname, 'name')) {
            console.log('Lastname is valid! ' + lastname)
        } else {
            console.log('Lastname is invalid!')
        }
    } else console.log('Last name cannot be empty!')


    if (email) {
        if (isValid(email, 'email')) {
            console.log('Email is valid! ' + email)
        } else {
            console.log('Email is invalid!')
        }
    } else console.log('Email cannot empty!')


    if (password) {
        if (isValid(password, 'password')) {
            console.log('Password is valid! ' + password)
        } else {
            console.log('Password must contain at least 8 characters consisting of a number & a special character: ' + password)
        }
    } else console.log('Password cannot be empty!')

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
