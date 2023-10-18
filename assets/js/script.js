const Login = () => {
    sessionStorage.setItem('isLogin', 'true')
}

const Logout = () => {
    sessionStorage.setItem('isLogin', 'false')
    sessionStorage.removeItem('isLogin')
}

document.addEventListener('DOMContentLoaded', function () {
    const loggedInNav = document.getElementById('loggedIn')
    const nloggedInNav = document.getElementById('nloggedIn')

    const isLogin = sessionStorage.getItem('isLogin') === 'true' || false
    if (isLogin) {
        loggedInNav.style.display = 'block'
        nloggedInNav.style.display = 'none'
    }
})
