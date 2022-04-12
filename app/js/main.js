document.addEventListener("DOMContentLoaded", () => {
$(function () {
   $('.banner-section__slider').slick({
      dots: true,
      arrows: true,
      prevArrow: '<button class="banner-section__arrow banner-section__arrow-prev"> <img src="images/slider-banner-left.svg" alt="arrow" > </button>',
      nextArrow: '<button class="banner-section__arrow banner-section__arrow-next"> <img src="images/slider-banner-next.svg" alt="arrow" > </button>',
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true


   });
   $('.products-slider').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button class="products__arrow products__arrow-prev"> <img src="images/prev-products-slider.svg" alt="arrow" > </button>',
      nextArrow: '<button class="products__arrow products__arrow-next"> <img src="images/next-products-slider.svg" alt="arrow" > </button>',
      slidesToShow: 4,
      slidesToScroll: 1,

   });
   $('.products-with-slider').slick({
      dots: false,
      arrows: true,
      prevArrow: '<button class="products__arrow products__arrow-prev"> <img src="images/prev-products-slider.svg" alt="arrow" > </button>',
      nextArrow: '<button class="products__arrow products__arrow-next"> <img src="images/next-products-slider.svg" alt="arrow" > </button>',
      slidesToShow: 4,
      slidesToScroll: 1,

   });


});

function tabs(parent, tabscontent, tabsself, aciveClass) {
   const content = document.querySelectorAll(tabscontent),
      tabsparent = document.querySelector(parent),
      tabs = document.querySelectorAll(tabsself);

   function hide() {
      content.forEach(item => {
         item.style.display = "none";
      });

      tabs.forEach(item => {
         item.classList.remove(aciveClass);
      });

   }

   function show(i = 0) {
      content[i].style.display = "block";
      tabs[i].classList.add(aciveClass);
   }
   hide();
   show();
   tabsparent.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains(tabsself.slice(1))) {

         tabs.forEach((elem, i) => {
            if (elem === e.target) {
               hide();
               show(i);
            }
         });
      }

   });
}
try {
   tabs('.search__tabs', '.search__content-item', '.search__tabs-item', 'search__tabs--active');
   tabs('.products-popular__wrapper', '.products-popular__tabs-content', '.products-popular__tab', 'tab--active');
   tabs('.products-with__wrapper', '.products-with__tabs-content', '.products-with__tab', 'tab--active');
} catch (e) {}
try {
   tabs('.aside-filter__tabs', '.aside-filter__content', '.aside-filter__tab', 'tab--active-aside');
} catch (e) {

}

function favoriteProducts() {
   const btns = document.querySelectorAll('.products__item-favorite');
   let defaultColor = 'black';
   let selectColor = '#1C62CD';

   btns.forEach(btn => {
      btn.addEventListener('click', () => {
         let icon = btn.childNodes[1].childNodes[1];
         if (icon.getAttribute('fill') == selectColor) {
            icon.setAttribute('d', "M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z");
            icon.setAttribute('fill', defaultColor);
         } else {
            icon.setAttribute('d', "M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z");
            icon.setAttribute('fill', selectColor);
         }
      });
   });
}
try {
   favoriteProducts();
} catch (e) {}



function dropFilter(btn, activeClass) {
   const btnsDrop = document.querySelectorAll(btn);
   btnsDrop.forEach(btnDrop => {
      btnDrop.addEventListener('click', function () {
         this.classList.toggle(activeClass);
         this.nextElementSibling.classList.toggle('show');
         this.nextElementSibling.style.transition = 'all 0.7s ';

      });
   });

}
try {
   dropFilter('.aside-filter__toggle', 'drop--active');
} catch (e) {}


try {
   const radiobtns = document.querySelectorAll('.aside-filter__radio');
   radiobtns[0].checked = true;
   radiobtns.forEach((btn) =>
      btn.addEventListener('input', () => {
         radiobtns.forEach((item) => {
            item.checked = false;
         });
         btn.checked = true;
      }));
} catch (e) {}

});

  
   

