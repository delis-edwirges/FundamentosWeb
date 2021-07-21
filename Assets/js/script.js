
let email = document.querySelector('#email')
let mensagem = document.querySelector('#feedback')


email.style.width = '100%'
feedback.style.width = '100%'

function regradeEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(String(email).toLowerCase())
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    let email_ok = ruleEmail(email.value.toLowerCase())

    if (!email_ok) {
        txtEmail.innerHTML = 'E-mail inválido, por favor digite novamente.'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        email.style.border = 'solid #31c438'
    }
}

feedback.addEventListener('keyup', () => {
    let txtFdbk = document.querySelector('#txtFdbk')

    if (feedback.value.length < 5) {
        txtFdbk.innerHTML = 'Texto muito curto! D:'
        txtFdbk.style.color = 'red'
    
    } else {
        txtFdbk.innerHTML = ''
        feedback.style.border = 'solid #31c438'

    }

})