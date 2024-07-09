document.getElementById("toggle").addEventListener("click", function(){ 
let button = document.getElementById("toggle").innerHTML;
    console.log(button);
if(button =='<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
document.documentElement.style.setProperty('--darkcolor','#FCF6BA');
document.documentElement.style.setProperty('--sigmacolor','#B38728');
document.documentElement.style.setProperty('--lightcolor','#BF953F');
document.documentElement.style.setProperty('--phonebackground','#ffffff');
document.documentElement.style.setProperty('--phonetextcolor','#000000');

document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
}
 else{
    document.documentElement.style.setProperty('--darkcolor','#BF953F');
document.documentElement.style.setProperty('--sigmacolor','#B38728');
document.documentElement.style.setProperty('--lightcolor','#FCF6BA');
document.documentElement.style.setProperty('--phonebackground','#000000');
document.documentElement.style.setProperty('--phonetextcolor','#ffffff');

document.getElementById("toggle").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
0}
})