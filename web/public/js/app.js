const openMenu = document.querySelector('#showmenu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function() {
sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click', function(){
sideMenu.classList.remove('active')
})

