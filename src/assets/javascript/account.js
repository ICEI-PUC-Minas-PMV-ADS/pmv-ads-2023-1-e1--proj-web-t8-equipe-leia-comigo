let user = JSON.parse(sessionStorage.getItem('user'));

if (!user){
    user = {
        name: '',
        password: '',
        email: ''
    }
}

const handleShowOptions = () => {
    const box = document.querySelector('.box');
    box.style.display = 'block'
}

const handleUnshowOptions = () => {
    const box = document.querySelector('.box');
    box.style.display = 'none'
}

const handleLogout = () => {
    if (!user.password)
        return

    user = {
        name: '',
        password: '',
        email: ''
    }
}

const handleLoadMyAccount = () => {
    if (!user.password) {
        alert('Realize o login primeiro!')
        return
    }
    const popup = document.querySelector('.popup')
    popup.style.display = 'block'

    let nome = popup.querySelector('#nome')
    nome.value = user.name


    let gmail = popup.querySelector('#gmail')
    gmail.value = user.email


    let senha = popup.querySelector('#senha')
    senha.value = user.password
}

const handleCloseMyAccount = () => {
    const popup = document.querySelector('.popup')
    popup.style.display = 'none'
}

const handleLoadLogin = () => {
    if (user.password) {
        handleLoadMyAccount()
        return
    }
    const form = document.querySelector('.box-form')
    form.style.display = 'block'
}

const handleDoLogin = (email, password) => {
    let storageUser = JSON.parse(sessionStorage.getItem('user'))
    if (!storageUser) {
        return {error: 1, msg: 'É preciso realizar um cadastro antes de logar'}
    }

    if (storageUser.password !== password) {
        return {error: 1, msg: 'Senha ou E-mail inválidos'}
    }

    if (storageUser.email !== email) {
        return {error: 1, msg: 'Senha ou E-mail inválidos'}
    }

    user = storageUser
    return {error: 1, msg: ''}
}

const handleDoRegister = (email, password, name) => {
    const newUser = {
        email,
        password,
        name
    }

    sessionStorage.setItem('user', JSON.stringify(newUser))
    user = JSON.parse(sessionStorage.getItem('user'))
    return {error: 0, msg: ''}
}


