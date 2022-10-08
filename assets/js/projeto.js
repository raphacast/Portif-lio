let ver = document.querySelector('.section-projetos--button')

ver.addEventListener('click', projeto)

function projeto(){
    if (document.querySelector(".section-projetos--pj").style.height == '320px') {
        document.querySelector(".section-projetos--pj").style.height = '700px';
        document.querySelector(".section-conhecimento").style.height = '400px';
       
    } else {
        document.querySelector(".section-projetos--pj").style.height = '320px';
        document.querySelector(".section-conhecimento").style.height = '400px';

       

    }
}