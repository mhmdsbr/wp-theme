"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// let bugloosJS = {
//   projects: [
//     {
//       title: "UrbanSofa",
//       id: "poland_1",
//       country: "Poland",
//       time: 2010,
//       img: "https://www.urbanbarn.com/dw/image/v2/BCKH_PRD/on/demandware.static/-/Sites-masterCatalog_Urban_Barn/default/dwd46ac910/images/original/200738-full.jpg?sw=1490&sh=1060&q=70",
//       active: true,
//       link: "https://www.urbansofa.nl/",
//     },
//     {
//       title: "Skiplanner",
//       id: "netherlands_1",
//       country: "netherlands",
//       time: 2011,
//       img: "https://broganabroad.com/wp-content/uploads/2020/05/Alkmaar-Netherlands.jpg.webp",
//       active: true,
//       link: "https://en.wikipedia.org/wiki/Netherlands",
//     },
//     {
//       title: "Caynac",
//       id: "ghana_1",
//       country: "ghana",
//       time: 2011,
//       img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200109132000-ghana-afrochella.jpg",
//       active: true,
//       link: "https://en.wikipedia.org/wiki/Ghana",
//     },
//     {
//       title: "Cvinspe",
//       id: "mexico_1",
//       country: "mexico",
//       time: 2012,
//       img: "https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg?w=400&h=235&c=crop",
//       active: true,
//       link: "https://en.wikipedia.org/wiki/Mexico",
//     },
//     {
//       title: "Medina",
//       id: "australia_1",
//       country: "australia",
//       time: 2013,
//       img: "https://cdn.britannica.com/20/191120-050-B6C0B7E9/village-Hallstatt-Alps-Austria.jpg?w=690&h=388&c=crop",
//       active: true,
//       link: "https://en.wikipedia.org/wiki/Australia",
//     },
//   ],
//   particleJsonURL: '/particle.json'
// }
var slides,
    container,
    dots,
    oldSlide = 0,
    activeSlide = 0,
    offsets = [],
    ih,
    dotAnim,
    offsetStart = 0,
    currentDevice,
    mouseStart,
    currentMouseMouseDistance = 0,
    mouseMouseDistanceThreshold = 30,
    direction = "NEXT",
    devicesEvents = {
  DESKTOP: {
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseup: "mouseup"
  },
  MOBILE: {
    mousedown: "touchstart",
    mousemove: "touchmove",
    mouseup: "touchend"
  }
},
    ProjectsWorldMap;

if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    movingWaves();
    console.clear();
    configElements();
    createNevDot();
    navDotAnimation();
    homeSlidesDragging();
    newSize();
    accardionContactForm(); //slide nav menu on header

    $(document).ready(function () {
      // btnCircle();
      configDropDowns();
      configSlider();
    });
    loadProjectsWorldMap();
    loadParticles();
  });
  configPopups();
  musicHowler();
}

function movingWaves() {
  // Moving Waves with middle pointer
  var svgR = $(".c-home__bg-waves svg:nth-child(odd)");
  var svgL = $(".c-home__bg-waves svg:nth-child(even)"); // Moving Waves With Parallax

  $(document).on("mousemove", function (e) {
    parallaxIt(e, [svgR], -40);
    parallaxIt(e, [svgL], 40);
  }); // End Moving Waves With Parallax
}

function parallaxIt(e, target, movement) {
  try {
    var $this = $(document);
    var relX = e.pageX - $this.offset().left;
    gsap.to(target, {
      duration: 1,
      x: (relX - $this.width() / 4) / $this.width() * movement
    });
  } catch (error) {}
} // Convert Select to ul


function configDropDowns() {
  var $uFormContainerJs = $("#u-form-container--js");
  $("#c-foot-print__dropdown").select2({
    width: "resolve",
    // need to override the changed default
    dropdownParent: $("#foot-print-nav"),
    minimumResultsForSearch: Infinity
  });
  $("#form-project-discovery").select2({
    width: "null",
    // need to override the changed default
    dropdownParent: $uFormContainerJs,
    minimumResultsForSearch: Infinity
  });
  $("#form-content").select2({
    width: "null",
    // need to override the changed default
    dropdownParent: $uFormContainerJs,
    minimumResultsForSearch: Infinity
  });
} // Companies Slider Config


function configSlider() {
  var rev = $(".c-companies__slider-wrapper");
  rev.on("init", function (event, slick) {
    var cur = $(slick.$slides[slick.currentSlide]);
    var next = cur.next();
    var prev = cur.prev();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    cur.removeClass("slick-snext").removeClass("slick-sprev");
    slick.$prev = prev;
    slick.$next = next;
  }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    console.log("beforeChange");
    var cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass("slick-sprev");
    slick.$next.removeClass("slick-snext");
    var next = cur.next();
    var prev = cur.prev();
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
    swipe: true,
    customPaging: function customPaging() {
      return "";
    }
  });
}

function loadProjectsWorldMap() {
  if (document.readyState !== "loading") {
    ProjectsWorldMap = {
      props: {
        PROJECTS: bugloosJS.projects,
        svgUniqKey: "data-id",
        projectsNodeList: document.getElementsByClassName("data-point"),
        timelineCircleElem: ".c-time-line-box .date .time-line-circle",
        tippyInstances: tippy(".data-point", {
          content: "",
          allowHTML: true,
          animation: "perspective",
          theme: "mapPopover",
          hideOnClick: "click",
          arrow: "",
          trigger: "mouseenter click",
          appendTo: document.getElementsByClassName("c-foot-print__world-map")[0],
          interactive: true,
          onTrigger: function onTrigger(instance, ref) {
            tippy.hideAll();
            var dataPointId = ref.target.attributes[ProjectsWorldMap.props.svgUniqKey].value;
            var selectedProjectDetail = ProjectsWorldMap.methods.findProjectById(dataPointId);
            instance.setContent(ProjectsWorldMap.methods.getCountryPopover(selectedProjectDetail));
          }
        })
      },
      methods: {
        findProjectNodeById: findProjectNodeById,
        toggleProjectsVisibility: toggleProjectsVisibility,
        findProjectById: findProjectById,
        getCountryPopover: getCountryPopover,
        findTippyInstanceById: findTippyInstanceById,
        resetTimeline: resetTimeline,
        generateProjectsDropdownOptions: generateProjectsDropdownOptions,
        uniq: uniq,
        sortProjectsByTime: sortProjectsByTime,
        generateProjectTimeLine: generateProjectTimeLine
      },
      init: function init() {
        ProjectsWorldMap.methods.generateProjectTimeLine();
        ProjectsWorldMap.methods.generateProjectsDropdownOptions();
        ProjectsWorldMap.methods.toggleProjectsVisibility();
      }
    };
    ProjectsWorldMap.init();
  }
}
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


function loadParticles() {
  particlesJS.load("particles-js", bugloosJS.particleJsonURL);
  particlesJS.load("particles-js-1", bugloosJS.particleJsonURL);
  particlesJS.load("particles-js-2", bugloosJS.particleJsonURL);
  particlesJS.load("particles-js-3", bugloosJS.particleJsonURL);
  particlesJS.load("particles-js-4", bugloosJS.particleJsonURL);
  particlesJS.load("particles-js-5", bugloosJS.particleJsonURL);
} // create nev dots and add tooltip listeners


function createNevDot() {
  for (var i = 0; i < slides.length; i++) {
    var newDot = document.createElement("div");
    newDot.className = "dot";
    newDot.index = i;
    newDot.addEventListener("click", slideAnim);
    dots.appendChild(newDot);
    offsets.push(-slides[i].offsetTop);
  }
} // figure out which of the 4 nav controls called the function


function slideAnim(e, isDragging, index) {
  oldSlide = activeSlide;

  if (!isDragging) {
    // dragging the panels
    if (this.id === "dragger") {
      activeSlide = offsets.indexOf(this.endY);
    } else {
      noDraggingNoIdDragger(this.id, this.className, this.index, e);
    }

    checkPastEndOrBeginningSlide();

    if (oldSlide === activeSlide) {
      return;
    } // if we're dragging we don't animate the container


    if (this.id !== "dragger") {
      idIsNotDragger();
    }
  } else {
    fnIsDragging(index);
  }
} // tween the dot animation as the draggable moves


