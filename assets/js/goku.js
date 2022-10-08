
// personagem goku balão


let balao = document.querySelector('.goku-mouseover')

balao.addEventListener('mouseover', goku)
balao.addEventListener('mouseout', gokuoff)
function goku() {
    document.querySelector('.balao').style.opacity = '100%'



}


function gokuoff() {
    document.querySelector('.balao').style.opacity = '0%'

}





