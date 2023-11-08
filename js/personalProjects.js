let mousePointer=document.querySelector('#mousePointer')
const mouseX = document.getElementById('mouseX');
const mouseY = document.getElementById('mouseY');

let returnButton=document.querySelector('.return')

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    mousePointer.style.top=y+'px'
    mousePointer.style.left=x+'px'
    const returnRect = returnButton.getBoundingClientRect();
    if(x>returnRect.left && x<returnRect.left+returnButton.offsetWidth && y>returnRect.top && y<returnRect.top+returnButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else{
        mousePointer.src='../assets/images/Flecha.png'
    }
});