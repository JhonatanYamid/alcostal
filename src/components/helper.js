export const responsiveNavbar = () => {
    const nav = document.querySelector('#menu');
    nav.classList.toggle('hidden')
}
export const changeNavbackground = () => {
    if (window.scrollY >= 30) {
        document.querySelector("#navbar").classList.add("navbar-active");
        document.querySelector("#navbar").classList.remove("navbar-inactive");
    }else{
        document.querySelector("#navbar").classList.remove("navbar-active");
        document.querySelector("#navbar").classList.add("navbar-inactive");
    }
}