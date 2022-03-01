
const home = document.querySelector('#home');
const photopolio = document.querySelector('#text img');
const icon = document.querySelectorAll('#home > span');

window.addEventListener('load', ( )=> {
  opacityTransition(home, '1', '1s');
  photopolio.style.marginBottom = '4vh';
  opacityTransition(photopolio, '1', '1.5s');
  opacityTransitionDelay(icon[0], '1', '2s', '1s');
  opacityTransitionDelay(icon[1], '1', '2s', '1.5s');
});


// logo animationDelay
const logo = document.querySelectorAll('#logo > span');

for(i = 0; i < logo.length; i++) {
  logo[i].style.animationDelay = '.' + i + 's';
  if(i === 3) {
    logo[3].style.marginLeft = '.5vw';
  }
  if(i === 5) {
    logo[5].style.marginRight = '.5vw';
  }
}

// 햄버거 클릭시 nav가 나타남
const botton = document.querySelector('#Hamburger');
const bottons = document.querySelectorAll('#Hamburger > div');
const ul = document.querySelector('#header ul');

let on = true;
botton.addEventListener('click', () => {
  if(on) {
    ul.style.width = '100%';
    bottons[0].style.transform = 'translateY(8px) rotate(45deg)';
    bottons[1].style.opacity = '0';
    bottons[2].style.transform = 'translateY(-10px) rotate(-45deg)';
    on = false;
  } else {
    ul.style.width = '0';
    bottons[0].style.transform = 'translateY(0) rotate(0)';
    bottons[1].style.opacity = '1';
    bottons[2].style.transform = 'translateY(0) rotate(0)';
    on = true;
  }
});
