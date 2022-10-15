let habilidades = [
    { id: 1, img: 'assets/img/habilidades/html.png', descricao: '<h2>HTML</h2> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>' },
    { id: 2, img: 'assets/img/habilidades/css.png', descricao: '<h2>CSS</h2> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>' },
    { id: 3, img: 'assets/img/habilidades/js.png', descricao: '<h2>Javascript</h2> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>' },
    { id: 4, img: 'assets/img/habilidades/react.png', descricao: '<h2>Reactjs</h2> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>' },
    { id: 5, img: 'assets/img/habilidades/bootstrap.png', descricao: '<h2>Bootstrap</h2> <br> <p>É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.</p> <br>' },
    { id: 6, img: 'assets/img/habilidades/typescript.png', descricao: '<h2>Typescript</h2> <br> <p>É uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente.</p> <br>' },
    { id: 7, img: 'assets/img/habilidades/git.png', descricao: '<h2>Git</h2> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>' },
    { id: 8, img: 'assets/img/habilidades/github.png', descricao: '<h2>Github</h2> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>' },
]
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

habilidades.map((item, index) => {
    let hblItem = c('.modelo .box-ability').cloneNode(true); //Clonando a minha Div
    //Preencher as informações em habilidades
    hblItem.setAttribute('data-key', index)
    hblItem.querySelector('.box-ability img').src = item.img
    //Evento de entrada para passar o mouse
    addEventListener('mouseover', (e) => {
        e.preventDefault();
        let key = e.target.closest('.box-ability').getAttribute('data-key')
        c('.conhecimento--txt').innerHTML = habilidades[key].descricao
    })
    //Evento de saída para passar o mouse
    addEventListener('mouseout', () => {
        c('.conhecimento--txt').innerHTML = '<span class="section-conhecimento--txt-color">/*</span> Passe o mouse por cima de alguma habilidade para ler a descrição <span class="section-conhecimento--txt-color">*/</span>'
    })
    document.querySelector('.section-conhecimento--img .area-hbl').append(hblItem)
})