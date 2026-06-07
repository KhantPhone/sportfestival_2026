/*preloader*/


 $(window).on('load',function(){
 		$(".loader").fadeOut(5000);
 		$(".content").fadeIn(5000);
 })


// NAV LINKS
document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.target);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', false);
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
    });
});

window.addEventListener('load', () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', window.location.pathname);
});
//HEADER
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('navHamburger');

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('menu-open', open);
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
        img: "./assets/images/venues/tokyo-dome-gate.webp",
        title: "朝、どのくらい余裕をもって着けばいい?",
        body: "集合時間の 5〜15分前を目安に到着するのがおすすめ。22番ゲートはセキュリティチェックと手荷物チェックがあるので、早めに到着するように心がけよう。"
    },
    {
        num: "02",
        img: "./assets/images/venues/tokyo-dome-entrance.webp",
        title: "集合時間に遅れそう！どうしよう？",
        body: "時間に間に合わないと感じたときは、まず担任の先生に連絡しよう。東京ドームに到着したら、22番ゲートに向かえば大丈夫。 でも、スポーツフェスティバルを存分に楽しむには遅れずに到着することも重要。時間にはくれぐれも余裕をもって。"
    },
    {
        num: "03",
        img: "./assets/images/venues/tokyo-dome-stands.webp",
        title: "ずっと応援席にいてもいい?",
        body: "もちろん大丈夫。自分のクラス座席で過ごし続けても、自由に移動しても、どちらでも自分のペースで楽しめます。"
    },
    {
        num: "04",
        img: "./assets/images/venues/tokyo-dome-store.webp",
        title: "ご飯はどこで食べる? 持参 or 売店?",
        body: "飲食は養生シート上の指定エリアのみ可能です。昼食は事前に持参するのがおすすめ。当日は会場外への一時外出ができません。会場内に売店もありますが、軽食1店舗のみで数に限りがあるため、自宅近辺で準備してくると安心です。"
    },
    {
        num: "05",
        img: "./assets/images/venues/tokyo-dome-drinks.webp",
        title: "飲み物はどこで買える? 持参したほうがいい?",
        body: "会場内に給水所が設置されています。自分のペットボトルや水筒を持ち込むこともOK(ビン・缶はNG)。心配なら、朝のうちに用意しておこう。"
    },
    {
        num: "06",
        img: "./assets/images/venues/tokyo-dome-seats.webp",
        title: "静かに過ごすのも、ありですか?",
        body: "ぜんぜん、ありです。応援を全力でする人もいれば、静かにスタンドから見ている人もいる。どちらも、その人なりのスポフェスの楽しみ方です。"
    },
    {
        num: "07",
        img: "./assets/images/venues/tokyo-dome-quiz.webp",
        title: "動かなくても楽しめる種目はある?",
        body: "電子学園ウルトラクイズ、応援団長は君だ!、謎解きなど、運動量を気にせず参加できる種目が用意されています。"
    },
    {
        num: "08",
        img: "./assets/images/venues/tokyo-dome-rules.webp",
        title: "入っちゃいけない場所や、注意点ってある?",
        body: "あります。フィールドエリアや運営スタッフ専用通路には立ち入り禁止です。案内スタッフの指示に従って行動しよう。"
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

//FUN
const funBtn = document.getElementById('funBtn');
const funResults = document.getElementById('funResults');
const funResultsClose = document.getElementById('funResultsClose');
const funCardsView = document.getElementById('funCardsView');
const funDetailView = document.getElementById('funDetailView');
const detailTitle = document.getElementById('detailTitle');
const detailImg = document.getElementById('detailImg');
const detailItems = document.getElementById('detailItems');

//FUN
const funData = {
    "応援派": {
        title: "応援派の楽しみ方",
        img: "./assets/images/icons/fun-ouen.svg",
        items: [
            "クラス対抗リレー(決勝) — 一日のクライマックス、声の限界に挑む瞬間",
            "THE 決戦!!(騎馬戦) — 30秒1本勝負、毎秒が応援どころ",
            "色別対抗リレー — 最終種目、色チーム全員の熱量がピークに",
            "応援団長は君だ! — 自分自身が主役になれるエキシビジョン"
        ]
    },
    "写真派": {
        title: "写真派の楽しみ方",
        img: "./assets/images/icons/fun-shashin.svg",
        items: [
            "THE 決戦!!(騎馬戦) — 動きが激しく、ドラマチックな構図が決まる",
            "クラス対抗リレー(決勝) — クライマックスのゴールシーン",
            "応援団長は君だ! — 表情豊か、ベストショット狙い目",
            "フォトスポット 5箇所 — 公式撮影スポットをマップで確認"
        ]
    },
    "観察派": {
        title: "観察派の楽しみ方",
        img: "./assets/images/icons/fun-kansatsu.svg",
        items: [
            "応援団長は君だ! — 会場全体のカオスを見守る楽しさ",
            "謎解き — 5人チームで自分のペースで進められる",
            "電子学園ウルトラクイズ — 運動不要、知識で参加できる",
            "スタンド席上段 — 一日の流れを俯瞰できる定位置"
        ]
    },
    "コスプレ派": {
        title: "コスプレ派の楽しみ方",
        img: "./assets/images/icons/fun-cosplay.svg",
        items: [
            "借りもの競争(教員参加種目) — 視認性が高く、衣装が映える",
            "応援団長は君だ! — 衣装でアピールしやすい、目立ち重視のエキシビジョン",
            "クラス対抗リレー — クラスの応援パフォーマンスで衣装を披露"
        ]
    },
    "ゆる参加派": {
        title: "ゆる参加派の楽しみ方",
        img: "./assets/images/icons/fun-yuru.svg",
        items: [
            "スピードガン — 1人2球、サクッと参加できる",
            "ベースランニング — 1回挑戦、軽い気持ちで",
            "電子学園ウルトラクイズ — 運動が苦手でも知識で楽しめる",
            "謎解き — 5人チームで自分のペースで進む"
        ]
    },
    "全力派": {
        title: "全力派の楽しみ方",
        img: "./assets/images/icons/fun-zenryoku.svg",
        items: [
            "クラス対抗リレー(予選/決勝) — メイン競技、5人1チームで戦う",
            "THE 決戦!!(騎馬戦) — 4人1組、戦略+体力勝負",
            "サバイバルハント — 高強度、3分間の生存ゲーム",
            "色別対抗リレー — 総合得点を決める最終種目"
        ]
    }
};

funBtn.addEventListener('click', (e) => {
    e.preventDefault();
    funResults.classList.add('active');
    document.body.style.overflow = 'hidden';
});

funResultsClose.addEventListener('click', () => {
    funResults.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        funDetailView.style.display = 'none';
        funCardsView.style.display = 'block';
    }, 400);
});

document.querySelectorAll('.fun__result-card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.dataset.key;
        const data = funData[key];
        if (!data) return;

        detailTitle.innerHTML = `${data.title}<span class="fun__question">!</span>`;
        detailImg.src = data.img;

        detailItems.innerHTML = '';
        data.items.forEach(item => {
            const p = document.createElement('p');
            p.className = 'detail__body-text';
            p.innerHTML = `<span class="detail-dot"></span>${item}`;
            detailItems.appendChild(p);
        });

        funCardsView.style.display = 'none';
        funDetailView.style.display = 'block';
    });
});

//MAP


  const mapTrigger = document.querySelector('.map__trigger');
  const mapModal = document.getElementById('mapModal');
  const mapModalClose = document.getElementById('mapModalClose');

  mapTrigger.addEventListener('click', () => {
    mapModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    mapModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  mapModalClose.addEventListener('click', closeModal);

  mapModal.addEventListener('click', (e) => {
    if (e.target === mapModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });


