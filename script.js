$(document).ready(function() {
    $(".header__nav-openbtn").click(function () {
        $(this).toggleClass('active');
        $(".header__nav").toggleClass('active');
    });

    // テーマ検索モーダル
    $(".trip-themes__search-btn").click(function () {
        $(".search__modal").toggleClass('active');
    });

    $(".search__close-btn").click(function () {
        $(".search__modal").removeClass('active');
    });

    new Splide('.splide', {
        type   : 'loop',
        perPage: 1,
        arrows : true,
        autoplay: true,
        interval: 4000,
        pagination: false,
    }).mount();

    new Splide('#splide-column', {
        type: 'loop',
        perPage: 1,
        arrows : false,
        autoplay: true,
        interval: 5000,
    }).mount();

    var header = document.querySelector('.header');
    var windowHeight = window.innerHeight;
    var scrollThreshold = windowHeight * 0.4;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    // var header = document.querySelector('.header');
    // var siteConcept = document.querySelector('.site-concept');

    // window.addEventListener('scroll', function() {
    //     var siteConceptPosition = siteConcept.getBoundingClientRect().top;

    //     if (siteConceptPosition <= 0) {
    //         header.classList.add('fixed');
    //     } else {
    //         header.classList.remove('fixed');
    //     }
    // });
});
