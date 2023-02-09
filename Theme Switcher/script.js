window.onload = () => {

    let isLightMode

    const convertToBoolean = value => value == 'true' ? true : false

    if (localStorage.getItem('isLightMode') === null) {
        isLightMode = false
    } else {
        isLightMode = convertToBoolean(localStorage.getItem('isLightMode'))
    }

    function toggleTheme() {
        document.querySelector('button').classList.toggle('button-light-mode')
        document.querySelector('main').classList.toggle('mainBG-light-mode')
        document.querySelector('h1').classList.toggle('text-light-mode')
        document.querySelector('p').classList.toggle('text-light-mode')
    }


    if (isLightMode) toggleTheme()


    document.querySelector('button').onclick = evt => {
        toggleTheme()
        isLightMode = !isLightMode
        localStorage.setItem('isLightMode', isLightMode)
    }
}