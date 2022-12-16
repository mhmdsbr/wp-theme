document.addEventListener("DOMContentLoaded", function () {

  console.log('header');

  // button module 2 animation
  function buttonAnimation() {
    $(".c-button-module-2 a").hover(
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
  }



  // let circlesHolder = document.querySelector(".circlesHolder")
  // let btn = document.querySelector(".o-btn-circle")
  // function createCircles() {
  //   var text = 'Take Me There!'
  //   for (var i = 0; i < text.length; i++) {
  //     let circle = document.createElement("div")
  //     circle.innerText = text[i]
  //     let circleWrapper = document.createElement("div")
  //     circle.setAttribute("class", "circle")
  //     circlesHolder.append(circleWrapper)
  //     circleWrapper.append(circle)
  //     gsap.set(circleWrapper, { rotation: i * 10 })
  //     gsap.set(circle, { x: 65, rotation: 95 })

  //   }
  // }

  // createCircles()

  // const tl = gsap.timeline({ paused: true })
  // let exitTime = 0

  // tl.from(".circle", {
  //   x: 30, duration: 0.4,
  //   stagger: {
  //     each: 0.05,
  //     ease: "power1"
  //   }
  // })
  // exitTime = tl.duration()
  // tl.addPause()
  // tl.to(".circle", {
  //   x: 60,
  //   scale: 2,
  //   opacity: 0,
  //   duration: 0.3,
  //   stagger: {
  //     each: 0.08,
  //     from: "end"
  //   }
  // })
  // tl.to(".circlesHolder", { rotation: 180, duration: tl.recent().duration(), ease: "power1.in" }, "<")

  // btn.addEventListener("mouseenter", () => {
  //   if (tl.time() < exitTime) {
  //     tl.play()
  //   } else {
  //     tl.restart()
  //   }
  // })

  // btn.addEventListener("mouseleave", () => {
  //   if (tl.time() < exitTime) {
  //     tl.reverse()
  //   } else {
  //     // tl.reverse()
  //     tl.play()
  //   }
  // })

  // buttonAnimation()
});
