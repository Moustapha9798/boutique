

function updateSlider() {
    slider.style.transform = 'translateX(-$ {currentIndex * slideWidth } px)';
    const dots = document.querySelectorAll('.dot');


const sliderDots = document.querySelector('slider-dots');



setInterval(nexSlide, 3000) ;


const animatedElement = document.getElementById('animatedElement');

animatedElement.addEventListener('click', () => {
    animatedElement.style.transition = 'background-color 1s';
    animatedElement.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


import {createServer} from 'node.http'

const server = createServer((req, res) => {
    const file = createReadStream('index.html')
    file.pipe(res)
    red.end()
})
serveur.listen('8888') 