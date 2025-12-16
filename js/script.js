const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe'); 
const popup = document.querySelector('.game-over-popup');
const restartBtn = document.getElementById('restart');

let pipeSpeed = 2.5;
const minSpeed = 0.7;

const updatePipeSpeed = () => {
pipe.style.animation = `pipe-animation ${pipeSpeed}s infinite linear`;
    };

updatePipeSpeed();

const jump = () => {

    mario.classList.add('jump');
     setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

const loop =  setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');   


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        
        mario.classList.remove('jump');

    
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        mario.classList.add('death');

        clearInterval(loop);
        document.removeEventListener('keydown', jump);

        setTimeout(() => {
            popup.style.display = 'flex';
        }, 1000);

    }

}, 10);


const difficultyLoop = setInterval(() => {

        if (!gameOver && pipeSpeed > minSpeed){

            pipeSpeed -= 0.15;
            updatePipeSpeed();
        }


}, 5000);

document.addEventListener('keydown', jump);

restartBtn.addEventListener('click', () => {
    location.reload();
});

