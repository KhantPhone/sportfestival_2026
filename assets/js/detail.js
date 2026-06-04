// compe
(function () {
  'use strict';

  // 操作するHTML要素の取得 .switch内のli
  const button = document.querySelectorAll('.switch li');
  const contents = document.querySelectorAll('.contents');

  // それぞれのliにイベントリスナーを追加
  // クリックされたら
  for (let j = 0; j < button.length; j++) {
    button[j].addEventListener('click', () => {
      // すべてのliから.activeを削除    
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
      }
      // クリックされたliに .active をつける
      button[j].classList.add('active');

      // すべてのcontentsからactiveを削除
      for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
      }

      // 対応するcontentsにactiveを追加
      contents[j].classList.add('active');
    });
  }




})();