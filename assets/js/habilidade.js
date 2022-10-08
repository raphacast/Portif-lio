let habilidade01 = document.querySelector('.html')
let habilidade02 = document.querySelector('.css')
let habilidade03 = document.querySelector('.javascript')
let habilidade04 = document.querySelector('.reactjs')



habilidade01.addEventListener('mouseover',html)
habilidade02.addEventListener('mouseover',css)
habilidade03.addEventListener('mouseover',javascript)
habilidade04.addEventListener('mouseover',reactjs)
habilidade01.addEventListener('mouseout',outhtml)
habilidade02.addEventListener('mouseout',outcss)
habilidade03.addEventListener('mouseout',outjavascript)
habilidade04.addEventListener('mouseout',outreactjs)





function html(){
    if(document.querySelector('.html') == document.querySelector('.html')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>HTML</h2> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>'
       

}
}
function css(){
    if(document.querySelector('.css') == document.querySelector('.css')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>CSS</h2> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>'


}
}

function javascript(){
    if(document.querySelector('.javascript') == document.querySelector('.javascript')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Javascript</h2> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>'


}
}

function reactjs(){
    if(document.querySelector('.reactjs') == document.querySelector('.reactjs')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Reactjs</h2> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>'

}
}

function outhtml(){
    if(document.querySelector('.html') == document.querySelector('.html')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}

function outcss(){
    if(document.querySelector('.css') == document.querySelector('.css')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}


function outjavascript(){
    if(document.querySelector('.javascript') == document.querySelector('.javascript')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}


function outreactjs(){
    if(document.querySelector('.reactjs') == document.querySelector('.reactjs')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}




let habilidade05 = document.querySelector('.bootstrap')
let habilidade06 = document.querySelector('.typescript')
let habilidade07 = document.querySelector('.git')
let habilidade08 = document.querySelector('.github')



habilidade05.addEventListener('mouseover',bootstrap)
habilidade06.addEventListener('mouseover',typescript)
habilidade07.addEventListener('mouseover',git)
habilidade08.addEventListener('mouseover',github)
habilidade05.addEventListener('mouseout',outbootstrap)
habilidade06.addEventListener('mouseout',outtypescript)
habilidade07.addEventListener('mouseout',outgit)
habilidade08.addEventListener('mouseout',outgithub)


function bootstrap(){
    if(document.querySelector('.bootstrap') == document.querySelector('.bootstrap')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Bootstrap</h2> <br> <p>É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.</p> <br>'
        
}
}


function typescript(){
    if(document.querySelector('.typescript') == document.querySelector('.typescript')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Typescript</h2> <br> <p>É uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente.</p> <br>'

}
}
function git(){
    if(document.querySelector('.git') == document.querySelector('.git')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Git</h2> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>'

}
}
function github(){
    if(document.querySelector('.github') == document.querySelector('.github')){
        document.querySelector('.conhecimento--txt').innerHTML = '<h2>Github</h2> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'

}
}


function outbootstrap(){
    if(document.querySelector('.bootstrap') == document.querySelector('.bootstrap')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}

function outtypescript(){
    if(document.querySelector('.typescript') == document.querySelector('.typescript')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}

function outgit(){
    if(document.querySelector('.git') == document.querySelector('.git')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}

function outgithub(){
    if(document.querySelector('.github') == document.querySelector('.github')){
        document.querySelector('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição  <span class="section-conhecimento--txt-color">*/</span>'

}
}






