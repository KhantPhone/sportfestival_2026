
//HEADER
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('navHamburger');

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
});
// MARQUEE
document.querySelectorAll('.marquee__track').forEach(track => {
    track.innerHTML += track.innerHTML;
});


//SWIPER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,        
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    768: {              
      slidesPerView: 2,
    },
    1024: {             
      slidesPerView: 2,
    }
  }
});

//GUIDE
const guideItems = [
    {
        num: "01",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "途中で参加してもいい？",
        body: "カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。カントです。"
    },
    {
        num: "02",
        img: "./assets/images/venues/tokyo-dome-food.webp",
        title: "朝、何分前くらいに着けばいい?",
        body: "何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん"
    },
    {
        num: "03",
        img: "./assets/images/venues/tokyo-dome-sky.webp",
        title: "集合時間に遅れたら、もう入れない?",
        body: "何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん"
    },
    {
        num: "04",
        img: "./assets/images/venues/tokyo-dome-cola.webp",
        title: "ずっと同じ場所にいてもいい?",
        body: "何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん"
    },
    {
        num: "05",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "途中から参加してもいい？",
        body: "何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん何とか知らん"
    }
];

const subContents = document.querySelectorAll('.guide__sub-content');
const mainImg = document.querySelector('#guideMainContent .guide__content-image-wrap img');
const mainNum = document.getElementById('guideMainNum');
const mainTitle = document.getElementById('guideMainTitle');
const mainBody = document.getElementById('guideMainBody');
subContents.forEach((item, i) => {
    item.addEventListener('click', () => {
        subContents.forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        const mainContent = document.getElementById('guideMainContent');
        mainContent.classList.add('fading');

        setTimeout(() => {
            const d = guideItems[i];
            mainImg.src = d.img;
            mainNum.textContent = d.num;
            mainTitle.textContent = d.title;
            mainBody.textContent = d.body;
            mainContent.classList.remove('fading');
        }, 300);
    });
});