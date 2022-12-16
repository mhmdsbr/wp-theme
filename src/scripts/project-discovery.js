if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {

    particlesJS.load("particles-js-6", bugloosJS.particleJsonURL);
    $('.c-projects__slider-wrapper').flickity({
      contain: true,
      pageDots: true,
      wrapAround: true,
      prevNextButtons: false,
      adaptiveHeight: true
    });
    $(".flickity-page-dot").each(function () {
      var text = $(this).text();
      text = text.replace("View slide", "");
      $(this).text(text);
    });
  }
  )
}

