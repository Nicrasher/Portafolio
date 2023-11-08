let mousePointer=document.querySelector('#mousePointer')
const mouseX = document.getElementById('mouseX');
const mouseY = document.getElementById('mouseY');

let character=document.querySelector('#character')

let siteSong=document.querySelector('#siteSong')
siteSong.volume = 0.2;
let audio=1
let audioImg=document.querySelector('#audioImg')

let audioButton=document.querySelector('#audioButton')
let returnButton=document.querySelector('.return')

let linkedinButton=document.querySelector('.linkedin')
let emailButton=document.querySelector('.email')
let whatsappButton=document.querySelector('.whatsapp')

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
    const audioRect = audioButton.getBoundingClientRect();
    const returnRect = returnButton.getBoundingClientRect();
    const linkedinRect = linkedinButton.getBoundingClientRect();
    const emailRect = emailButton.getBoundingClientRect();
    const whatsappRect = whatsappButton.getBoundingClientRect();
    if(x>audioRect.left && x<audioRect.left+audioButton.offsetWidth && y>audioRect.top && y<audioRect.top+audioButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>returnRect.left && x<returnRect.left+returnButton.offsetWidth && y>returnRect.top && y<returnRect.top+returnButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>linkedinRect.left && x<linkedinRect.left+linkedinButton.offsetWidth && y>linkedinRect.top && y<linkedinRect.top+linkedinButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>emailRect.left && x<emailRect.left+emailButton.offsetWidth && y>emailRect.top && y<emailRect.top+emailButton.offsetHeight){
        mousePointer.src='../assets/images/FlechaNaranja.png'
    }
    else if(x>whatsappRect.left && x<whatsappRect.left+whatsappButton.offsetWidth && y>whatsappRect.top && y<whatsappRect.top+whatsappButton.offsetHeight){
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
        audioImg.src='../assets/images/NotaGris.png'
    }
    else{
        siteSong.play()
        audio=1
        audioImg.src='../assets/images/Musica.gif'
    }
})