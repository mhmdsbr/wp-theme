if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load("particles-js-15", bugloosJS.particleJsonURL);
    particlesJS.load("particles-js-29", bugloosJS.particleJsonURL);
    $(".planet").on({
      mouseenter: function (e) {
        $(`#${$(this).parent().parent().attr('id')} .infos`).addClass("show-team");
        e.stopPropagation();
      },
      mouseleave: function (e) {
        $(`#${$(this).parent().parent().attr('id')} .infos`).removeClass("show-team");
        e.stopPropagation();
      },
    });
  });
}

function selectedLanguage() {
  $(".u-lang-swticher>ul>li").on(
    'click',
    function (event) {
      $(".u-lang-swticher>ul>li").removeClass('selected');
      $(this).addClass('selected');
    });
}
