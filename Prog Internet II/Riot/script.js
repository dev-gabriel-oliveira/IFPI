const changeColorNavbar = () => {
    if(window.scrollY >= 90) {
        document.getElementById('navbar').style.background = 'black';
    } else {
        document.getElementById('navbar').style.background = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.25) 100%)';
    }
}

window.addEventListener("scroll", changeColorNavbar)