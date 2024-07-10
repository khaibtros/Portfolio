let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let moutains_front = document.getElementById('mountains_front');
let options = document.getElementsByClassName('options')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    stars.style.left = value * 0.75 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    moutains_front.style.top = value * 0 + 'px';
    text.style.right = value * 3 + 'px';
})

