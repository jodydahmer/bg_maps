const menuBtn = document.querySelector(`menu-btn`);
let menuOpen = false ; 
menuBtn.addEventListener('click', () => {

if(!menuOpen) {
menuBtn.classList.add('open');
menuOpen=true;

} else {
    menuBtn.classList.remove('open');
    menuOpen = false;
}

});



function ShowNavItems(){
let navItems = document.querySelectorAll('')
for (let i=0,i<navItems.length;i++){
    navItems[i].getElementsByClassName.display = visible ? 'inherit' : 'none';
}


}


var visible = false;
function ToggleNaveItems(){
    let navItems = document.querySlector All('nav > a')
    for(let i=0; i<navItems.length;i++) {
        navItems[i].classlist.toggle('visible-name')
    }
}