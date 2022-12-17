"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log('header');

  // button module 2 animation
  function buttonAnimation() {
    $(".c-button-module-2 a").hover(function () {
      var btn = this;
      $(this).find(".button-circle").css("animation", "none");
      setTimeout(function () {
        $(btn).find(".button-circle").css("animation", "btn 1s forwards");
      }, 2);
    }, function () {
      var btn = this;
      $(this).find(".button-circle").css("animation", "none");
      $(this).find(".button-circle").addClass("active");
      setTimeout(function () {
        $(btn).find(".button-circle").removeClass("active");
        $(btn).find(".button-circle").css("animation", "btn 1s reverse forwards");
      }, 2);
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLmpzIiwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbkFuaW1hdGlvbiIsIiQiLCJob3ZlciIsImJ0biIsImZpbmQiLCJjc3MiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJzb3VyY2VzIjpbImJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc29sZS5sb2coJ2hlYWRlcicpO1xuXG4gIC8vIGJ1dHRvbiBtb2R1bGUgMiBhbmltYXRpb25cbiAgZnVuY3Rpb24gYnV0dG9uQW5pbWF0aW9uKCkge1xuICAgICQoXCIuYy1idXR0b24tbW9kdWxlLTIgYVwiKS5ob3ZlcihcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYnRuID0gdGhpcztcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmJ1dHRvbi1jaXJjbGVcIikuY3NzKFwiYW5pbWF0aW9uXCIsIFwibm9uZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChidG4pLmZpbmQoXCIuYnV0dG9uLWNpcmNsZVwiKS5jc3MoXCJhbmltYXRpb25cIiwgXCJidG4gMXMgZm9yd2FyZHNcIik7XG4gICAgICAgIH0sIDIpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYnRuID0gdGhpcztcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmJ1dHRvbi1jaXJjbGVcIikuY3NzKFwiYW5pbWF0aW9uXCIsIFwibm9uZVwiKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmJ1dHRvbi1jaXJjbGVcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoYnRuKS5maW5kKFwiLmJ1dHRvbi1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgJChidG4pXG4gICAgICAgICAgICAuZmluZChcIi5idXR0b24tY2lyY2xlXCIpXG4gICAgICAgICAgICAuY3NzKFwiYW5pbWF0aW9uXCIsIFwiYnRuIDFzIHJldmVyc2UgZm9yd2FyZHNcIik7XG4gICAgICAgIH0sIDIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuXG5cbiAgLy8gbGV0IGNpcmNsZXNIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZXNIb2xkZXJcIilcbiAgLy8gbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuby1idG4tY2lyY2xlXCIpXG4gIC8vIGZ1bmN0aW9uIGNyZWF0ZUNpcmNsZXMoKSB7XG4gIC8vICAgdmFyIHRleHQgPSAnVGFrZSBNZSBUaGVyZSEnXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAvLyAgICAgY2lyY2xlLmlubmVyVGV4dCA9IHRleHRbaV1cbiAgLy8gICAgIGxldCBjaXJjbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAvLyAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlXCIpXG4gIC8vICAgICBjaXJjbGVzSG9sZGVyLmFwcGVuZChjaXJjbGVXcmFwcGVyKVxuICAvLyAgICAgY2lyY2xlV3JhcHBlci5hcHBlbmQoY2lyY2xlKVxuICAvLyAgICAgZ3NhcC5zZXQoY2lyY2xlV3JhcHBlciwgeyByb3RhdGlvbjogaSAqIDEwIH0pXG4gIC8vICAgICBnc2FwLnNldChjaXJjbGUsIHsgeDogNjUsIHJvdGF0aW9uOiA5NSB9KVxuXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gY3JlYXRlQ2lyY2xlcygpXG5cbiAgLy8gY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pXG4gIC8vIGxldCBleGl0VGltZSA9IDBcblxuICAvLyB0bC5mcm9tKFwiLmNpcmNsZVwiLCB7XG4gIC8vICAgeDogMzAsIGR1cmF0aW9uOiAwLjQsXG4gIC8vICAgc3RhZ2dlcjoge1xuICAvLyAgICAgZWFjaDogMC4wNSxcbiAgLy8gICAgIGVhc2U6IFwicG93ZXIxXCJcbiAgLy8gICB9XG4gIC8vIH0pXG4gIC8vIGV4aXRUaW1lID0gdGwuZHVyYXRpb24oKVxuICAvLyB0bC5hZGRQYXVzZSgpXG4gIC8vIHRsLnRvKFwiLmNpcmNsZVwiLCB7XG4gIC8vICAgeDogNjAsXG4gIC8vICAgc2NhbGU6IDIsXG4gIC8vICAgb3BhY2l0eTogMCxcbiAgLy8gICBkdXJhdGlvbjogMC4zLFxuICAvLyAgIHN0YWdnZXI6IHtcbiAgLy8gICAgIGVhY2g6IDAuMDgsXG4gIC8vICAgICBmcm9tOiBcImVuZFwiXG4gIC8vICAgfVxuICAvLyB9KVxuICAvLyB0bC50byhcIi5jaXJjbGVzSG9sZGVyXCIsIHsgcm90YXRpb246IDE4MCwgZHVyYXRpb246IHRsLnJlY2VudCgpLmR1cmF0aW9uKCksIGVhc2U6IFwicG93ZXIxLmluXCIgfSwgXCI8XCIpXG5cbiAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgLy8gICBpZiAodGwudGltZSgpIDwgZXhpdFRpbWUpIHtcbiAgLy8gICAgIHRsLnBsYXkoKVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0bC5yZXN0YXJ0KClcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgLy8gICBpZiAodGwudGltZSgpIDwgZXhpdFRpbWUpIHtcbiAgLy8gICAgIHRsLnJldmVyc2UoKVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAvLyB0bC5yZXZlcnNlKClcbiAgLy8gICAgIHRsLnBsYXkoKVxuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyBidXR0b25BbmltYXRpb24oKVxufSk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUV4REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDOztFQUVyQjtFQUNBLFNBQVNDLGVBQWUsR0FBRztJQUN6QkMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLEtBQUssQ0FDN0IsWUFBWTtNQUNWLElBQU1DLEdBQUcsR0FBRyxJQUFJO01BQ2hCRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztNQUN2REMsVUFBVSxDQUFDLFlBQVk7UUFDckJMLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDO01BQ25FLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQ0QsWUFBWTtNQUNWLElBQU1GLEdBQUcsR0FBRyxJQUFJO01BQ2hCRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztNQUN2REosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFFBQVEsQ0FBQztNQUNqREQsVUFBVSxDQUFDLFlBQVk7UUFDckJMLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDSSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25EUCxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUNIQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FDdEJDLEdBQUcsQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUM7TUFDaEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FDRjtFQUNIOztFQUlBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7QUFDRixDQUFDLENBQUMifQ==
