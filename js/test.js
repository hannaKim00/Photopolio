const menu = document.querySelectorAll('#menu > div');
const contents = document.querySelectorAll('section');

for(i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function(event) {
    if(event.target === menu[0]) {
      window.scroll({top:contents[0].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[1]) {
      window.scroll({top:contents[1].offsetTop, behavior:'smooth'});
    } else if(event.target === menu[2]) {
      window.scroll({top:contents[2].offsetTop, behavior:'smooth'});
    } else {
      window.scroll({top:contents[3].offsetTop, behavior:'smooth'});
    }
  });
};

