$(document).ready(function () {
  $(".header__nav-openbtn").click(function () {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass("active");
  });

  // テーマ検索モーダル
  $(".trip-themes__search-btn").click(function () {
    $(".search__modal").toggleClass("active");
  });

  $(".search__close-btn").click(function () {
    $(".search__modal").removeClass("active");
  });


  //エリア絞り込みモーダル
  $(".filter-container__btn").click(function () {
    $(".area__modal").toggleClass("active");
  });

  $(".area__close-btn").click(function () {
    $(".area__modal").removeClass("active");
  });

  $(".map__block").click(function () {
    $(".area__modal").removeClass("active");
  });

  $(".map__label").click(function () {
    $(".area__modal").removeClass("active");
    $(".map__label").removeClass("highlight"); // 以前のハイライトを削除
    $(this).addClass("highlight"); // クリックした要素にハイライトを追加
  });

  // topページmvのsplide設定
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    arrows: true,
    autoplay: true,
    interval: 4000,
    pagination: false,
  }).mount();

  // コラムのsplide設定
  new Splide(".splide-column", {
    type: "loop",
    perPage: 1,
    arrows: true,
    autoplay: true,
    interval: 4000,
  }).mount();

  // コラムのsplide設定
  new Splide(".spot-details__slider", {
    type: "loop",
    perPage: 1,
    arrows: false,
    autoplay: true,
    interval: 4000,
  }).mount();
});

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

