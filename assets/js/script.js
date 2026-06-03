
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
        body: "集合時間の 5〜15分前を目安に到着するのがおすすめ。22番ゲートはセキュリティチェックと手荷物チェックがあるので、早めに到着するように心がけよう。"
    },
    {
        num: "02",
        img: "./assets/images/venues/tokyo-dome-food.webp",
        title: "集合時間に遅れそう！どうしよう？",
        body: "集合時間の 5〜15分前を目安に到着するのがおすすめ。22番ゲートはセキュリティチェックと手荷物チェックがあるので、早めに到着するように心がけよう。"
    },
    {
        num: "03",
        img: "./assets/images/venues/tokyo-dome-sky.webp",
        title: "ずっと応援席にいてもいい??",
        body: "もちろん大丈夫。 自分のクラス座席で過ごし続けても、自由に移動しても、どちらでも自分のペースで楽しめます。"
    },
    {
        num: "04",
        img: "./assets/images/venues/tokyo-dome-cola.webp",
        title: "ご飯はどこで食べる? 持参 or 売店?",
        body: "飲食は養生シート上の指定エリアのみ可能です。昼食は事前に持参するのがおすすめ。 当日は会場外への一時外出ができません。 会場内に売店もありますが、軽食1店舗のみで数に限りがあるため、自宅近辺で準備してくると安心です。 "
    },
    {
        num: "05",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "飲み物はどこで買える? 持参したほうがいい?",
        body: "会場内に給水所が設置されています。 自分のペットボトルや水筒を持ち込むこともOK(ビン・缶はNG)。心配なら、朝のうちに用意しておこう。"
    },
    {
        num: "06",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "飲み物はどこで買える? 持参したほうがいい?",
        body: "会場内に給水所が設置されています。 自分のペットボトルや水筒を持ち込むこともOK(ビン・缶はNG)。心配なら、朝のうちに用意しておこう。"
    },
    {
        num: "07",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "静かに過ごすのも、ありですか?",
        body: "ぜんぜん、ありです。 応援を全力でする人もいれば、静かにスタンドから見ている人もいる。 どちらも、その人なりのスポフェスの楽しみ方です。"
    },
    {
        num: "08",
        img: "./assets/images/venues/tokyo-dome.webp",
        title: "入っちゃいけない場所や、注意点ってある?",
        body: "あります。 電子学園ウルトラクイズ、応援団長は君だ!、謎解きなど、運動量を気にせず参加できる種目が用意されています。"
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