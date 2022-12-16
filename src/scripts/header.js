document.addEventListener("DOMContentLoaded", function () {
  console.log('hello');
  function menuShowHide() {
    $(".u-nav__slider-icon").click(function () {
      $(".menu-hide").toggleClass("show");
    });
    $(".menu-hide nav ul li").click(function () {
      $(".menu-hide").removeClass("show");
    });
  }
  function selectedLanguage() {
    $(".u-lang-swticher>ul>li").on("click", function (event) {
      $(".u-lang-swticher>ul>li").removeClass("selected");
      $(this).addClass("selected");
    });
  }

  function switchTheme() {
    $("#theme-switch").on("click", function () {
      if ($(this).is(":checked")) {
        $(".o-logo__link img").attr("src", "images/logo-dark.svg");
      } else {
        $(".o-logo__link img").attr("src", "images/header-logo.svg");
      }
    });
  }
  menuShowHide();
  selectedLanguage();
  switchTheme();
});
