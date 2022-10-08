
// Menu Mobile


let menu = document.getElementById('menuhamb')

menu.addEventListener('click', function () {
    if (document.getElementById('menumobile').style.display == 'none') {
        document.getElementById('menumobile').style.display = 'flex'
    } else {
        document.getElementById('menumobile').style.display = 'none'
    }
})