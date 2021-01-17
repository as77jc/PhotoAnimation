const banner = document.querySelector('.banner');
const section = document.querySelector('section');
let root = document.querySelector(':root');

let blocks = [];
const url = './images/'
const fileName = ['1.jpg']


    root.style.setProperty('--imageName', `url("${url}${fileName[0]}")`);

    photosAnimation()


function photosAnimation () {
    if (section.classList.contains('active')) section.classList.remove('active');
    for (let i = 0; i < 400; i++){
        let duration = Math.random() * 5;
        
        blocks[i] = document.createElement('div');
        blocks[i].classList.add('blocks');
        banner.appendChild(blocks[i]);
        blocks[i].style.animationDuration = 2 + duration + 's';
        blocks[i].style.animationDelay = duration + 's';
    }

    setTimeout( () => {
        section.classList.add('active');
    },14000);       
}
