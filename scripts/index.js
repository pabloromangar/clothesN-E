function scrollManagement(){
    var verticalScroll = window.scrollY || document.documentElement.scrollTop

    var contenedor = document.getElementById('header')

    if(verticalScroll===0){
        contenedor.style.transition = '0.5s'
        contenedor.style.backgroundColor = 'transparent'
    }else{
        contenedor.style.transition = '0.5s'
        contenedor.style.backgroundColor = 'white'
    }
}

window.addEventListener('scroll',scrollManagement);

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    document.getElementById("form").style.display="none";    

    document.getElementById("message").style.display="block";
})
