(function () {
const tl1 = gsap.timeline({defaults: {ease: 'Power1.out'} });

tl1.to('.text--small', {x: 20, duration: 1});
tl1.to('.wrapper__heading', {x: 20, duration: 1}, "-=1");
tl1.to('.wrapper__image', {x: 20, duration: 1}, "-=1");

const tl2 = gsap.timeline({defaults: {ease: "none"} });

let snowFlakes = document.querySelectorAll('.fas');

let icons = document.querySelector('.icons');

for (let i = 0; i < snowFlakes.length; i++) {
    let snowFlake = snowFlakes[i];
    let width = 100 / snowFlakes.length;
    let start = Math.random() * 5;
    let duration = 3 + Math.random() * 3;
    let scale = 0.5 + Math.random() * 0.7;
    snowFlake.style.transform = 'scale(' + scale + ')'; 
    snowFlake.style.opacity = scale;
    snowFlake.style.left = (i * width + width / 2) + '%';
    tl2.to(snowFlake, {y: icons.offsetHeight * 1.5, duration: duration, repeat: -1}, start);
}
})();
