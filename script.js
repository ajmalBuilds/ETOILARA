const burger = document.getElementById('burger');
const  sidenav = document.querySelector('.sidenav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

overlay.addEventListener('click',() => {
    sidenav.classList.add('sidenav-closed');
    sidenav.classList.remove('sidenav-opened');
    overlay.classList.add('overlay-close');
    overlay.classList.remove('overlay-open');
    body.classList.add('can-scroll');
    body.classList.remove('no-scroll');
    burger.checked = false;
});
function toggleNav() {
        if(burger.checked){
            sidenav.classList.add('sidenav-opened');
            sidenav.classList.remove('sidenav-closed');
            overlay.classList.add('overlay-open');
            overlay.classList.remove('overlay-close');
            body.classList.add('no-scroll');
            body.classList.remove('can-scroll');
        }
        else{
            sidenav.classList.add('sidenav-closed');
            sidenav.classList.remove('sidenav-opened');
            overlay.classList.add('overlay-close');
            overlay.classList.remove('overlay-open');
            body.classList.add('can-scroll');
            body.classList.remove('no-scroll');
        }
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const url = item.querySelector('p').getAttribute('data-url');
        if (url) {
            document.getElementById('burger').checked = false;
            window.location.href = url;
        }
    });
});