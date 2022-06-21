$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1100,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    respinsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
          adaptiveHeight: true,
        },
      },
    ],
  });
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );
  const itemsLink = document.querySelectorAll('.catalog-item__link');
  const itemsBack = document.querySelectorAll('.catalog-item__back');

  itemsLink.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.closest('div').classList.toggle('catalog-item__content_active');
      item
        .closest('div')
        .nextElementSibling.classList.toggle('catalog-item__list_active');
    });
  });

  itemsBack.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.closest('ul').classList.toggle('catalog-item__list_active');
      item
        .closest('ul')
        .previousElementSibling.classList.toggle(
          'catalog-item__content_active'
        );
    });
  });

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
});
