$(document).ready(function () {
  $(".header__nav-openbtn").click(function () {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("active");
  });

  // テーマ検索モーダル
  $(".trip-themes__search-btn").click(function () {
    $(".search__modal").toggleClass("active");
    
    setTimeout(function() {
      $("#search-input").focus();
    }, 100);
  });

  $(".search__close-btn").click(function () {
    $(".search__modal").removeClass("active");
  });

  // topページmvのsplide設定
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    arrows: true,
    arrowPath: 'M0.00400019 20.488L15.992 11.78L0.00400019 3.1L1.264 0.888L21.424 11.78L1.264 22.7L0.00400019 20.488Z',
    autoplay: true,
    interval: 4000,
    pagination: true,
  }).mount();
  // コラムのsplide設定
  new Splide(".splide-column", {
    type: "loop",
    perPage: 1,
    arrows: true,
    autoplay: true,
    interval: 4000,
  }).mount();

});

//スクロール時にヘッダーを固定
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var siteConcept = document.querySelector(".site-concept");

  window.addEventListener("scroll", function () {
    var siteConceptBottom = siteConcept.getBoundingClientRect().bottom;

    if (siteConceptBottom <= 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});

$(document).click(function(event) {
    // モーダルの外側をクリックした場合
    if (!$(event.target).closest('.search__modal-inner').length && !$(event.target).closest('.trip-themes__search-btn').length) {
        if ($(".search__modal").hasClass("active")) {
            $(".search__modal").removeClass("active");
        }
    }
});

// エリア絞り込みモーダル
document.addEventListener('DOMContentLoaded', (event) => {
  const regions = document.querySelectorAll('#aomori, #towada, #mutsu, #goshogawara, #hirosaki, #shirakami');
  const labels = document.querySelectorAll('.map__label');
  const allElements = document.querySelectorAll('.map__block, .map__label'); // 共通のクラスを持つ要素を取得
  const filterButton = document.querySelector('.filter-container__btn');
  const closeButton = document.querySelector('.area__close-btn');
  
  // 地域ごとのマッピング
  const regionLabelMap = {
    'aomori': document.querySelector('.map__label--aomori'),
    'hirosaki': document.querySelector('.map__label--hirosaki'),
    'towada': document.querySelector('.map__label--towada'),
    'goshogawara': document.querySelector('.map__label--goshogawara'),
    'mutsu': document.querySelector('.map__label--mutsu'),
    'shirakami': document.querySelector('.map__label--shirakami')
  };

  allElements.forEach(element => {
    element.addEventListener('click', () => {
      // すべてのSVG要素とラベルからクラスを削除
      regions.forEach(r => r.classList.remove('highlight'));
      labels.forEach(label => label.classList.remove('highlight'));

      // すべてのモーダルから active クラスを削除
      document.querySelectorAll('.area__modal').forEach(modal => modal.classList.remove('active'));

      // ラベルをクリックした場合、対応するmap(svg)をハイライト
      if (element.classList.contains('map__label')) {
        element.classList.add('highlight');
        const labelClass = element.classList[1].split('--')[1];
        const region = document.getElementById(labelClass);
        if (region) {
          region.classList.add('highlight');
        }
      } else {
        // map(svg)をクリックした場合、対応するラベルをハイライト
        element.classList.add('highlight');
        const labelClass = element.id;
        if (regionLabelMap[labelClass]) {
          regionLabelMap[labelClass].classList.add('highlight');
        }
      }
    });
  });

  // フィルターボタンのクリックイベント
  filterButton.addEventListener('click', () => {
    document.querySelector('.area__modal').classList.toggle('active');
  });

  // クローズボタンのクリックイベント
  closeButton.addEventListener('click', () => {
    document.querySelector('.area__modal').classList.remove('active');
  });
});
