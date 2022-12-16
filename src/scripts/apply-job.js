if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  // button module 2 animation
  $(".c-button-module-2 button").hover(
    function () {
      const btn = this;
      $(this).find(".button-circle").css("animation", "none");
      setTimeout(function () {
        $(btn).find(".button-circle").css("animation", "btn 1s forwards");
      }, 2);
    },
    function () {
      const btn = this;
      $(this).find(".button-circle").css("animation", "none");
      $(this).find(".button-circle").addClass("active");
      setTimeout(function () {
        $(btn).find(".button-circle").removeClass("active");
        $(btn)
          .find(".button-circle")
          .css("animation", "btn 1s reverse forwards");
      }, 2);
    }
  );

  particlesJS.load("particles-js-11", bugloosJS.particleJsonURL);

  $("#open-success-msg").on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#success-msg").fadeIn(500);
  });

  $("#close-success-msg").on('click', function () {
    $("#success-msg").fadeOut(500);
  });
}
