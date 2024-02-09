let text = document.getElementById('text');
// let birdLeft = document.getElementById('bird-left');
// let birdRight = document.getElementById('bird-right');
// let brushLeft = document.getElementById('brush-left');
// let brushRight = document.getElementById('brush-right');

 window.addEventListener('scroll', () => {
     let value =  window.scrollY;

    text.style.marginTop = value * 1.2 + 'px'; 
//     birdLeft.style.left = value * -1.5 + 'px';
//     birdRight.style.left = value * 1.5 + 'px';
//     brushLeft.style.left = value * 0.5 + 'px';
})




