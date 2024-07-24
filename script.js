// $(document).ready(function () {
//   $(".header__nav-openbtn").click(function () {
//     $(this).toggleClass("active");
//     $(".header__nav").toggleClass("active");
//   });

//   // テーマ検索モーダル
//   $(".trip-themes__search-btn").click(function () {
//     $(".search__modal").toggleClass("active");
    
//     setTimeout(function() {
//       $("#search-input").focus();
//     }, 100);
//   });

//   $(".search__close-btn").click(function () {
//     $(".search__modal").removeClass("active");
//   });

//   // topページmvのsplide設定
//   new Splide(".splide", {
//     type: "loop",
//     perPage: 1,
//     arrows: true,
//     arrowPath: 'M0.00400019 20.488L15.992 11.78L0.00400019 3.1L1.264 0.888L21.424 11.78L1.264 22.7L0.00400019 20.488Z',
//     autoplay: true,
//     interval: 4000,
//     pagination: true,
//   }).mount();
//   // コラムのsplide設定
//   new Splide(".splide-column", {
//     type: "loop",
//     perPage: 1,
//     arrows: true,
//     autoplay: true,
//     interval: 4000,
//   }).mount();

// });

// //スクロール時にヘッダーを固定
// document.addEventListener("DOMContentLoaded", function () {
//   var header = document.querySelector(".header");
//   var siteConcept = document.querySelector(".site-concept");

//   window.addEventListener("scroll", function () {
//     var siteConceptBottom = siteConcept.getBoundingClientRect().bottom;

//     if (siteConceptBottom <= 0) {
//       header.classList.add("fixed");
//     } else {
//       header.classList.remove("fixed");
//     }
//   });
// });

// $(document).click(function(event) {
//     // モーダルの外側をクリックした場合
//     if (!$(event.target).closest('.search__modal-inner').length && !$(event.target).closest('.trip-themes__search-btn').length) {
//         if ($(".search__modal").hasClass("active")) {
//             $(".search__modal").removeClass("active");
//         }
//     }
// });

// // エリア絞り込みモーダル
// document.addEventListener('DOMContentLoaded', (event) => {
//   const regions = document.querySelectorAll('#aomori, #towada, #mutsu, #goshogawara, #hirosaki, #shirakami');
//   const labels = document.querySelectorAll('.map__label');
//   const allElements = document.querySelectorAll('.map__block, .map__label'); // 共通のクラスを持つ要素を取得
//   const filterButton = document.querySelector('.filter-container__btn');
//   const closeButton = document.querySelector('.area__close-btn');
  
//   // 地域ごとのマッピング
//   const regionLabelMap = {
//     'aomori': document.querySelector('.map__label--aomori'),
//     'hirosaki': document.querySelector('.map__label--hirosaki'),
//     'towada': document.querySelector('.map__label--towada'),
//     'goshogawara': document.querySelector('.map__label--goshogawara'),
//     'mutsu': document.querySelector('.map__label--mutsu'),
//     'shirakami': document.querySelector('.map__label--shirakami')
//   };

//   allElements.forEach(element => {
//     element.addEventListener('click', () => {
//       // すべてのSVG要素とラベルからクラスを削除
//       regions.forEach(r => r.classList.remove('highlight'));
//       labels.forEach(label => label.classList.remove('highlight'));

//       // すべてのモーダルから active クラスを削除
//       document.querySelectorAll('.area__modal').forEach(modal => modal.classList.remove('active'));

//       // ラベルをクリックした場合、対応するmap(svg)をハイライト
//       if (element.classList.contains('map__label')) {
//         element.classList.add('highlight');
//         const labelClass = element.classList[1].split('--')[1];
//         const region = document.getElementById(labelClass);
//         if (region) {
//           region.classList.add('highlight');
//         }
//       } else {
//         // map(svg)をクリックした場合、対応するラベルをハイライト
//         element.classList.add('highlight');
//         const labelClass = element.id;
//         if (regionLabelMap[labelClass]) {
//           regionLabelMap[labelClass].classList.add('highlight');
//         }
//       }
//     });
//   });

//   // フィルターボタンのクリックイベント
//   filterButton.addEventListener('click', () => {
//     document.querySelector('.area__modal').classList.toggle('active');
//   });

//   // クローズボタンのクリックイベント
//   closeButton.addEventListener('click', () => {
//     document.querySelector('.area__modal').classList.remove('active');
//   });
// });