function tweenDot() {
  gsap.set(dotAnim, {
    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
  });
} // resize all panels and refigure draggable snap array


function newSize() {
  offsets = [];
  ih = window.innerHeight;
  gsap.set("#panelWrap", {
    height: slides.length * ih
  });
  gsap.set(slides, {
    height: ih
  });

  var _iterator = _createForOfIteratorHelper(slides),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var slide = _step.value;
      offsets.push(-slide.offsetTop);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  gsap.set(container, {
    y: offsets[activeSlide]
  });
}

function noDraggingNoIdDragger(id, className, index, e) {
  if (gsap.isTweening(container)) {
    return;
  } // up/down arrow clicks


  if (id === "downArrow" || id === "upArrow") {
    if (id === "downArrow") {
      activeSlide += 1;
    } else {
      activeSlide -= 1;
    } // click on a dot

  } else if (className === "dot") {
    activeSlide = index; // scrollwheel
  } else {
    if (e.deltaY > 0) {
      activeSlide += 1;
    } else {
      activeSlide -= 1;
    }
  }
} // make sure we're not past the end or beginning slide


function checkPastEndOrBeginningSlide() {
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
}

function idIsNotDragger() {
  gsap.to(container, {
    y: offsets[activeSlide],
    onUpdate: tweenDot,
    duration: 1,
    ease: "power1.out"
  });
}

function fnIsDragging(index) {
  gsap.to(container, {
    y: offsets[index],
    onUpdate: tweenDot,
    duration: 1,
    ease: "power1.out"
  });
}

function getPageY(e) {
  return currentDevice === "DESKTOP" ? e.pageY : e.touches[0].pageY;
}

function mouseupHandler(ev) {
  if (currentMouseMouseDistance > mouseMouseDistanceThreshold) {
    if (activeSlide < 0) {
      activeSlide = 0;
    } else if (activeSlide > slides.length - 1) {
      activeSlide = slides.length - 1;
    }

    if (direction === "NEXT" && activeSlide <= slides.length - 1) {
      activeSlide += 1;
      slideAnim(ev, true, activeSlide);
    } else if (activeSlide > 0) {
      activeSlide -= 1;
      slideAnim(ev, true, activeSlide);
    }
  }

  window.document.removeEventListener(devicesEvents[currentDevice].mouseup, mouseupHandler);
  currentMouseMouseDistance = 0;
}

function navDotAnimation() {
  // get elements positioned
  gsap.set(".dots", {
    yPercent: -50
  });
  gsap.set(".dot", {
    marginBottom: "25"
  }); // side screen animation with nav dots

  dotAnim = gsap.timeline({
    paused: true
  });
  dotAnim.to(".dot", {
    stagger: {
      each: 1,
      yoyo: true,
      repeat: 1
    },
    scale: 2.1,
    rotation: 0.1,
    backgroundColor: "transparent",
    ease: "none"
  }, 0.5);
  dotAnim.time(1);
  gsap.set(".hideMe", {
    opacity: 1
  });
  window.addEventListener("wheel", slideAnim);
}

function configPopups() {
  $(".btn-booking").on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#booking-popup").fadeIn(500);
  });
  $("#open-success-msg").on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#success-msg").fadeIn(500);
  });
  $("#close-success-msg").on('click', function () {
    $("#success-msg").fadeOut(500);
    $("#booking-popup").fadeOut(500);
  });
} //music - howler.js


