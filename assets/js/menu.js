/**
 * 1. дописать анимированный скролл при клике на ссылку [81]
 */


document.addEventListener("DOMContentLoaded", () =>{

  //анимаци при клике на кнопку меню
  let nav = document.querySelector('#nav__bar');
  let menuLabel = nav.querySelector('.menu__lable');
  let menuList = nav.querySelector('[class*="nav__list"]');
  let menuHeader = nav.querySelector('#nav__header');

  let menu = {
    openBackgroundColorSpan: '#FF530D',
    closedBackgroundColorSpan: '#5e646a;',
    openColorBorder: '#c2c2c2',
    closedColorBorder: '#5e646a;',
    
    animateBorder(e, color) {
      e.style.borderColor = '';
      e.style.borderColor = color;
    },

    animateSpan(color, size) {
      let menuHamburgers = document.querySelectorAll('.menu__hamburger');
      for (let i = 0; i < menuHamburgers.length; i++) {
        let hamburger = menuHamburgers[i];

        hamburger.style.backgroundColor = '';
        hamburger.style.backgroundColor = color;
        
        if (i === 0) {
          hamburger.style.transform = `translateX(${1.4 * size}em)`; 
        };
        
        if (i === 1) { 
          hamburger.style.transform = `translateX(${0.95 * size}em)`;
          };
        
        if (i === 2) { 
          hamburger.style.transform = `translateX(${0.6 * size}em)`;
        };
        
      }
    },

    addClass(menuList) {
      menuListName = menuList.className;

      if(menuListName.includes('close-menu') || menuListName === "nav__list") {
        // console.log(menuList.className)
        menuList.classList.remove('close-menu');
        menuList.classList.add('open-menu');
        menu.animateSpan(menu.openBackgroundColorSpan, 1);
        menu.animateBorder(menuLabel, menu.openColorBorder);
      }

      if(menuListName.includes('open-menu')) {
        // console.log(menuList.className)
        menuList.classList.remove('open-menu');
        menuList.classList.add('close-menu');
        menu.animateSpan(menu.closedBackgroundColorSpan, 0);
        menu.animateBorder(menuLabel, menu.closedColorBorder);
      }
    }
  }

  menuLabel.addEventListener('click', (e) => {
    menu.addClass(menuList);
    console.log(e.target.className)
  })

  // menuHeader.addEventListener('click', (e) => {
  //   menu.addClass(menuList);
  //   console.log(e.target.className)
  // })

  document.querySelector('.nav__list').addEventListener('click', (e) => {
    console.log(e.target.tagName)
    menu.addClass(menuList);
  })
})

$(document).ready(function() {
  var margin = 80; // переменная для контроля докрутки
  $(".nav__item a").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - margin +"px"
      }, {
        duration: 2000,
        easing: "linear"
      });
      console.log('ok')
      menu.addClass(menuList);
      return false;
  });
});

