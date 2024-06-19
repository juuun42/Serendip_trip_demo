$(document).ready(function() {
    $(".header__nav-openbtn").click(function () {
        $(this).toggleClass('active');
        $(".header__nav").toggleClass('active');
    });
    
    //テーマ検索モーダル
    $(".trip-themes__search-btn").click(function () {
        $(".search__modal").toggleClass('active');

        //検索ボタンに重ねてモーダルを表示する場合に使えそう
        // $(".trip-themes__title").toggleClass('active');
        // $(".trip-themes__search-btn").toggleClass('active');
    });

    $(".search__close-btn").click(function () {
        $(".search__modal").removeClass('active');

        //検索ボタンに重ねてモーダルを表示する場合に使えそう
        // $(".trip-themes__title").removeClass('active');
        // $(".trip-themes__search-btn").removeClass('active');
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
});