function musicHowler() {
  $(function () {
    var sound = new Howl({
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

function accardionContactForm() {
  if (window.screen.width < 1024) {
    showContactForm();
  }

  $(".o-form-container h5").on("click", function () {
    $(".u-form--wrap").addClass("reveal-form").removeClass("hide-form");
    $(this).css("border-radius", "1.5rem 1.5rem 0 0");
    $(".o-contact__wrapper").addClass("hide-form");
    $('.o-contact-module h5').css("border-radius", "1.5rem");
  });
  $(".o-contact-module h5").on("click", function () {
    showContactForm();
  });
}

function showContactForm() {
  $(".o-contact__wrapper").addClass("reveal-form").removeClass("hide-form");
  $('.o-contact-module h5').css("border-radius", "1.5rem 1.5rem 0 0");
  $(".u-form--wrap").addClass("hide-form");
  $('.o-form-container h5').css("border-radius", "1.5rem");
}

function configElements() {
  slides = document.querySelectorAll(".c-page-sections--js");
  container = document.querySelector("#panelWrap");
  dots = document.querySelector(".dots");
  ih = document.innerHeight;
  document.querySelector("#downArrow").addEventListener("click", slideAnim);
}

function homeSlidesDragging() {
  /**
   * home slides dragging
   */
  (function () {
    var homeSlidesDraggingHandler = function homeSlidesDraggingHandler(selectedDevice) {
      $("img").on("dragstart", function (event) {
        event.preventDefault();
      });
      window.document.addEventListener(devicesEvents[selectedDevice].mousedown, function (e) {
        currentMouseMouseDistance = 0;
        currentDevice = selectedDevice;
        window.document.body.style.position = "relative";

        if (window.document.body.style.top === "") {
          offsetStart = 0;
        } else {
          offsetStart = parseInt(window.window.document.body.style.top.slice(0, -2));
        }

        mouseStart = getPageY(e);
        window.document.addEventListener(devicesEvents[selectedDevice].mouseup, function (ev) {
          mouseupHandler(ev);
        });
      });
    };

    var init = function init() {
      var allowedDevicesForDragging = ["DESKTOP", "MOBILE"];
      allowedDevicesForDragging.forEach(function (device) {
        homeSlidesDraggingHandler(device);
      });
    };

    init();
  })();
}

function findProjectNodeById(id) {
  var _iterator2 = _createForOfIteratorHelper(ProjectsWorldMap.props.projectsNodeList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (item.attributes[ProjectsWorldMap.props.svgUniqKey].value === id) {
        return item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function toggleProjectsVisibility() {
  ProjectsWorldMap.props.PROJECTS.forEach(function (project) {
    var selectedNode = ProjectsWorldMap.methods.findProjectNodeById(project.id);
    selectedNode.classList.remove("hide", "show");
    selectedNode.classList.add(project.active ? "show" : "hide");
  });
}

function findProjectById(id) {
  return ProjectsWorldMap.props.PROJECTS.find(function (item) {
    return item.id === id;
  });
}

function getCountryPopover(selectedProject) {
  return '<a href="' + selectedProject.link + '">' + '<img alt="" src="' + selectedProject.img + '"/>' + "<p>" + selectedProject.time + " | " + selectedProject.title + "</p>" + "</a>";
}

function findTippyInstanceById(id) {
  return ProjectsWorldMap.props.tippyInstances.find(function (item) {
    return item.reference.attributes[ProjectsWorldMap.props.svgUniqKey].value === id;
  });
}

function resetTimeline() {
  var timelineCircles = document.querySelectorAll(ProjectsWorldMap.props.timelineCircleElem);
  timelineCircles.forEach(function (item) {
    item.classList.remove("active");
  });
}

function generateProjectsDropdownOptions() {
  var select = document.getElementById("c-foot-print__dropdown");
  ProjectsWorldMap.props.PROJECTS.forEach(function (item) {
    var option = document.createElement("option");
    option.text = item.title;
    option.value = item.id;
    select.appendChild(option);
  });
  $("#c-foot-print__dropdown").on("select2:close", function () {
    tippy.hideAll();
    ProjectsWorldMap.props.PROJECTS.forEach(function (_item) {
      _item.active = true;
    });
    ProjectsWorldMap.methods.resetTimeline();
    ProjectsWorldMap.methods.toggleProjectsVisibility();
    var dataPointId = $("#c-foot-print__dropdown")[0].value;
    var tippyInstance = ProjectsWorldMap.methods.findTippyInstanceById(dataPointId);
    tippyInstance.setProps({
      allowHTML: true,
      animation: "scale",
      arrow: true
    });
    var selectedProjectDetail = ProjectsWorldMap.methods.findProjectById(dataPointId);
    tippyInstance.setContent(ProjectsWorldMap.methods.getCountryPopover(selectedProjectDetail));
    tippyInstance.show();
  });
}

function uniq(list) {
  return list.map(function (item) {
    return item.time;
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function sortProjectsByTime(a, b) {
  if (b.time < a.time) {
    return 1;
  }

  if (b.time > a.time) {
    return -1;
  }

  return 0;
}

function generateProjectTimeLine() {
  ProjectsWorldMap.props.PROJECTS.sort(ProjectsWorldMap.methods.sortProjectsByTime);
  ProjectsWorldMap.methods.uniq(ProjectsWorldMap.props.PROJECTS, "time").forEach(function (item) {
    var div = document.createElement("div");
    div.classList.add("time-line__swiper-slide");

    div.onclick = function () {
      tippy.hideAll();
      var selectedTime = this.attributes["data-time"].value;
      document.querySelectorAll(ProjectsWorldMap.props.timelineCircleElem).forEach(function (_item) {
        if (_item.id.indexOf(selectedTime) === -1) {
          _item.classList.remove("active");
        }
      });
      var timeLineCircleItem = $(".c-time-line-box .date #time-line-" + selectedTime);
      timeLineCircleItem.toggleClass("active");
      var isActive = timeLineCircleItem.hasClass("active");
      ProjectsWorldMap.props.PROJECTS.forEach(function (_item) {
        if (isActive) {
          if (_item.time === parseInt(selectedTime)) {
            _item.active = isActive;
          } else {
            _item.active = false;
          }
        } else {
          _item.active = true;
        }
      });
      ProjectsWorldMap.methods.toggleProjectsVisibility();
    };

    div.setAttribute("data-time", item);
    div.innerHTML = '<div class="timestamp time-line-circle"><span>circle</span></div>\n' + '<div class="date"><span class="time-line-circle" id="time-line-' + item + '" >' + item + "</span></div>\n";
    document.getElementById("projectsTimeline").appendChild(div);
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNsaWRlcyIsImNvbnRhaW5lciIsImRvdHMiLCJvbGRTbGlkZSIsImFjdGl2ZVNsaWRlIiwib2Zmc2V0cyIsImloIiwiZG90QW5pbSIsIm9mZnNldFN0YXJ0IiwiY3VycmVudERldmljZSIsIm1vdXNlU3RhcnQiLCJjdXJyZW50TW91c2VNb3VzZURpc3RhbmNlIiwibW91c2VNb3VzZURpc3RhbmNlVGhyZXNob2xkIiwiZGlyZWN0aW9uIiwiZGV2aWNlc0V2ZW50cyIsIkRFU0tUT1AiLCJtb3VzZWRvd24iLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwiTU9CSUxFIiwiUHJvamVjdHNXb3JsZE1hcCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibW92aW5nV2F2ZXMiLCJjbGVhciIsImNvbmZpZ0VsZW1lbnRzIiwiY3JlYXRlTmV2RG90IiwibmF2RG90QW5pbWF0aW9uIiwiaG9tZVNsaWRlc0RyYWdnaW5nIiwibmV3U2l6ZSIsImFjY2FyZGlvbkNvbnRhY3RGb3JtIiwiJCIsInJlYWR5IiwiY29uZmlnRHJvcERvd25zIiwiY29uZmlnU2xpZGVyIiwibG9hZFByb2plY3RzV29ybGRNYXAiLCJsb2FkUGFydGljbGVzIiwiY29uZmlnUG9wdXBzIiwibXVzaWNIb3dsZXIiLCJzdmdSIiwic3ZnTCIsIm9uIiwiZSIsInBhcmFsbGF4SXQiLCJ0YXJnZXQiLCJtb3ZlbWVudCIsIiR0aGlzIiwicmVsWCIsInBhZ2VYIiwib2Zmc2V0IiwibGVmdCIsImdzYXAiLCJ0byIsImR1cmF0aW9uIiwieCIsIndpZHRoIiwiZXJyb3IiLCIkdUZvcm1Db250YWluZXJKcyIsInNlbGVjdDIiLCJkcm9wZG93blBhcmVudCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJyZXYiLCJldmVudCIsInNsaWNrIiwiY3VyIiwiJHNsaWRlcyIsImN1cnJlbnRTbGlkZSIsIm5leHQiLCJwcmV2IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiRwcmV2IiwiJG5leHQiLCJuZXh0U2xpZGUiLCJzcGVlZCIsImFycm93cyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImNlbnRlck1vZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlIiwiY3VzdG9tUGFnaW5nIiwicHJvcHMiLCJQUk9KRUNUUyIsImJ1Z2xvb3NKUyIsInByb2plY3RzIiwic3ZnVW5pcUtleSIsInByb2plY3RzTm9kZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGltZWxpbmVDaXJjbGVFbGVtIiwidGlwcHlJbnN0YW5jZXMiLCJ0aXBweSIsImNvbnRlbnQiLCJhbGxvd0hUTUwiLCJhbmltYXRpb24iLCJ0aGVtZSIsImhpZGVPbkNsaWNrIiwiYXJyb3ciLCJ0cmlnZ2VyIiwiYXBwZW5kVG8iLCJpbnRlcmFjdGl2ZSIsIm9uVHJpZ2dlciIsImluc3RhbmNlIiwicmVmIiwiaGlkZUFsbCIsImRhdGFQb2ludElkIiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2VsZWN0ZWRQcm9qZWN0RGV0YWlsIiwibWV0aG9kcyIsImZpbmRQcm9qZWN0QnlJZCIsInNldENvbnRlbnQiLCJnZXRDb3VudHJ5UG9wb3ZlciIsImZpbmRQcm9qZWN0Tm9kZUJ5SWQiLCJ0b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHkiLCJmaW5kVGlwcHlJbnN0YW5jZUJ5SWQiLCJyZXNldFRpbWVsaW5lIiwiZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucyIsInVuaXEiLCJzb3J0UHJvamVjdHNCeVRpbWUiLCJnZW5lcmF0ZVByb2plY3RUaW1lTGluZSIsImluaXQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJwYXJ0aWNsZUpzb25VUkwiLCJpIiwibGVuZ3RoIiwibmV3RG90IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImluZGV4Iiwic2xpZGVBbmltIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwib2Zmc2V0VG9wIiwiaXNEcmFnZ2luZyIsImlkIiwiaW5kZXhPZiIsImVuZFkiLCJub0RyYWdnaW5nTm9JZERyYWdnZXIiLCJjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlIiwiaWRJc05vdERyYWdnZXIiLCJmbklzRHJhZ2dpbmciLCJ0d2VlbkRvdCIsInNldCIsInRpbWUiLCJNYXRoIiwiYWJzIiwiZ2V0UHJvcGVydHkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImhlaWdodCIsInNsaWRlIiwieSIsImlzVHdlZW5pbmciLCJkZWx0YVkiLCJvblVwZGF0ZSIsImVhc2UiLCJnZXRQYWdlWSIsInBhZ2VZIiwidG91Y2hlcyIsIm1vdXNldXBIYW5kbGVyIiwiZXYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwieVBlcmNlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0aW1lbGluZSIsInBhdXNlZCIsInN0YWdnZXIiLCJlYWNoIiwieW95byIsInJlcGVhdCIsInNjYWxlIiwicm90YXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJmYWRlSW4iLCJmYWRlT3V0Iiwic291bmQiLCJIb3dsIiwic3JjIiwidm9sdW1lIiwibG9vcCIsInRvZ2dsZUNsYXNzIiwicGxheWluZyIsInBhdXNlIiwicGxheSIsInNjcmVlbiIsInNob3dDb250YWN0Rm9ybSIsImNzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaG9tZVNsaWRlc0RyYWdnaW5nSGFuZGxlciIsInNlbGVjdGVkRGV2aWNlIiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJwYXJzZUludCIsInNsaWNlIiwiYWxsb3dlZERldmljZXNGb3JEcmFnZ2luZyIsImZvckVhY2giLCJkZXZpY2UiLCJpdGVtIiwicHJvamVjdCIsInNlbGVjdGVkTm9kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFjdGl2ZSIsImZpbmQiLCJzZWxlY3RlZFByb2plY3QiLCJsaW5rIiwiaW1nIiwidGl0bGUiLCJyZWZlcmVuY2UiLCJ0aW1lbGluZUNpcmNsZXMiLCJzZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbiIsInRleHQiLCJfaXRlbSIsInRpcHB5SW5zdGFuY2UiLCJzZXRQcm9wcyIsInNob3ciLCJsaXN0IiwibWFwIiwiZmlsdGVyIiwic2VsZiIsImEiLCJiIiwic29ydCIsImRpdiIsIm9uY2xpY2siLCJzZWxlY3RlZFRpbWUiLCJ0aW1lTGluZUNpcmNsZUl0ZW0iLCJpc0FjdGl2ZSIsImhhc0NsYXNzIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgYnVnbG9vc0pTID0ge1xuLy8gICBwcm9qZWN0czogW1xuLy8gICAgIHtcbi8vICAgICAgIHRpdGxlOiBcIlVyYmFuU29mYVwiLFxuLy8gICAgICAgaWQ6IFwicG9sYW5kXzFcIixcbi8vICAgICAgIGNvdW50cnk6IFwiUG9sYW5kXCIsXG4vLyAgICAgICB0aW1lOiAyMDEwLFxuLy8gICAgICAgaW1nOiBcImh0dHBzOi8vd3d3LnVyYmFuYmFybi5jb20vZHcvaW1hZ2UvdjIvQkNLSF9QUkQvb24vZGVtYW5kd2FyZS5zdGF0aWMvLS9TaXRlcy1tYXN0ZXJDYXRhbG9nX1VyYmFuX0Jhcm4vZGVmYXVsdC9kd2Q0NmFjOTEwL2ltYWdlcy9vcmlnaW5hbC8yMDA3MzgtZnVsbC5qcGc/c3c9MTQ5MCZzaD0xMDYwJnE9NzBcIixcbi8vICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cudXJiYW5zb2ZhLm5sL1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiU2tpcGxhbm5lclwiLFxuLy8gICAgICAgaWQ6IFwibmV0aGVybGFuZHNfMVwiLFxuLy8gICAgICAgY291bnRyeTogXCJuZXRoZXJsYW5kc1wiLFxuLy8gICAgICAgdGltZTogMjAxMSxcbi8vICAgICAgIGltZzogXCJodHRwczovL2Jyb2dhbmFicm9hZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvQWxrbWFhci1OZXRoZXJsYW5kcy5qcGcud2VicFwiLFxuLy8gICAgICAgYWN0aXZlOiB0cnVlLFxuLy8gICAgICAgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9OZXRoZXJsYW5kc1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiQ2F5bmFjXCIsXG4vLyAgICAgICBpZDogXCJnaGFuYV8xXCIsXG4vLyAgICAgICBjb3VudHJ5OiBcImdoYW5hXCIsXG4vLyAgICAgICB0aW1lOiAyMDExLFxuLy8gICAgICAgaW1nOiBcImh0dHBzOi8vZHluYWltYWdlLmNkbi5jbm4uY29tL2Nubi9xX2F1dG8sd182MzQsY19maWxsLGdfYXV0byxoXzM1Nyxhcl8xNjo5L2h0dHAlM0ElMkYlMkZjZG4uY25uLmNvbSUyRmNubm5leHQlMkZkYW0lMkZhc3NldHMlMkYyMDAxMDkxMzIwMDAtZ2hhbmEtYWZyb2NoZWxsYS5qcGdcIixcbi8vICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICAgIGxpbms6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2hhbmFcIixcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRpdGxlOiBcIkN2aW5zcGVcIixcbi8vICAgICAgIGlkOiBcIm1leGljb18xXCIsXG4vLyAgICAgICBjb3VudHJ5OiBcIm1leGljb1wiLFxuLy8gICAgICAgdGltZTogMjAxMixcbi8vICAgICAgIGltZzogXCJodHRwczovL2Nkbi5icml0YW5uaWNhLmNvbS83My8yNTczLTA1MC1DODI1Q0U2OC9GbGFnLU1leGljby5qcGc/dz00MDAmaD0yMzUmYz1jcm9wXCIsXG4vLyAgICAgICBhY3RpdmU6IHRydWUsXG4vLyAgICAgICBsaW5rOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01leGljb1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiTWVkaW5hXCIsXG4vLyAgICAgICBpZDogXCJhdXN0cmFsaWFfMVwiLFxuLy8gICAgICAgY291bnRyeTogXCJhdXN0cmFsaWFcIixcbi8vICAgICAgIHRpbWU6IDIwMTMsXG4vLyAgICAgICBpbWc6IFwiaHR0cHM6Ly9jZG4uYnJpdGFubmljYS5jb20vMjAvMTkxMTIwLTA1MC1CNkMwQjdFOS92aWxsYWdlLUhhbGxzdGF0dC1BbHBzLUF1c3RyaWEuanBnP3c9NjkwJmg9Mzg4JmM9Y3JvcFwiLFxuLy8gICAgICAgYWN0aXZlOiB0cnVlLFxuLy8gICAgICAgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BdXN0cmFsaWFcIixcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBwYXJ0aWNsZUpzb25VUkw6ICcvcGFydGljbGUuanNvbidcbi8vIH1cbmxldCBzbGlkZXMsIGNvbnRhaW5lciwgZG90cywgb2xkU2xpZGUgPSAwLCBhY3RpdmVTbGlkZSA9IDAsIG9mZnNldHMgPSBbXSwgaWgsIGRvdEFuaW0sXG4gIG9mZnNldFN0YXJ0ID0gMCwgY3VycmVudERldmljZSwgbW91c2VTdGFydCwgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDAsXG4gIG1vdXNlTW91c2VEaXN0YW5jZVRocmVzaG9sZCA9IDMwLCBkaXJlY3Rpb24gPSBcIk5FWFRcIixcbiAgZGV2aWNlc0V2ZW50cyA9IHtcbiAgICBERVNLVE9QOiB7XG4gICAgICBtb3VzZWRvd246IFwibW91c2Vkb3duXCIsXG4gICAgICBtb3VzZW1vdmU6IFwibW91c2Vtb3ZlXCIsXG4gICAgICBtb3VzZXVwOiBcIm1vdXNldXBcIixcbiAgICB9LFxuICAgIE1PQklMRToge1xuICAgICAgbW91c2Vkb3duOiBcInRvdWNoc3RhcnRcIixcbiAgICAgIG1vdXNlbW92ZTogXCJ0b3VjaG1vdmVcIixcbiAgICAgIG1vdXNldXA6IFwidG91Y2hlbmRcIixcbiAgICB9LFxuICB9LCBQcm9qZWN0c1dvcmxkTWFwO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgY29uc29sZS5sb2coXCJkb2N1bWVudCBpcyBhbHJlYWR5IHJlYWR5LCBqdXN0IGV4ZWN1dGUgY29kZSBoZXJlXCIpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1vdmluZ1dhdmVzKCk7XG4gICAgY29uc29sZS5jbGVhcigpO1xuICAgIGNvbmZpZ0VsZW1lbnRzKClcbiAgICBjcmVhdGVOZXZEb3QoKTtcbiAgICBuYXZEb3RBbmltYXRpb24oKTtcbiAgICBob21lU2xpZGVzRHJhZ2dpbmcoKTtcbiAgICBuZXdTaXplKCk7XG4gICAgYWNjYXJkaW9uQ29udGFjdEZvcm0oKTtcbiAgICAvL3NsaWRlIG5hdiBtZW51IG9uIGhlYWRlclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGJ0bkNpcmNsZSgpO1xuICAgICAgY29uZmlnRHJvcERvd25zKCk7XG4gICAgICBjb25maWdTbGlkZXIoKTtcbiAgICB9KTtcbiAgICBsb2FkUHJvamVjdHNXb3JsZE1hcCgpO1xuICAgIGxvYWRQYXJ0aWNsZXMoKTtcbiAgfSk7XG4gIGNvbmZpZ1BvcHVwcygpO1xuICBtdXNpY0hvd2xlcigpO1xufVxuXG5mdW5jdGlvbiBtb3ZpbmdXYXZlcygpIHtcbiAgLy8gTW92aW5nIFdhdmVzIHdpdGggbWlkZGxlIHBvaW50ZXJcbiAgY29uc3Qgc3ZnUiA9ICQoXCIuYy1ob21lX19iZy13YXZlcyBzdmc6bnRoLWNoaWxkKG9kZClcIik7XG4gIGNvbnN0IHN2Z0wgPSAkKFwiLmMtaG9tZV9fYmctd2F2ZXMgc3ZnOm50aC1jaGlsZChldmVuKVwiKTtcblxuICAvLyBNb3ZpbmcgV2F2ZXMgV2l0aCBQYXJhbGxheFxuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHBhcmFsbGF4SXQoZSwgW3N2Z1JdLCAtNDApO1xuICAgIHBhcmFsbGF4SXQoZSwgW3N2Z0xdLCA0MCk7XG4gIH0pO1xuXG4gIC8vIEVuZCBNb3ZpbmcgV2F2ZXMgV2l0aCBQYXJhbGxheFxufVxuXG5mdW5jdGlvbiBwYXJhbGxheEl0KGUsIHRhcmdldCwgbW92ZW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCAkdGhpcyA9ICQoZG9jdW1lbnQpO1xuICAgIGNvbnN0IHJlbFggPSBlLnBhZ2VYIC0gJHRoaXMub2Zmc2V0KCkubGVmdDtcbiAgICBnc2FwLnRvKHRhcmdldCwge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICB4OiAoKHJlbFggLSAkdGhpcy53aWR0aCgpIC8gNCkgLyAkdGhpcy53aWR0aCgpKSAqIG1vdmVtZW50LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICB9XG59XG5cbi8vIENvbnZlcnQgU2VsZWN0IHRvIHVsXG5mdW5jdGlvbiBjb25maWdEcm9wRG93bnMoKSB7XG4gIGNvbnN0ICR1Rm9ybUNvbnRhaW5lckpzID0gJChcIiN1LWZvcm0tY29udGFpbmVyLS1qc1wiKTtcblxuICAkKFwiI2MtZm9vdC1wcmludF9fZHJvcGRvd25cIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwicmVzb2x2ZVwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJChcIiNmb290LXByaW50LW5hdlwiKSxcbiAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXG4gIH0pO1xuICAkKFwiI2Zvcm0tcHJvamVjdC1kaXNjb3ZlcnlcIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwibnVsbFwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJHVGb3JtQ29udGFpbmVySnMsXG4gICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxuICB9KTtcbiAgJChcIiNmb3JtLWNvbnRlbnRcIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwibnVsbFwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJHVGb3JtQ29udGFpbmVySnMsXG4gICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxuICB9KTtcbn1cblxuLy8gQ29tcGFuaWVzIFNsaWRlciBDb25maWdcbmZ1bmN0aW9uIGNvbmZpZ1NsaWRlcigpIHtcbiAgY29uc3QgcmV2ID0gJChcIi5jLWNvbXBhbmllc19fc2xpZGVyLXdyYXBwZXJcIik7XG4gIHJldlxuICAgIC5vbihcImluaXRcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xuICAgICAgY29uc3QgY3VyID0gJChzbGljay4kc2xpZGVzW3NsaWNrLmN1cnJlbnRTbGlkZV0pO1xuICAgICAgY29uc3QgbmV4dCA9IGN1ci5uZXh0KCk7XG4gICAgICBjb25zdCBwcmV2ID0gY3VyLnByZXYoKTtcbiAgICAgIHByZXYuYWRkQ2xhc3MoXCJzbGljay1zcHJldlwiKTtcbiAgICAgIG5leHQuYWRkQ2xhc3MoXCJzbGljay1zbmV4dFwiKTtcbiAgICAgIGN1ci5yZW1vdmVDbGFzcyhcInNsaWNrLXNuZXh0XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBzbGljay4kcHJldiA9IHByZXY7XG4gICAgICBzbGljay4kbmV4dCA9IG5leHQ7XG4gICAgfSlcbiAgICAub24oXCJiZWZvcmVDaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlQ2hhbmdlXCIpO1xuICAgICAgY29uc3QgY3VyID0gJChzbGljay4kc2xpZGVzW25leHRTbGlkZV0pO1xuICAgICAgY29uc29sZS5sb2coc2xpY2suJHByZXYsIHNsaWNrLiRuZXh0KTtcbiAgICAgIHNsaWNrLiRwcmV2LnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBzbGljay4kbmV4dC5yZW1vdmVDbGFzcyhcInNsaWNrLXNuZXh0XCIpO1xuICAgICAgY29uc3QgbmV4dCA9IGN1ci5uZXh0KCk7XG4gICAgICBjb25zdCBwcmV2ID0gY3VyLnByZXYoKTtcbiAgICAgIHByZXYucHJldigpO1xuICAgICAgcHJldi5uZXh0KCk7XG4gICAgICBwcmV2LmFkZENsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBuZXh0LmFkZENsYXNzKFwic2xpY2stc25leHRcIik7XG4gICAgICBzbGljay4kcHJldiA9IHByZXY7XG4gICAgICBzbGljay4kbmV4dCA9IG5leHQ7XG4gICAgICBjdXIucmVtb3ZlQ2xhc3MoXCJzbGljay1uZXh0XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgfSk7XG5cbiAgcmV2LnNsaWNrKHtcbiAgICBzcGVlZDogNDAwLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgZG90czogdHJ1ZSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgc2xpZGVzUGVyUm93OiAxLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzd2lwZTogdHJ1ZSxcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0sXG4gIH0pO1xuXG59XG5cblxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNXb3JsZE1hcCgpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgUHJvamVjdHNXb3JsZE1hcCA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIFBST0pFQ1RTOiBidWdsb29zSlMucHJvamVjdHMsXG4gICAgICAgIHN2Z1VuaXFLZXk6IFwiZGF0YS1pZFwiLFxuICAgICAgICBwcm9qZWN0c05vZGVMaXN0OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0YS1wb2ludFwiKSxcbiAgICAgICAgdGltZWxpbmVDaXJjbGVFbGVtOiBcIi5jLXRpbWUtbGluZS1ib3ggLmRhdGUgLnRpbWUtbGluZS1jaXJjbGVcIixcbiAgICAgICAgdGlwcHlJbnN0YW5jZXM6IHRpcHB5KFwiLmRhdGEtcG9pbnRcIiwge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgIGFuaW1hdGlvbjogXCJwZXJzcGVjdGl2ZVwiLFxuICAgICAgICAgIHRoZW1lOiBcIm1hcFBvcG92ZXJcIixcbiAgICAgICAgICBoaWRlT25DbGljazogXCJjbGlja1wiLFxuICAgICAgICAgIGFycm93OiBcIlwiLFxuICAgICAgICAgIHRyaWdnZXI6IFwibW91c2VlbnRlciBjbGlja1wiLFxuICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgXCJjLWZvb3QtcHJpbnRfX3dvcmxkLW1hcFwiXG4gICAgICAgICAgKVswXSxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBvblRyaWdnZXIoaW5zdGFuY2UsIHJlZikge1xuICAgICAgICAgICAgdGlwcHkuaGlkZUFsbCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YVBvaW50SWQgPVxuICAgICAgICAgICAgICByZWYudGFyZ2V0LmF0dHJpYnV0ZXNbUHJvamVjdHNXb3JsZE1hcC5wcm9wcy5zdmdVbmlxS2V5XS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdERldGFpbCA9XG4gICAgICAgICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5maW5kUHJvamVjdEJ5SWQoZGF0YVBvaW50SWQpO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudChcbiAgICAgICAgICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmdldENvdW50cnlQb3BvdmVyKFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdERldGFpbFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBmaW5kUHJvamVjdE5vZGVCeUlkLFxuICAgICAgICB0b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHksXG4gICAgICAgIGZpbmRQcm9qZWN0QnlJZCxcbiAgICAgICAgZ2V0Q291bnRyeVBvcG92ZXIsXG4gICAgICAgIGZpbmRUaXBweUluc3RhbmNlQnlJZCxcbiAgICAgICAgcmVzZXRUaW1lbGluZSxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucyxcbiAgICAgICAgdW5pcSxcbiAgICAgICAgc29ydFByb2plY3RzQnlUaW1lLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RUaW1lTGluZSxcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5nZW5lcmF0ZVByb2plY3RUaW1lTGluZSgpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMuZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucygpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMudG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBQcm9qZWN0c1dvcmxkTWFwLmluaXQoKTtcbiAgfVxufVxuXG4vKiBwYXJ0aWNsZXNKUy5sb2FkKEBkb20taWQsIEBwYXRoLWpzb24sIEBjYWxsYmFjayAob3B0aW9uYWwpKTsgKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0aWNsZXMoKSB7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanNcIiwgYnVnbG9vc0pTLnBhcnRpY2xlSnNvblVSTCk7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanMtMVwiLCBidWdsb29zSlMucGFydGljbGVKc29uVVJMKTtcbiAgcGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qcy0yXCIsIGJ1Z2xvb3NKUy5wYXJ0aWNsZUpzb25VUkwpO1xuICBwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzLTNcIiwgYnVnbG9vc0pTLnBhcnRpY2xlSnNvblVSTCk7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanMtNFwiLCBidWdsb29zSlMucGFydGljbGVKc29uVVJMKTtcbiAgcGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qcy01XCIsIGJ1Z2xvb3NKUy5wYXJ0aWNsZUpzb25VUkwpO1xufVxuXG4vLyBjcmVhdGUgbmV2IGRvdHMgYW5kIGFkZCB0b29sdGlwIGxpc3RlbmVyc1xuZnVuY3Rpb24gY3JlYXRlTmV2RG90KCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdEb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0RvdC5jbGFzc05hbWUgPSBcImRvdFwiO1xuICAgIG5ld0RvdC5pbmRleCA9IGk7XG4gICAgbmV3RG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZUFuaW0pO1xuICAgIGRvdHMuYXBwZW5kQ2hpbGQobmV3RG90KTtcbiAgICBvZmZzZXRzLnB1c2goLXNsaWRlc1tpXS5vZmZzZXRUb3ApO1xuICB9XG59XG5cbi8vIGZpZ3VyZSBvdXQgd2hpY2ggb2YgdGhlIDQgbmF2IGNvbnRyb2xzIGNhbGxlZCB0aGUgZnVuY3Rpb25cbmZ1bmN0aW9uIHNsaWRlQW5pbShlLCBpc0RyYWdnaW5nLCBpbmRleCkge1xuICBvbGRTbGlkZSA9IGFjdGl2ZVNsaWRlO1xuICBpZiAoIWlzRHJhZ2dpbmcpIHtcbiAgICAvLyBkcmFnZ2luZyB0aGUgcGFuZWxzXG4gICAgaWYgKHRoaXMuaWQgPT09IFwiZHJhZ2dlclwiKSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IG9mZnNldHMuaW5kZXhPZih0aGlzLmVuZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub0RyYWdnaW5nTm9JZERyYWdnZXIodGhpcy5pZCwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5kZXgsIGUpO1xuICAgIH1cbiAgICBjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlKCk7XG4gICAgaWYgKG9sZFNsaWRlID09PSBhY3RpdmVTbGlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB3ZSdyZSBkcmFnZ2luZyB3ZSBkb24ndCBhbmltYXRlIHRoZSBjb250YWluZXJcbiAgICBpZiAodGhpcy5pZCAhPT0gXCJkcmFnZ2VyXCIpIHtcbiAgICAgIGlkSXNOb3REcmFnZ2VyKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZuSXNEcmFnZ2luZyhpbmRleCk7XG4gIH1cbn1cblxuLy8gdHdlZW4gdGhlIGRvdCBhbmltYXRpb24gYXMgdGhlIGRyYWdnYWJsZSBtb3Zlc1xuZnVuY3Rpb24gdHdlZW5Eb3QoKSB7XG4gIGdzYXAuc2V0KGRvdEFuaW0sIHtcbiAgICB0aW1lOiBNYXRoLmFicyhnc2FwLmdldFByb3BlcnR5KGNvbnRhaW5lciwgXCJ5XCIpIC8gaWgpICsgMSxcbiAgfSk7XG59XG5cbi8vIHJlc2l6ZSBhbGwgcGFuZWxzIGFuZCByZWZpZ3VyZSBkcmFnZ2FibGUgc25hcCBhcnJheVxuZnVuY3Rpb24gbmV3U2l6ZSgpIHtcbiAgb2Zmc2V0cyA9IFtdO1xuICBpaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgZ3NhcC5zZXQoXCIjcGFuZWxXcmFwXCIsIHsgaGVpZ2h0OiBzbGlkZXMubGVuZ3RoICogaWggfSk7XG4gIGdzYXAuc2V0KHNsaWRlcywgeyBoZWlnaHQ6IGloIH0pO1xuICBmb3IgKGxldCBzbGlkZSBvZiBzbGlkZXMpIHtcbiAgICBvZmZzZXRzLnB1c2goLXNsaWRlLm9mZnNldFRvcCk7XG4gIH1cbiAgZ3NhcC5zZXQoY29udGFpbmVyLCB7IHk6IG9mZnNldHNbYWN0aXZlU2xpZGVdIH0pO1xufVxuXG5mdW5jdGlvbiBub0RyYWdnaW5nTm9JZERyYWdnZXIoaWQsIGNsYXNzTmFtZSwgaW5kZXgsIGUpIHtcbiAgaWYgKGdzYXAuaXNUd2VlbmluZyhjb250YWluZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHVwL2Rvd24gYXJyb3cgY2xpY2tzXG4gIGlmIChpZCA9PT0gXCJkb3duQXJyb3dcIiB8fCBpZCA9PT0gXCJ1cEFycm93XCIpIHtcbiAgICBpZiAoaWQgPT09IFwiZG93bkFycm93XCIpIHtcbiAgICAgIGFjdGl2ZVNsaWRlICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgLT0gMVxuICAgIH1cbiAgICAvLyBjbGljayBvbiBhIGRvdFxuICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gXCJkb3RcIikge1xuICAgIGFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgLy8gc2Nyb2xsd2hlZWxcbiAgfSBlbHNlIHtcbiAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICBhY3RpdmVTbGlkZSArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlIC09IDFcbiAgICB9XG4gIH1cbn1cblxuLy8gbWFrZSBzdXJlIHdlJ3JlIG5vdCBwYXN0IHRoZSBlbmQgb3IgYmVnaW5uaW5nIHNsaWRlXG5mdW5jdGlvbiBjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlKCkge1xuICBhY3RpdmVTbGlkZSA9IGFjdGl2ZVNsaWRlIDwgMCA/IDAgOiBhY3RpdmVTbGlkZTtcbiAgYWN0aXZlU2xpZGUgPVxuICAgIGFjdGl2ZVNsaWRlID4gc2xpZGVzLmxlbmd0aCAtIDEgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGFjdGl2ZVNsaWRlO1xufVxuXG5mdW5jdGlvbiBpZElzTm90RHJhZ2dlcigpIHtcbiAgZ3NhcC50byhjb250YWluZXIsIHtcbiAgICB5OiBvZmZzZXRzW2FjdGl2ZVNsaWRlXSxcbiAgICBvblVwZGF0ZTogdHdlZW5Eb3QsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCIsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmbklzRHJhZ2dpbmcoaW5kZXgpIHtcbiAgZ3NhcC50byhjb250YWluZXIsIHtcbiAgICB5OiBvZmZzZXRzW2luZGV4XSxcbiAgICBvblVwZGF0ZTogdHdlZW5Eb3QsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCIsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQYWdlWShlKSB7XG4gIHJldHVybiBjdXJyZW50RGV2aWNlID09PSBcIkRFU0tUT1BcIiA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVk7XG59XG5cbmZ1bmN0aW9uIG1vdXNldXBIYW5kbGVyKGV2KSB7XG4gIGlmIChjdXJyZW50TW91c2VNb3VzZURpc3RhbmNlID4gbW91c2VNb3VzZURpc3RhbmNlVGhyZXNob2xkKSB7XG4gICAgaWYgKGFjdGl2ZVNsaWRlIDwgMCkge1xuICAgICAgYWN0aXZlU2xpZGUgPSAwO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2xpZGUgPiBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZGlyZWN0aW9uID09PSBcIk5FWFRcIiAmJlxuICAgICAgYWN0aXZlU2xpZGUgPD0gc2xpZGVzLmxlbmd0aCAtIDFcbiAgICApIHtcbiAgICAgIGFjdGl2ZVNsaWRlICs9IDE7XG4gICAgICBzbGlkZUFuaW0oZXYsIHRydWUsIGFjdGl2ZVNsaWRlKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNsaWRlID4gMCkge1xuICAgICAgYWN0aXZlU2xpZGUgLT0gMTtcbiAgICAgIHNsaWRlQW5pbShldiwgdHJ1ZSwgYWN0aXZlU2xpZGUpO1xuICAgIH1cbiAgfVxuICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBkZXZpY2VzRXZlbnRzW2N1cnJlbnREZXZpY2VdLm1vdXNldXAsXG4gICAgbW91c2V1cEhhbmRsZXJcbiAgKTtcbiAgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDA7XG5cbn1cblxuZnVuY3Rpb24gbmF2RG90QW5pbWF0aW9uKCkge1xuICAvLyBnZXQgZWxlbWVudHMgcG9zaXRpb25lZFxuICBnc2FwLnNldChcIi5kb3RzXCIsIHsgeVBlcmNlbnQ6IC01MCB9KTtcbiAgZ3NhcC5zZXQoXCIuZG90XCIsIHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSk7XG4gIC8vIHNpZGUgc2NyZWVuIGFuaW1hdGlvbiB3aXRoIG5hdiBkb3RzXG4gIGRvdEFuaW0gPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuICBkb3RBbmltLnRvKFxuICAgIFwiLmRvdFwiLFxuICAgIHtcbiAgICAgIHN0YWdnZXI6IHsgZWFjaDogMSwgeW95bzogdHJ1ZSwgcmVwZWF0OiAxIH0sXG4gICAgICBzY2FsZTogMi4xLFxuICAgICAgcm90YXRpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgfSxcbiAgICAwLjVcbiAgKTtcbiAgZG90QW5pbS50aW1lKDEpO1xuXG5cbiAgZ3NhcC5zZXQoXCIuaGlkZU1lXCIsIHsgb3BhY2l0eTogMSB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBzbGlkZUFuaW0pO1xuXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ1BvcHVwcygpIHtcbiAgJChcIi5idG4tYm9va2luZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoXCIjYm9va2luZy1wb3B1cFwiKS5mYWRlSW4oNTAwKTtcbiAgfSk7XG5cbiAgJChcIiNvcGVuLXN1Y2Nlc3MtbXNnXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJChcIiNzdWNjZXNzLW1zZ1wiKS5mYWRlSW4oNTAwKTtcbiAgfSk7XG5cbiAgJChcIiNjbG9zZS1zdWNjZXNzLW1zZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNzdWNjZXNzLW1zZ1wiKS5mYWRlT3V0KDUwMCk7XG4gICAgJChcIiNib29raW5nLXBvcHVwXCIpLmZhZGVPdXQoNTAwKTtcbiAgfSk7XG59XG5cbi8vbXVzaWMgLSBob3dsZXIuanNcbmZ1bmN0aW9uIG11c2ljSG93bGVyKCkge1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcbiAgICAgIHNyYzogW1wicGlhbm8ubXAzXCJdLFxuICAgICAgdm9sdW1lOiAwLjgsXG4gICAgICBsb29wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkKFwiLmMtaWNvbnNfX3NvdW5kIGRpdlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIuYy1pY29uc19fc291bmQgZGl2IHNwYW5cIikudG9nZ2xlQ2xhc3MoXCJtdXNpYy1hbmltYXRpb25cIik7XG4gICAgICByZXR1cm4gc291bmQucGxheWluZygpID8gc291bmQucGF1c2UoKSA6IHNvdW5kLnBsYXkoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhY2NhcmRpb25Db250YWN0Rm9ybSgpIHtcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDI0KSB7XG4gICAgc2hvd0NvbnRhY3RGb3JtKCk7XG4gIH1cblxuICAkKFwiLm8tZm9ybS1jb250YWluZXIgaDVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi51LWZvcm0tLXdyYXBcIikuYWRkQ2xhc3MoXCJyZXZlYWwtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImhpZGUtZm9ybVwiKTtcbiAgICAkKHRoaXMpLmNzcyhcImJvcmRlci1yYWRpdXNcIiwgXCIxLjVyZW0gMS41cmVtIDAgMFwiKTtcblxuICAgICQoXCIuby1jb250YWN0X193cmFwcGVyXCIpLmFkZENsYXNzKFwiaGlkZS1mb3JtXCIpO1xuICAgICQoJy5vLWNvbnRhY3QtbW9kdWxlIGg1JykuY3NzKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEuNXJlbVwiKTtcbiAgfSk7XG5cbiAgJChcIi5vLWNvbnRhY3QtbW9kdWxlIGg1XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNob3dDb250YWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbnRhY3RGb3JtKCkge1xuICAkKFwiLm8tY29udGFjdF9fd3JhcHBlclwiKS5hZGRDbGFzcyhcInJldmVhbC1mb3JtXCIpLnJlbW92ZUNsYXNzKFwiaGlkZS1mb3JtXCIpO1xuICAkKCcuby1jb250YWN0LW1vZHVsZSBoNScpLmNzcyhcImJvcmRlci1yYWRpdXNcIiwgXCIxLjVyZW0gMS41cmVtIDAgMFwiKTtcblxuICAkKFwiLnUtZm9ybS0td3JhcFwiKS5hZGRDbGFzcyhcImhpZGUtZm9ybVwiKTtcbiAgJCgnLm8tZm9ybS1jb250YWluZXIgaDUnKS5jc3MoXCJib3JkZXItcmFkaXVzXCIsIFwiMS41cmVtXCIpO1xufVxuXG5mdW5jdGlvbiBjb25maWdFbGVtZW50cygpIHtcbiAgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXBhZ2Utc2VjdGlvbnMtLWpzXCIpO1xuICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsV3JhcFwiKTtcbiAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcbiAgaWggPSBkb2N1bWVudC5pbm5lckhlaWdodDtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rvd25BcnJvd1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVBbmltKTtcblxufVxuXG5mdW5jdGlvbiBob21lU2xpZGVzRHJhZ2dpbmcoKSB7XG4gIC8qKlxuICAgKiBob21lIHNsaWRlcyBkcmFnZ2luZ1xuICAgKi9cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaG9tZVNsaWRlc0RyYWdnaW5nSGFuZGxlciA9IGZ1bmN0aW9uIChzZWxlY3RlZERldmljZSkge1xuXG4gICAgICAkKFwiaW1nXCIpLm9uKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBkZXZpY2VzRXZlbnRzW3NlbGVjdGVkRGV2aWNlXS5tb3VzZWRvd24sXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDA7XG4gICAgICAgICAgY3VycmVudERldmljZSA9IHNlbGVjdGVkRGV2aWNlO1xuXG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9PT0gXCJcIikge1xuICAgICAgICAgICAgb2Zmc2V0U3RhcnQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRTdGFydCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICB3aW5kb3cud2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUudG9wLnNsaWNlKDAsIC0yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW91c2VTdGFydCA9IGdldFBhZ2VZKGUpO1xuXG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBkZXZpY2VzRXZlbnRzW3NlbGVjdGVkRGV2aWNlXS5tb3VzZXVwLFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICBtb3VzZXVwSGFuZGxlcihldik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYWxsb3dlZERldmljZXNGb3JEcmFnZ2luZyA9IFtcIkRFU0tUT1BcIiwgXCJNT0JJTEVcIl07XG4gICAgICBhbGxvd2VkRGV2aWNlc0ZvckRyYWdnaW5nLmZvckVhY2goZnVuY3Rpb24gKGRldmljZSkge1xuICAgICAgICBob21lU2xpZGVzRHJhZ2dpbmdIYW5kbGVyKGRldmljZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdE5vZGVCeUlkKGlkKSB7XG4gIGZvciAobGV0IGl0ZW0gb2YgUHJvamVjdHNXb3JsZE1hcC5wcm9wcy5wcm9qZWN0c05vZGVMaXN0KSB7XG4gICAgaWYgKFxuICAgICAgaXRlbS5hdHRyaWJ1dGVzW1Byb2plY3RzV29ybGRNYXAucHJvcHMuc3ZnVW5pcUtleV0udmFsdWUgPT09IGlkXG4gICAgKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCkge1xuICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgc2VsZWN0ZWROb2RlID0gUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmZpbmRQcm9qZWN0Tm9kZUJ5SWQoXG4gICAgICBwcm9qZWN0LmlkXG4gICAgKTtcbiAgICBzZWxlY3RlZE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIiwgXCJzaG93XCIpO1xuICAgIHNlbGVjdGVkTm9kZS5jbGFzc0xpc3QuYWRkKHByb2plY3QuYWN0aXZlID8gXCJzaG93XCIgOiBcImhpZGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmlkID09PSBpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnlQb3BvdmVyKHNlbGVjdGVkUHJvamVjdCkge1xuICByZXR1cm4gKFxuICAgICc8YSBocmVmPVwiJyArXG4gICAgc2VsZWN0ZWRQcm9qZWN0LmxpbmsgK1xuICAgICdcIj4nICtcbiAgICAnPGltZyBhbHQ9XCJcIiBzcmM9XCInICtcbiAgICBzZWxlY3RlZFByb2plY3QuaW1nICtcbiAgICAnXCIvPicgK1xuICAgIFwiPHA+XCIgK1xuICAgIHNlbGVjdGVkUHJvamVjdC50aW1lICtcbiAgICBcIiB8IFwiICtcbiAgICBzZWxlY3RlZFByb2plY3QudGl0bGUgK1xuICAgIFwiPC9wPlwiICtcbiAgICBcIjwvYT5cIlxuICApO1xufVxuXG5mdW5jdGlvbiBmaW5kVGlwcHlJbnN0YW5jZUJ5SWQoaWQpIHtcbiAgcmV0dXJuIFByb2plY3RzV29ybGRNYXAucHJvcHMudGlwcHlJbnN0YW5jZXMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAoXG4gICAgICBpdGVtLnJlZmVyZW5jZS5hdHRyaWJ1dGVzW1Byb2plY3RzV29ybGRNYXAucHJvcHMuc3ZnVW5pcUtleV1cbiAgICAgICAgLnZhbHVlID09PSBpZFxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldFRpbWVsaW5lKCkge1xuICBsZXQgdGltZWxpbmVDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLnRpbWVsaW5lQ2lyY2xlRWxlbVxuICApO1xuICB0aW1lbGluZUNpcmNsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHNEcm9wZG93bk9wdGlvbnMoKSB7XG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImMtZm9vdC1wcmludF9fZHJvcGRvd25cIik7XG4gIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gaXRlbS50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpdGVtLmlkO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgJChcIiNjLWZvb3QtcHJpbnRfX2Ryb3Bkb3duXCIpLm9uKFwic2VsZWN0MjpjbG9zZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGlwcHkuaGlkZUFsbCgpO1xuICAgIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcbiAgICAgIF9pdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfSk7XG4gICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLnJlc2V0VGltZWxpbmUoKTtcbiAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMudG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCk7XG4gICAgbGV0IGRhdGFQb2ludElkID0gJChcIiNjLWZvb3QtcHJpbnRfX2Ryb3Bkb3duXCIpWzBdLnZhbHVlO1xuICAgIGxldCB0aXBweUluc3RhbmNlID1cbiAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5maW5kVGlwcHlJbnN0YW5jZUJ5SWQoZGF0YVBvaW50SWQpO1xuICAgIHRpcHB5SW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiBcInNjYWxlXCIsXG4gICAgICBhcnJvdzogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3REZXRhaWwgPVxuICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmZpbmRQcm9qZWN0QnlJZChkYXRhUG9pbnRJZCk7XG4gICAgdGlwcHlJbnN0YW5jZS5zZXRDb250ZW50KFxuICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmdldENvdW50cnlQb3BvdmVyKFxuICAgICAgICBzZWxlY3RlZFByb2plY3REZXRhaWxcbiAgICAgIClcbiAgICApO1xuICAgIHRpcHB5SW5zdGFuY2Uuc2hvdygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdW5pcShsaXN0KSB7XG4gIHJldHVybiBsaXN0XG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50aW1lKVxuICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzb3J0UHJvamVjdHNCeVRpbWUoYSwgYikge1xuICBpZiAoYi50aW1lIDwgYS50aW1lKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGIudGltZSA+IGEudGltZSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0VGltZUxpbmUoKSB7XG4gIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuc29ydChcbiAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMuc29ydFByb2plY3RzQnlUaW1lXG4gICk7XG5cbiAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzXG4gICAgLnVuaXEoXG4gICAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLFxuICAgICAgXCJ0aW1lXCJcbiAgICApXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWxpbmVfX3N3aXBlci1zbGlkZVwiKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aXBweS5oaWRlQWxsKCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRpbWUgPSB0aGlzLmF0dHJpYnV0ZXNbXCJkYXRhLXRpbWVcIl0udmFsdWU7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoUHJvamVjdHNXb3JsZE1hcC5wcm9wcy50aW1lbGluZUNpcmNsZUVsZW0pXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW0uaWQuaW5kZXhPZihzZWxlY3RlZFRpbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICBfaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgdGltZUxpbmVDaXJjbGVJdGVtID0gJChcbiAgICAgICAgICBcIi5jLXRpbWUtbGluZS1ib3ggLmRhdGUgI3RpbWUtbGluZS1cIiArIHNlbGVjdGVkVGltZVxuICAgICAgICApO1xuICAgICAgICB0aW1lTGluZUNpcmNsZUl0ZW0udG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGltZUxpbmVDaXJjbGVJdGVtLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XG4gICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW0udGltZSA9PT0gcGFyc2VJbnQoc2VsZWN0ZWRUaW1lKSkge1xuICAgICAgICAgICAgICBfaXRlbS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9pdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy50b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHkoKTtcbiAgICAgIH07XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10aW1lXCIsIGl0ZW0pO1xuICAgICAgZGl2LmlubmVySFRNTCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwidGltZXN0YW1wIHRpbWUtbGluZS1jaXJjbGVcIj48c3Bhbj5jaXJjbGU8L3NwYW4+PC9kaXY+XFxuJyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxzcGFuIGNsYXNzPVwidGltZS1saW5lLWNpcmNsZVwiIGlkPVwidGltZS1saW5lLScgK1xuICAgICAgICBpdGVtICtcbiAgICAgICAgJ1wiID4nICtcbiAgICAgICAgaXRlbSArXG4gICAgICAgIFwiPC9zcGFuPjwvZGl2PlxcblwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1RpbWVsaW5lXCIpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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
