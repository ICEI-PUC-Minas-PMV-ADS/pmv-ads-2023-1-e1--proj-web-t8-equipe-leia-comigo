
let user =  sessionStorage.getItem('user');  
/*
    {
    name: 'Lucas',
    email: 'lucas05sampaio@gmail.com',
    password: 'lucas'
}
*/

const handleShowOptions = () => {
    const box = document.querySelector('.box');
    box.style.display = 'block' 
}

const handleUnshowOptions = () => {
    const box = document.querySelector('.box');
    box.style.display = 'none' 
}

const handleLogout = () => {
    if (!user)  
         return

    const usuarioVazio = {}
    sessionStorage.setItem('user', JSON.stringify(usuarioVazio))
}

const handleLogin = () => {
    if (user) {
        alert('Faça logout antes de prosseguir');
        return
    }

}

const handleLoadMyAccount = () => {
    if (!user) {
        alert('Realize o login primeiro!')
        return
    }
    const popup = document.querySelector('.popup')
    popup.style.display = 'block'

    let nome = popup.querySelector('#nome')
    nome.innerHTML = user.name

    
    let gmail = popup.querySelector('#gmail')
    gmail.innerHTML = user.email

    
    let senha = popup.querySelector('#senha')
    senha.innerHTML = user.password
}

const handleCloseMyAccount = () => {
    const popup = document.querySelector('.popup')
    popup.style.display = 'none'
}

const handleLoadLogin = () => {
    if (user) {
        handleLoadMyAccount()
        return
    }
    const form = document.querySelector('.box-form')
    form.style.display = 'block'
}

const handleDoLogin = () => {

}

const handleDoRegister = () => {
    
}
