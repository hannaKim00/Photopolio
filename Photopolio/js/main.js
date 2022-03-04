const home = document.querySelector('#home');
const photopolio = document.querySelector('#text h2');
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


const header = document.querySelector('#header');
const menu = document.querySelectorAll('#header ul li');
const section = document.querySelectorAll('#container > section');
// 클릭한 메뉴의 section으로 이동
for(i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function(event) {
    if(event.target === menu[0]) {
      window.scroll({top:section[0].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[1]) {
      window.scroll({top:section[1].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[2]) {
      window.scroll({top:section[2].offsetTop, behavior:'smooth'});
    } else {
      window.scroll({top:section[3].offsetTop, behavior:'smooth'});
    }
  });
};
// 2번째 section에서 글자색 변경
window.addEventListener('scroll', function(){
  if(window.scrollY >= section[1].offsetTop && window.scrollY < section[2].offsetTop) {
    header.style.color = '#F5F0ED';
  } else {
    header.style.color = '#2F4858';
  }
});


// PhotoPolio set ************
const prve = document.querySelector('#btn div:nth-child(1)');
const next = document.querySelector('#btn div:nth-child(2)');
const content = document.querySelector('#contents > ul');

next.addEventListener('click', () => {
  content.style.marginLeft = '-65vw';
});
prve.addEventListener('click', () => {
  content.style.marginLeft = '0';
});