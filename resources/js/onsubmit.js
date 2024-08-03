function submitButton() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(email === '' || message === '') {
        alert('PREENCHA TODOS OS CAMPOS');
    } else if(!regex.test(email)) {
        alert('EMAIL INVÁLIDO!\nDEVE CONTER UM @');
    } else {
        alert('Agradecemos pelo contato!');
    }
}