let mousePointer=document.querySelector('#mousePointer')
const mouseX = document.getElementById('mouseX');
const mouseY = document.getElementById('mouseY');

let character=document.querySelector('#character')

let linkButton1=document.querySelector('#linkButton1')
let linkButton2=document.querySelector('#linkButton2')
let linkButton3=document.querySelector('#linkButton3')

let siteSong=document.querySelector('#siteSong')
siteSong.volume = 0.2;
let audio=1
let audioImg=document.querySelector('#audioImg')

let audioButton=document.querySelector('#audioButton')

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    mousePointer.style.top=y+'px'
    mousePointer.style.left=x+'px'
    const characterRect = character.getBoundingClientRect();
    if(x>characterRect.left && x<characterRect.left+character.offsetWidth && y>characterRect.top && y<characterRect.top+character.offsetHeight){
        mousePointer.style.display='none'
    }
    else{
        mousePointer.style.display='flex'
    }
    const rect1 = linkButton1.getBoundingClientRect();
    const rect2 = linkButton2.getBoundingClientRect();
    const rect3 = linkButton3.getBoundingClientRect();
    const audioRect = audioButton.getBoundingClientRect();
    if(x>rect1.left && x<rect1.left+linkButton1.offsetWidth && y>rect1.top && y<rect1.top+linkButton1.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>rect2.left && x<rect2.left+linkButton2.offsetWidth && y>rect2.top && y<rect2.top+linkButton2.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>rect3.left && x<rect3.left+linkButton3.offsetWidth && y>rect3.top && y<rect3.top+linkButton3.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>audioRect.left && x<audioRect.left+audioButton.offsetWidth && y>audioRect.top && y<audioRect.top+audioButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else{
        mousePointer.src='../assets/images/Flecha.png'
    }
});

audioButton.addEventListener('click',()=>{
    if(audio==1){
        siteSong.pause()
        audio=0
        audioImg.src='./assets/images/NotaGris.png'
    }
    else{
        siteSong.play()
        audio=1
        audioImg.src='./assets/images/Musica.gif'
    }
})
