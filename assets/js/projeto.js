let ver = document.querySelector('.section-projetos--button')

ver.addEventListener('click', projeto)

function projeto(){
    if (document.querySelector(".section-projetos--pj").style.height == '320px') {
        document.querySelector(".section-projetos--pj").style.height = '700px';
        document.querySelector(".section-projetos-body h2").style.marginTop = '300px';
        document.querySelector("footer").style.marginTop = '300px';
       
    } else {
        document.querySelector(".section-projetos--pj").style.height = '320px';
        document.querySelector(".section-projetos-body h2").style.marginTop = '0px';
        document.querySelector("footer").style.marginTop = '0px';
       

    }
}