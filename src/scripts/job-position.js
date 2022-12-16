if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");

  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load("particles-js-10", bugloosJS.particleJsonURL);
    particlesJS.load("particles-js-9", bugloosJS.particleJsonURL);
    
  });
}
