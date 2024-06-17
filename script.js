$(document).ready(function() {
    $(".header__nav-openbtn").click(function () {
        $(this).toggleClass('active');
        $(".header__nav").toggleClass('active');
    });

    new Splide('.splide', {
        type   : 'loop',
        perPage: 1,
        arrows : true,
        autoplay: true,
        interval: 4000,
        pagination: false,
    }).mount();
});


