
// Menu Mobile


let menu = document.getElementById('menuhamb')

menu.addEventListener('click', function () {
    if (document.getElementById('menumobile').style.display == 'none') {
        document.getElementById('menumobile').style.display = 'flex'
    } else {
        document.getElementById('menumobile').style.display = 'none'
    }
})


// Scroll Menu 

let homemob = document.querySelector('.homemob')
homemob.addEventListener('click', homescrol)

function homescrol() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

let sobremob = document.querySelector('.sobremob')
sobremob.addEventListener('click', sobrescrol)

function sobrescrol() {
    window.scrollTo({
        top: 635,
        left: 0,
        behavior: 'smooth'
    });
}
let habmob = document.querySelector('.habmob')
habmob.addEventListener('click', habscrol)

function habscrol() {
    window.scrollTo({
        top: 1195,
        left: 0,
        behavior: 'smooth'
    });
}
let pjmob = document.querySelector('.pjmob')
pjmob.addEventListener('click', pjscrol)

function pjscrol() {
    window.scrollTo({
        top: 1801,
        left: 0,
        behavior: 'smooth'
    });
}

let contmob = document.querySelector('.contatomob')
contmob.addEventListener('click', contscrol)

function contscrol() {
    window.scrollTo({
        top: 2758,
        left: 0,
        behavior: 'smooth'
    });
}