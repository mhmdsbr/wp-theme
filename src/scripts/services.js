//#region single-page-projects
let $next = $('.next-btn');
let $prev = $('.prev-btn');
let $prevDisable = $('.prev-btn-disable');
let $nextDisable = $('.next-btn-disable');
let flkty;
//#endregion

if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {

      //#region staff-single-page

      $('.c-staff__slider-wrapper').flickity({
        contain: true,
        pageDots: true,
        wrapAround: true,
        prevNextButtons: false,
        adaptiveHeight: true
      });

      addListenerClickTabs();

      //#endregion

      //#region single-page-project
      const $carouselSingle = $('.c-single__slider-wrapper').flickity({
        contain: true,
        pageDots: false,
        prevNextButtons: false
      });
      flkty = $carouselSingle.data('flickity');


      $next.on('click', function () {
        $carouselSingle.flickity('next');
        checkStatusButtons();
      });

      $prev.on('click', function () {
        $carouselSingle.flickity('previous');
        checkStatusButtons();
      });

      //#endregion

      //#region UIUX-single-page
      $('.c-UIUX__slider-wrapper').flickity({
        contain: true, pageDots: true, wrapAround: true, prevNextButtons: false, adaptiveHeight: true
      });

      //#endregion

      //#region web-development-single-page
      $('.c-web-development__slider-wrapper').flickity({
        contain: true, pageDots: true, wrapAround: true, prevNextButtons: false, adaptiveHeight: true
      });
      //#endregion

      //#region general
      $(document).on('ready', function () {
        particlesJS.load("particles-js-30", bugloosJS.particleJsonURL);
        $(".u-nav__slider-icon").on('click', function () {
          $(".menu-hide").toggleClass("show");
        });
        $(".menu-hide nav ul li").on('click', function () {
          $(".menu-hide").removeClass("show");
        });

        selectedLanguage();
      });

      $(window).on('resize', function () {
        resize()
      });

      $(".flickity-page-dot").each(function () {
        let text = $(this).text();
        text = text.replace("View slide", "");
        $(this).text(text);
      });

      const rev = $(".c-companies__slider-wrapper");
      rev
        .on("init", function (event, slick) {
          const cur = $(slick.$slides[slick.currentSlide]);
          const next = cur.next();
          const prev = cur.prev();
          prev.addClass("slick-sprev");
          next.addClass("slick-snext");
          cur.removeClass("slick-snext").removeClass("slick-sprev");
          slick.$prev = prev;
          slick.$next = next;
        })
        .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
          const cur = $(slick.$slides[nextSlide]);
          slick.$prev.removeClass("slick-sprev");
          slick.$next.removeClass("slick-snext");
          const next = cur.next();
          const prev = cur.prev();
          prev.prev();
          prev.next();
          prev.addClass("slick-sprev");
          next.addClass("slick-snext");
          slick.$prev = prev;
          slick.$next = next;
          cur.removeClass("slick-next").removeClass("slick-sprev");
        });

      rev.slick({
        speed: 400,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: "0",
        swipe: true,
        customPaging: function () {
          return "";
        },
        /*infinite: false,*/
      });
      musicHowler();

      //#endregion

    }
  )
}

function resize() {
  if ($(window).width() < 981) {
    $('.flickity-slider>div').addClass('flex-column-reverse').removeClass('u-flex--row');
  } else {
    $('.flickity-slider>div').removeClass('flex-column-reverse').addClass('u-flex--row');
  }
}


function checkStatusButtons() {
  $prev.removeClass('hide');
  $prevDisable.addClass('hide');
  $next.removeClass('hide');
  $nextDisable.addClass('hide');

  if (flkty.selectedIndex === 0) {
    $prev.addClass('hide');
    $prevDisable.removeClass('hide');
  } else if (flkty.selectedIndex === flkty.cells.length - 1) {
    $next.addClass('hide');
    $nextDisable.removeClass('hide');
  }
}

function addListenerClickTabs() {
  $(".tab-item").on(
    'click',
    function (event) {
      const index = $(this).index() + 1
      event.stopPropagation();
      event.stopImmediatePropagation();
      $(".tab-item").removeClass('is-selected');
      $('.tab-content').addClass('d-none');

      $(this).addClass('is-selected');
      $(`.tab-content:nth-child(${index})`).removeClass('d-none');
    });
}

function musicHowler() {
  $(function () {
    const sound = new Howl({
      src: ["piano.mp3"],
      volume: 0.8,
      loop: true
    });

    $(".c-icons__sound div").on("click", function () {
      $(".c-icons__sound div span").toggleClass("music-animation");
      return sound.playing() ? sound.pause() : sound.play();
    });
  });
}
