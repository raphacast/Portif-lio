// modo Dark 

const darkLight = document.getElementById('switch');
darkLight.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
})


const $checkbox = document.getElementById('switch');

$checkbox.addEventListener('change', function () {
    if ($checkbox.checked == true) {
        document.getElementById('goku').src = 'assets/img/freeza.webp';
        document.getElementById('logo').src = 'assets/img/logo-dark.png';
        document.getElementById('gi').src = 'assets/img/icon/githubdk.png';
        document.getElementById('inst').src = 'assets/img/icon/instagramdk.png';
        document.getElementById('lin').src = 'assets/img/icon/linkedindk.png';

    }
    else {
        document.getElementById('goku').src = 'assets/img/goku.gif';
        document.getElementById('logo').src = 'assets/img/logo.png';
        document.getElementById('gi').src = 'assets/img/icon/github.png';
        document.getElementById('inst').src = 'assets/img/icon/instagram.png';
        document.getElementById('lin').src = 'assets/img/icon/linkedin.png';

    }
})

const $text = document.getElementById('switch');

$text.addEventListener('click', function () {
    if ($text.checked == true) {
        document.querySelector('.balao').innerHTML = 'HOOOOOOOOOOOOOO<br>HOOOHOHOOH'
        document.querySelector('.balao').style.padding = '10px'
        document.querySelector('.balao').style.color = 'white'


    }
    else {
        document.querySelector('.balao').innerHTML = '<p>Oi, eu sou o <span class="goku-color">Goku.</span><br>Role para baixo para<br>ver o <span class="goku-color">portifólio</span> desse<br>cara incrivel!</p>'
        document.querySelector('.balao').style.padding = '0px'



    }
})