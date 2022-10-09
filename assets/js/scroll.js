var subir = document.querySelector('.page-top')
subir.addEventListener('click', subirTela)

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}
window.addEventListener('scroll', botaoscroll)
function botaoscroll() {
    if (window.scrollY === 0) {
        document.querySelector('.page-top').style.opacity = '0%'
    } else {
        document.querySelector('.page-top').style.opacity = '100%'

    }
}


// setInterval(botaoscroll, 1000)


// botão para subir na pagina Cod Acima


// window.addEventListener('scroll', headerScroll)
// function headerScroll() {
//     if (document.body.scrollTop > 1) {
//         document.querySelector('header .container').style.position = 'relative'

//     } else {
//         document.querySelector('header .container').style.position = 'fixed'


//     }
// }
//header fixo ao scrolar acima


//Paginas abaixo
let sobreTo = document.querySelector('.sobre')
sobreTo.addEventListener('click', sobreT)

function sobreT() {
    window.scrollTo({
        top: 731,
        left: 0,
        behavior: 'smooth'
    });
}



let hblTo = document.querySelector('.hbl')
hblTo.addEventListener('click', hblt)

function hblt() {
    window.scrollTo({
        top: 1300,
        left: 0,
        behavior: 'smooth'
    });
}


let pjTo = document.querySelector('.pj')
pjTo.addEventListener('click', pjt)

function pjt() {
    window.scrollTo({
        top: 1880,
        left: 0,
        behavior: 'smooth'
    });
}

let contaTo = document.querySelector('.contato')
contaTo.addEventListener('click', contact)

function contact() {
    window.scrollTo({
        top: 2758,
        left: 0,
        behavior: 'smooth'
    });
}

let activeTo = document.querySelector('.active')
activeTo.addEventListener('click', activec)

function activec() {
    window.scrollTo({
        top: 2,
        left: 0,
        behavior: 'smooth'
    });
}

