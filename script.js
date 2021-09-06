let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Form has been submitted!')
})