$(document).ready(function () {
  // ヘッダーナビゲーション
  $(".header__nav-openbtn").click(function () {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("active");
  });

  // テーマ検索モーダル
  $(".trip-themes__search-btn").click(function () {
    $(".search__modal").addClass("active");
    setTimeout(function() {
      $("#search-input").focus();
    }, 100);
  });

  $(".search__close-btn").click(function () {
    $(".search__modal").removeClass("active");
  });

  // Splide設定
  if ($(".splide").length) {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      arrows: true,
      arrowPath: 'M0.00400019 20.488L15.992 11.78L0.00400019 3.1L1.264 0.888L21.424 11.78L1.264 22.7L0.00400019 20.488Z',
      autoplay: true,
      interval: 4000,
      speed: 800,
      pagination: true,
    }).mount();
  }

  if ($(".splide-column").length) {
    new Splide(".splide-column", {
      type: "loop",
      perPage: 1,
      arrows: true,
      autoplay: true,
      interval: 4000,
    }).mount();
  }

  // スクロール時のヘッダー固定
  var header = $(".header");
  var siteConcept = $(".site-concept");

  $(window).scroll(function () {
    var siteConceptBottom = siteConcept.offset().top + siteConcept.outerHeight();
    if ($(window).scrollTop() > siteConceptBottom) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // モーダル外クリックで閉じる
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.search__modal-inner').length && !$(event.target).closest('.trip-themes__search-btn').length) {
      $(".search__modal").removeClass("active");
    }
  });

  // エリア絞り込みモーダル
  const filterButton = $('.filter-container__btn');
  const closeButton = $('.area__close-btn');

  filterButton.on('click', function() {
    $('.area__modal').addClass('active');
  });

  closeButton.on('click', function() {
    $('.area__modal').removeClass('active');
  });

  // SVGの処理
  const svgObject = $('object[type="image/svg+xml"]')[0];
  if (svgObject) {
    $(svgObject).on('load', function() {
      const svgDoc = svgObject.contentDocument;
      initializeSVGInteractions(svgDoc);
    });
  }

  function initializeSVGInteractions(svgDoc) {
    const regions = $(svgDoc).find('#aomori, #towada, #mutsu, #goshogawara, #hirosaki, #shirakami');
    const labels = $('.map__label');
    let activeRegion = null; // 現在アクティブな地域を保持する
    let activeLabel = null; // 現在アクティブなラベルを保持する
  
    const regionLabelMap = {
      aomori: $('.map__label--aomori'),
      hirosaki: $('.map__label--hirosaki'),
      towada: $('.map__label--towada'),
      goshogawara: $('.map__label--goshogawara'),
      mutsu: $('.map__label--mutsu'),
      shirakami: $('.map__label--shirakami')
    };
    
    // マップのホバーアクション
    regions.on('mouseenter', function() {
      if (!$(this).hasClass('highlight')) { // ハイライトされていない場合のみ変更
        $(this).find('.cls-4').css('fill', '#2ea7e0');
        $(this).find('.cls-5').css('fill', '#fff');
      }
    }).on('mouseleave', function() {
      if (!$(this).hasClass('highlight')) { // ハイライトされていない場合のみ元の色に戻す
        $(this).find('.cls-4').css('fill', ''); 
        $(this).find('.cls-5').css('fill', '');
      }
    });
  
    // クリックイベントの処理
    regions.on('click', function() {
      // 以前のアクティブな地域のハイライトをクリア
      if (activeRegion) {
        activeRegion.removeClass('highlight');
        activeRegion.find('.cls-4').css('fill', '');
        activeRegion.find('.cls-5').css('fill', '');
      }
      // 新しいアクティブな地域を設定
      activeRegion = $(this);
      activeRegion.addClass('highlight');
      activeRegion.find('.cls-4').css('fill', '#2ea7e0');
      activeRegion.find('.cls-5').css('fill', '#fff');
      
      const labelClass = activeRegion.attr('id');
      if (regionLabelMap[labelClass]) {
        if (activeLabel) {
          activeLabel.removeClass('highlight');
        }
        activeLabel = regionLabelMap[labelClass];
        activeLabel.addClass('highlight');
      }
      // エリアモーダルを閉じる
      $('.area__modal').removeClass('active');
    });
  
    
    labels.on('click', function() {
      // 以前のアクティブな地域のハイライトをクリア
      if (activeRegion) {
        activeRegion.removeClass('highlight');
        activeRegion.find('.cls-4').css('fill', '');
        activeRegion.find('.cls-5').css('fill', '');
      }
      // 以前のアクティブなラベルのハイライトをクリア
      if (activeLabel) {
        activeLabel.removeClass('highlight');
      }
    
      // 新しいアクティブなラベルを設定
      activeLabel = $(this);
      activeLabel.addClass('highlight');
    
      // クラス名から--以降を取得
      const classNames = $(this).attr('class');
      const classList = classNames.split(' ');
      let labelClass = '';
      for (let i = 0; i < classList.length; i++) {
        if (classList[i].startsWith('map__label--')) {
          labelClass = classList[i].split('--')[1].trim();
          break;
        }
      }
    
      // 対応するキーをIDに持つSVG要素にハイライトクラスを付与
      const targetRegion = svgDoc.getElementById(labelClass);
      if (targetRegion) {
        activeRegion = $(targetRegion);
        activeRegion.addClass('highlight');
        $(targetRegion).find('.cls-4').css('fill', '#2ea7e0');
        $(targetRegion).find('.cls-5').css('fill', '#fff');
      }
    
      // エリアモーダルを閉じる
      $('.area__modal').removeClass('active');
    });
  }
});
