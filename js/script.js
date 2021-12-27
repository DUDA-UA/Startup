"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
var navbarWrap = document.querySelector('.navbar');
var btnToTop = document.querySelector('.go-top');

function magic() {
  if (window.pageYOffset > 30) {
    btnToTop.style.opacity = '1';
    navbarWrap.classList.add('active');
  } else {
    btnToTop.style.opacity = '0';
    navbarWrap.classList.remove('active');
  }
}

window.onscroll = magic;
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var gallery = document.querySelector('.works__gallery');
var items = document.querySelectorAll('.works__tabItem');
var imgs = document.querySelectorAll('.works__galleryItem');
items.forEach(function (item) {
  item.addEventListener('click', function () {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }

    item.classList.add('active');
    var atr = item.getAttribute('data-number');
    var numb = parseInt(atr);

    for (var x = 0; x < items.length; x++) {
      for (var _i = 0; _i < imgs.length; _i++) {
        imgs[_i].classList.remove('active');
      }

      if (numb == 1) {
        imgs[2].classList.add('active');
        imgs[3].classList.add('active');
        gallery.classList.add('active');
      } else if (numb == 2) {
        imgs[4].classList.add('active');
        imgs[5].classList.add('active');
        gallery.classList.add('active');
      } else if (numb == 3) {
        imgs[6].classList.add('active');
        imgs[7].classList.add('active');
        gallery.classList.add('active');
      } else if (numb == 4) {
        imgs[0].classList.add('active');
        imgs[1].classList.add('active');
        gallery.classList.add('active');
      } else if (numb == 0) {
        for (var y = 0; y < imgs.length; y++) {
          imgs[y].classList.add('active');
          gallery.classList.remove('active');
        }
      }
    }
  });
});