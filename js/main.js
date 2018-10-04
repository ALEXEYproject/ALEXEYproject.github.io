$('.button-header-menu').on('click', function(event) {
    $('.header-nav-mobile').addClass('header-nav-mobile-open');
});
$('.btn-menu-close').on('click', function(event) {
    $('.header-nav-mobile').removeClass('header-nav-mobile-open');
});
$('.button-show-map').on('click', function(event) {
    $('.map-block').addClass('map-block-open');
});

