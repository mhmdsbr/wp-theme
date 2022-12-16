
if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");

  myInitCode();
} else {  document.addEventListener("DOMContentLoaded", function () {

    particlesJS.load("particles-js-8", bugloosJS.particleJsonURL);
    particlesJS.load("particles-js-7", bugloosJS.particleJsonURL);
}
)}
