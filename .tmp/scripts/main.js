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
    accardionContactForm();
    //slide nav menu on header
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
  var svgL = $(".c-home__bg-waves svg:nth-child(even)");

  // Moving Waves With Parallax
  $(document).on("mousemove", function (e) {
    parallaxIt(e, [svgR], -40);
    parallaxIt(e, [svgL], 40);
  });

  // End Moving Waves With Parallax
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
}

// Convert Select to ul
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
}

// Companies Slider Config
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
}

// create nev dots and add tooltip listeners
function createNevDot() {
  for (var i = 0; i < slides.length; i++) {
    var newDot = document.createElement("div");
    newDot.className = "dot";
    newDot.index = i;
    newDot.addEventListener("click", slideAnim);
    dots.appendChild(newDot);
    offsets.push(-slides[i].offsetTop);
  }
}

// figure out which of the 4 nav controls called the function
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
    }
    // if we're dragging we don't animate the container
    if (this.id !== "dragger") {
      idIsNotDragger();
    }
  } else {
    fnIsDragging(index);
  }
}

// tween the dot animation as the draggable moves
function tweenDot() {
  gsap.set(dotAnim, {
    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1
  });
}

// resize all panels and refigure draggable snap array
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
  }
  // up/down arrow clicks
  if (id === "downArrow" || id === "upArrow") {
    if (id === "downArrow") {
      activeSlide += 1;
    } else {
      activeSlide -= 1;
    }
    // click on a dot
  } else if (className === "dot") {
    activeSlide = index;
    // scrollwheel
  } else {
    if (e.deltaY > 0) {
      activeSlide += 1;
    } else {
      activeSlide -= 1;
    }
  }
}

// make sure we're not past the end or beginning slide
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
  });
  // side screen animation with nav dots
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
}

//music - howler.js
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInNsaWRlcyIsImNvbnRhaW5lciIsImRvdHMiLCJvbGRTbGlkZSIsImFjdGl2ZVNsaWRlIiwib2Zmc2V0cyIsImloIiwiZG90QW5pbSIsIm9mZnNldFN0YXJ0IiwiY3VycmVudERldmljZSIsIm1vdXNlU3RhcnQiLCJjdXJyZW50TW91c2VNb3VzZURpc3RhbmNlIiwibW91c2VNb3VzZURpc3RhbmNlVGhyZXNob2xkIiwiZGlyZWN0aW9uIiwiZGV2aWNlc0V2ZW50cyIsIkRFU0tUT1AiLCJtb3VzZWRvd24iLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwiTU9CSUxFIiwiUHJvamVjdHNXb3JsZE1hcCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibW92aW5nV2F2ZXMiLCJjbGVhciIsImNvbmZpZ0VsZW1lbnRzIiwiY3JlYXRlTmV2RG90IiwibmF2RG90QW5pbWF0aW9uIiwiaG9tZVNsaWRlc0RyYWdnaW5nIiwibmV3U2l6ZSIsImFjY2FyZGlvbkNvbnRhY3RGb3JtIiwiJCIsInJlYWR5IiwiY29uZmlnRHJvcERvd25zIiwiY29uZmlnU2xpZGVyIiwibG9hZFByb2plY3RzV29ybGRNYXAiLCJsb2FkUGFydGljbGVzIiwiY29uZmlnUG9wdXBzIiwibXVzaWNIb3dsZXIiLCJzdmdSIiwic3ZnTCIsIm9uIiwiZSIsInBhcmFsbGF4SXQiLCJ0YXJnZXQiLCJtb3ZlbWVudCIsIiR0aGlzIiwicmVsWCIsInBhZ2VYIiwib2Zmc2V0IiwibGVmdCIsImdzYXAiLCJ0byIsImR1cmF0aW9uIiwieCIsIndpZHRoIiwiZXJyb3IiLCIkdUZvcm1Db250YWluZXJKcyIsInNlbGVjdDIiLCJkcm9wZG93blBhcmVudCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJyZXYiLCJldmVudCIsInNsaWNrIiwiY3VyIiwiJHNsaWRlcyIsImN1cnJlbnRTbGlkZSIsIm5leHQiLCJwcmV2IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiRwcmV2IiwiJG5leHQiLCJuZXh0U2xpZGUiLCJzcGVlZCIsImFycm93cyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImNlbnRlck1vZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlIiwiY3VzdG9tUGFnaW5nIiwicHJvcHMiLCJQUk9KRUNUUyIsImJ1Z2xvb3NKUyIsInByb2plY3RzIiwic3ZnVW5pcUtleSIsInByb2plY3RzTm9kZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGltZWxpbmVDaXJjbGVFbGVtIiwidGlwcHlJbnN0YW5jZXMiLCJ0aXBweSIsImNvbnRlbnQiLCJhbGxvd0hUTUwiLCJhbmltYXRpb24iLCJ0aGVtZSIsImhpZGVPbkNsaWNrIiwiYXJyb3ciLCJ0cmlnZ2VyIiwiYXBwZW5kVG8iLCJpbnRlcmFjdGl2ZSIsIm9uVHJpZ2dlciIsImluc3RhbmNlIiwicmVmIiwiaGlkZUFsbCIsImRhdGFQb2ludElkIiwiYXR0cmlidXRlcyIsInZhbHVlIiwic2VsZWN0ZWRQcm9qZWN0RGV0YWlsIiwibWV0aG9kcyIsImZpbmRQcm9qZWN0QnlJZCIsInNldENvbnRlbnQiLCJnZXRDb3VudHJ5UG9wb3ZlciIsImZpbmRQcm9qZWN0Tm9kZUJ5SWQiLCJ0b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHkiLCJmaW5kVGlwcHlJbnN0YW5jZUJ5SWQiLCJyZXNldFRpbWVsaW5lIiwiZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucyIsInVuaXEiLCJzb3J0UHJvamVjdHNCeVRpbWUiLCJnZW5lcmF0ZVByb2plY3RUaW1lTGluZSIsImluaXQiLCJwYXJ0aWNsZXNKUyIsImxvYWQiLCJwYXJ0aWNsZUpzb25VUkwiLCJpIiwibGVuZ3RoIiwibmV3RG90IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImluZGV4Iiwic2xpZGVBbmltIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwib2Zmc2V0VG9wIiwiaXNEcmFnZ2luZyIsImlkIiwiaW5kZXhPZiIsImVuZFkiLCJub0RyYWdnaW5nTm9JZERyYWdnZXIiLCJjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlIiwiaWRJc05vdERyYWdnZXIiLCJmbklzRHJhZ2dpbmciLCJ0d2VlbkRvdCIsInNldCIsInRpbWUiLCJNYXRoIiwiYWJzIiwiZ2V0UHJvcGVydHkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImhlaWdodCIsInNsaWRlIiwieSIsImlzVHdlZW5pbmciLCJkZWx0YVkiLCJvblVwZGF0ZSIsImVhc2UiLCJnZXRQYWdlWSIsInBhZ2VZIiwidG91Y2hlcyIsIm1vdXNldXBIYW5kbGVyIiwiZXYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwieVBlcmNlbnQiLCJtYXJnaW5Cb3R0b20iLCJ0aW1lbGluZSIsInBhdXNlZCIsInN0YWdnZXIiLCJlYWNoIiwieW95byIsInJlcGVhdCIsInNjYWxlIiwicm90YXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJmYWRlSW4iLCJmYWRlT3V0Iiwic291bmQiLCJIb3dsIiwic3JjIiwidm9sdW1lIiwibG9vcCIsInRvZ2dsZUNsYXNzIiwicGxheWluZyIsInBhdXNlIiwicGxheSIsInNjcmVlbiIsInNob3dDb250YWN0Rm9ybSIsImNzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiaG9tZVNsaWRlc0RyYWdnaW5nSGFuZGxlciIsInNlbGVjdGVkRGV2aWNlIiwiYm9keSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJwYXJzZUludCIsInNsaWNlIiwiYWxsb3dlZERldmljZXNGb3JEcmFnZ2luZyIsImZvckVhY2giLCJkZXZpY2UiLCJpdGVtIiwicHJvamVjdCIsInNlbGVjdGVkTm9kZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFjdGl2ZSIsImZpbmQiLCJzZWxlY3RlZFByb2plY3QiLCJsaW5rIiwiaW1nIiwidGl0bGUiLCJyZWZlcmVuY2UiLCJ0aW1lbGluZUNpcmNsZXMiLCJzZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbiIsInRleHQiLCJfaXRlbSIsInRpcHB5SW5zdGFuY2UiLCJzZXRQcm9wcyIsInNob3ciLCJsaXN0IiwibWFwIiwiZmlsdGVyIiwic2VsZiIsImEiLCJiIiwic29ydCIsImRpdiIsIm9uY2xpY2siLCJzZWxlY3RlZFRpbWUiLCJ0aW1lTGluZUNpcmNsZUl0ZW0iLCJpc0FjdGl2ZSIsImhhc0NsYXNzIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgYnVnbG9vc0pTID0ge1xuLy8gICBwcm9qZWN0czogW1xuLy8gICAgIHtcbi8vICAgICAgIHRpdGxlOiBcIlVyYmFuU29mYVwiLFxuLy8gICAgICAgaWQ6IFwicG9sYW5kXzFcIixcbi8vICAgICAgIGNvdW50cnk6IFwiUG9sYW5kXCIsXG4vLyAgICAgICB0aW1lOiAyMDEwLFxuLy8gICAgICAgaW1nOiBcImh0dHBzOi8vd3d3LnVyYmFuYmFybi5jb20vZHcvaW1hZ2UvdjIvQkNLSF9QUkQvb24vZGVtYW5kd2FyZS5zdGF0aWMvLS9TaXRlcy1tYXN0ZXJDYXRhbG9nX1VyYmFuX0Jhcm4vZGVmYXVsdC9kd2Q0NmFjOTEwL2ltYWdlcy9vcmlnaW5hbC8yMDA3MzgtZnVsbC5qcGc/c3c9MTQ5MCZzaD0xMDYwJnE9NzBcIixcbi8vICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cudXJiYW5zb2ZhLm5sL1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiU2tpcGxhbm5lclwiLFxuLy8gICAgICAgaWQ6IFwibmV0aGVybGFuZHNfMVwiLFxuLy8gICAgICAgY291bnRyeTogXCJuZXRoZXJsYW5kc1wiLFxuLy8gICAgICAgdGltZTogMjAxMSxcbi8vICAgICAgIGltZzogXCJodHRwczovL2Jyb2dhbmFicm9hZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvQWxrbWFhci1OZXRoZXJsYW5kcy5qcGcud2VicFwiLFxuLy8gICAgICAgYWN0aXZlOiB0cnVlLFxuLy8gICAgICAgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9OZXRoZXJsYW5kc1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiQ2F5bmFjXCIsXG4vLyAgICAgICBpZDogXCJnaGFuYV8xXCIsXG4vLyAgICAgICBjb3VudHJ5OiBcImdoYW5hXCIsXG4vLyAgICAgICB0aW1lOiAyMDExLFxuLy8gICAgICAgaW1nOiBcImh0dHBzOi8vZHluYWltYWdlLmNkbi5jbm4uY29tL2Nubi9xX2F1dG8sd182MzQsY19maWxsLGdfYXV0byxoXzM1Nyxhcl8xNjo5L2h0dHAlM0ElMkYlMkZjZG4uY25uLmNvbSUyRmNubm5leHQlMkZkYW0lMkZhc3NldHMlMkYyMDAxMDkxMzIwMDAtZ2hhbmEtYWZyb2NoZWxsYS5qcGdcIixcbi8vICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICAgIGxpbms6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2hhbmFcIixcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHRpdGxlOiBcIkN2aW5zcGVcIixcbi8vICAgICAgIGlkOiBcIm1leGljb18xXCIsXG4vLyAgICAgICBjb3VudHJ5OiBcIm1leGljb1wiLFxuLy8gICAgICAgdGltZTogMjAxMixcbi8vICAgICAgIGltZzogXCJodHRwczovL2Nkbi5icml0YW5uaWNhLmNvbS83My8yNTczLTA1MC1DODI1Q0U2OC9GbGFnLU1leGljby5qcGc/dz00MDAmaD0yMzUmYz1jcm9wXCIsXG4vLyAgICAgICBhY3RpdmU6IHRydWUsXG4vLyAgICAgICBsaW5rOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01leGljb1wiLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgdGl0bGU6IFwiTWVkaW5hXCIsXG4vLyAgICAgICBpZDogXCJhdXN0cmFsaWFfMVwiLFxuLy8gICAgICAgY291bnRyeTogXCJhdXN0cmFsaWFcIixcbi8vICAgICAgIHRpbWU6IDIwMTMsXG4vLyAgICAgICBpbWc6IFwiaHR0cHM6Ly9jZG4uYnJpdGFubmljYS5jb20vMjAvMTkxMTIwLTA1MC1CNkMwQjdFOS92aWxsYWdlLUhhbGxzdGF0dC1BbHBzLUF1c3RyaWEuanBnP3c9NjkwJmg9Mzg4JmM9Y3JvcFwiLFxuLy8gICAgICAgYWN0aXZlOiB0cnVlLFxuLy8gICAgICAgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BdXN0cmFsaWFcIixcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBwYXJ0aWNsZUpzb25VUkw6ICcvcGFydGljbGUuanNvbidcbi8vIH1cbmxldCBzbGlkZXMsIGNvbnRhaW5lciwgZG90cywgb2xkU2xpZGUgPSAwLCBhY3RpdmVTbGlkZSA9IDAsIG9mZnNldHMgPSBbXSwgaWgsIGRvdEFuaW0sXG4gIG9mZnNldFN0YXJ0ID0gMCwgY3VycmVudERldmljZSwgbW91c2VTdGFydCwgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDAsXG4gIG1vdXNlTW91c2VEaXN0YW5jZVRocmVzaG9sZCA9IDMwLCBkaXJlY3Rpb24gPSBcIk5FWFRcIixcbiAgZGV2aWNlc0V2ZW50cyA9IHtcbiAgICBERVNLVE9QOiB7XG4gICAgICBtb3VzZWRvd246IFwibW91c2Vkb3duXCIsXG4gICAgICBtb3VzZW1vdmU6IFwibW91c2Vtb3ZlXCIsXG4gICAgICBtb3VzZXVwOiBcIm1vdXNldXBcIixcbiAgICB9LFxuICAgIE1PQklMRToge1xuICAgICAgbW91c2Vkb3duOiBcInRvdWNoc3RhcnRcIixcbiAgICAgIG1vdXNlbW92ZTogXCJ0b3VjaG1vdmVcIixcbiAgICAgIG1vdXNldXA6IFwidG91Y2hlbmRcIixcbiAgICB9LFxuICB9LCBQcm9qZWN0c1dvcmxkTWFwO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgY29uc29sZS5sb2coXCJkb2N1bWVudCBpcyBhbHJlYWR5IHJlYWR5LCBqdXN0IGV4ZWN1dGUgY29kZSBoZXJlXCIpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIG1vdmluZ1dhdmVzKCk7XG4gICAgY29uc29sZS5jbGVhcigpO1xuICAgIGNvbmZpZ0VsZW1lbnRzKClcbiAgICBjcmVhdGVOZXZEb3QoKTtcbiAgICBuYXZEb3RBbmltYXRpb24oKTtcbiAgICBob21lU2xpZGVzRHJhZ2dpbmcoKTtcbiAgICBuZXdTaXplKCk7XG4gICAgYWNjYXJkaW9uQ29udGFjdEZvcm0oKTtcbiAgICAvL3NsaWRlIG5hdiBtZW51IG9uIGhlYWRlclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGJ0bkNpcmNsZSgpO1xuICAgICAgY29uZmlnRHJvcERvd25zKCk7XG4gICAgICBjb25maWdTbGlkZXIoKTtcbiAgICB9KTtcbiAgICBsb2FkUHJvamVjdHNXb3JsZE1hcCgpO1xuICAgIGxvYWRQYXJ0aWNsZXMoKTtcbiAgfSk7XG4gIGNvbmZpZ1BvcHVwcygpO1xuICBtdXNpY0hvd2xlcigpO1xufVxuXG5mdW5jdGlvbiBtb3ZpbmdXYXZlcygpIHtcbiAgLy8gTW92aW5nIFdhdmVzIHdpdGggbWlkZGxlIHBvaW50ZXJcbiAgY29uc3Qgc3ZnUiA9ICQoXCIuYy1ob21lX19iZy13YXZlcyBzdmc6bnRoLWNoaWxkKG9kZClcIik7XG4gIGNvbnN0IHN2Z0wgPSAkKFwiLmMtaG9tZV9fYmctd2F2ZXMgc3ZnOm50aC1jaGlsZChldmVuKVwiKTtcblxuICAvLyBNb3ZpbmcgV2F2ZXMgV2l0aCBQYXJhbGxheFxuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHBhcmFsbGF4SXQoZSwgW3N2Z1JdLCAtNDApO1xuICAgIHBhcmFsbGF4SXQoZSwgW3N2Z0xdLCA0MCk7XG4gIH0pO1xuXG4gIC8vIEVuZCBNb3ZpbmcgV2F2ZXMgV2l0aCBQYXJhbGxheFxufVxuXG5mdW5jdGlvbiBwYXJhbGxheEl0KGUsIHRhcmdldCwgbW92ZW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCAkdGhpcyA9ICQoZG9jdW1lbnQpO1xuICAgIGNvbnN0IHJlbFggPSBlLnBhZ2VYIC0gJHRoaXMub2Zmc2V0KCkubGVmdDtcbiAgICBnc2FwLnRvKHRhcmdldCwge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICB4OiAoKHJlbFggLSAkdGhpcy53aWR0aCgpIC8gNCkgLyAkdGhpcy53aWR0aCgpKSAqIG1vdmVtZW50LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICB9XG59XG5cbi8vIENvbnZlcnQgU2VsZWN0IHRvIHVsXG5mdW5jdGlvbiBjb25maWdEcm9wRG93bnMoKSB7XG4gIGNvbnN0ICR1Rm9ybUNvbnRhaW5lckpzID0gJChcIiN1LWZvcm0tY29udGFpbmVyLS1qc1wiKTtcblxuICAkKFwiI2MtZm9vdC1wcmludF9fZHJvcGRvd25cIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwicmVzb2x2ZVwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJChcIiNmb290LXByaW50LW5hdlwiKSxcbiAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXG4gIH0pO1xuICAkKFwiI2Zvcm0tcHJvamVjdC1kaXNjb3ZlcnlcIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwibnVsbFwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJHVGb3JtQ29udGFpbmVySnMsXG4gICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxuICB9KTtcbiAgJChcIiNmb3JtLWNvbnRlbnRcIikuc2VsZWN0Mih7XG4gICAgd2lkdGg6IFwibnVsbFwiLCAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBjaGFuZ2VkIGRlZmF1bHRcbiAgICBkcm9wZG93blBhcmVudDogJHVGb3JtQ29udGFpbmVySnMsXG4gICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxuICB9KTtcbn1cblxuLy8gQ29tcGFuaWVzIFNsaWRlciBDb25maWdcbmZ1bmN0aW9uIGNvbmZpZ1NsaWRlcigpIHtcbiAgY29uc3QgcmV2ID0gJChcIi5jLWNvbXBhbmllc19fc2xpZGVyLXdyYXBwZXJcIik7XG4gIHJldlxuICAgIC5vbihcImluaXRcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xuICAgICAgY29uc3QgY3VyID0gJChzbGljay4kc2xpZGVzW3NsaWNrLmN1cnJlbnRTbGlkZV0pO1xuICAgICAgY29uc3QgbmV4dCA9IGN1ci5uZXh0KCk7XG4gICAgICBjb25zdCBwcmV2ID0gY3VyLnByZXYoKTtcbiAgICAgIHByZXYuYWRkQ2xhc3MoXCJzbGljay1zcHJldlwiKTtcbiAgICAgIG5leHQuYWRkQ2xhc3MoXCJzbGljay1zbmV4dFwiKTtcbiAgICAgIGN1ci5yZW1vdmVDbGFzcyhcInNsaWNrLXNuZXh0XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBzbGljay4kcHJldiA9IHByZXY7XG4gICAgICBzbGljay4kbmV4dCA9IG5leHQ7XG4gICAgfSlcbiAgICAub24oXCJiZWZvcmVDaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlQ2hhbmdlXCIpO1xuICAgICAgY29uc3QgY3VyID0gJChzbGljay4kc2xpZGVzW25leHRTbGlkZV0pO1xuICAgICAgY29uc29sZS5sb2coc2xpY2suJHByZXYsIHNsaWNrLiRuZXh0KTtcbiAgICAgIHNsaWNrLiRwcmV2LnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBzbGljay4kbmV4dC5yZW1vdmVDbGFzcyhcInNsaWNrLXNuZXh0XCIpO1xuICAgICAgY29uc3QgbmV4dCA9IGN1ci5uZXh0KCk7XG4gICAgICBjb25zdCBwcmV2ID0gY3VyLnByZXYoKTtcbiAgICAgIHByZXYucHJldigpO1xuICAgICAgcHJldi5uZXh0KCk7XG4gICAgICBwcmV2LmFkZENsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgICBuZXh0LmFkZENsYXNzKFwic2xpY2stc25leHRcIik7XG4gICAgICBzbGljay4kcHJldiA9IHByZXY7XG4gICAgICBzbGljay4kbmV4dCA9IG5leHQ7XG4gICAgICBjdXIucmVtb3ZlQ2xhc3MoXCJzbGljay1uZXh0XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stc3ByZXZcIik7XG4gICAgfSk7XG5cbiAgcmV2LnNsaWNrKHtcbiAgICBzcGVlZDogNDAwLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgZG90czogdHJ1ZSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgc2xpZGVzUGVyUm93OiAxLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBzd2lwZTogdHJ1ZSxcbiAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0sXG4gIH0pO1xuXG59XG5cblxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNXb3JsZE1hcCgpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgUHJvamVjdHNXb3JsZE1hcCA9IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIFBST0pFQ1RTOiBidWdsb29zSlMucHJvamVjdHMsXG4gICAgICAgIHN2Z1VuaXFLZXk6IFwiZGF0YS1pZFwiLFxuICAgICAgICBwcm9qZWN0c05vZGVMaXN0OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGF0YS1wb2ludFwiKSxcbiAgICAgICAgdGltZWxpbmVDaXJjbGVFbGVtOiBcIi5jLXRpbWUtbGluZS1ib3ggLmRhdGUgLnRpbWUtbGluZS1jaXJjbGVcIixcbiAgICAgICAgdGlwcHlJbnN0YW5jZXM6IHRpcHB5KFwiLmRhdGEtcG9pbnRcIiwge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgIGFuaW1hdGlvbjogXCJwZXJzcGVjdGl2ZVwiLFxuICAgICAgICAgIHRoZW1lOiBcIm1hcFBvcG92ZXJcIixcbiAgICAgICAgICBoaWRlT25DbGljazogXCJjbGlja1wiLFxuICAgICAgICAgIGFycm93OiBcIlwiLFxuICAgICAgICAgIHRyaWdnZXI6IFwibW91c2VlbnRlciBjbGlja1wiLFxuICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgXCJjLWZvb3QtcHJpbnRfX3dvcmxkLW1hcFwiXG4gICAgICAgICAgKVswXSxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBvblRyaWdnZXIoaW5zdGFuY2UsIHJlZikge1xuICAgICAgICAgICAgdGlwcHkuaGlkZUFsbCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YVBvaW50SWQgPVxuICAgICAgICAgICAgICByZWYudGFyZ2V0LmF0dHJpYnV0ZXNbUHJvamVjdHNXb3JsZE1hcC5wcm9wcy5zdmdVbmlxS2V5XS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdERldGFpbCA9XG4gICAgICAgICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5maW5kUHJvamVjdEJ5SWQoZGF0YVBvaW50SWQpO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudChcbiAgICAgICAgICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmdldENvdW50cnlQb3BvdmVyKFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdERldGFpbFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBmaW5kUHJvamVjdE5vZGVCeUlkLFxuICAgICAgICB0b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHksXG4gICAgICAgIGZpbmRQcm9qZWN0QnlJZCxcbiAgICAgICAgZ2V0Q291bnRyeVBvcG92ZXIsXG4gICAgICAgIGZpbmRUaXBweUluc3RhbmNlQnlJZCxcbiAgICAgICAgcmVzZXRUaW1lbGluZSxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucyxcbiAgICAgICAgdW5pcSxcbiAgICAgICAgc29ydFByb2plY3RzQnlUaW1lLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RUaW1lTGluZSxcbiAgICAgIH0sXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5nZW5lcmF0ZVByb2plY3RUaW1lTGluZSgpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMuZ2VuZXJhdGVQcm9qZWN0c0Ryb3Bkb3duT3B0aW9ucygpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMudG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBQcm9qZWN0c1dvcmxkTWFwLmluaXQoKTtcbiAgfVxufVxuXG4vKiBwYXJ0aWNsZXNKUy5sb2FkKEBkb20taWQsIEBwYXRoLWpzb24sIEBjYWxsYmFjayAob3B0aW9uYWwpKTsgKi9cbmZ1bmN0aW9uIGxvYWRQYXJ0aWNsZXMoKSB7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanNcIiwgYnVnbG9vc0pTLnBhcnRpY2xlSnNvblVSTCk7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanMtMVwiLCBidWdsb29zSlMucGFydGljbGVKc29uVVJMKTtcbiAgcGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qcy0yXCIsIGJ1Z2xvb3NKUy5wYXJ0aWNsZUpzb25VUkwpO1xuICBwYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzLTNcIiwgYnVnbG9vc0pTLnBhcnRpY2xlSnNvblVSTCk7XG4gIHBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanMtNFwiLCBidWdsb29zSlMucGFydGljbGVKc29uVVJMKTtcbiAgcGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qcy01XCIsIGJ1Z2xvb3NKUy5wYXJ0aWNsZUpzb25VUkwpO1xufVxuXG4vLyBjcmVhdGUgbmV2IGRvdHMgYW5kIGFkZCB0b29sdGlwIGxpc3RlbmVyc1xuZnVuY3Rpb24gY3JlYXRlTmV2RG90KCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBuZXdEb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0RvdC5jbGFzc05hbWUgPSBcImRvdFwiO1xuICAgIG5ld0RvdC5pbmRleCA9IGk7XG4gICAgbmV3RG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZUFuaW0pO1xuICAgIGRvdHMuYXBwZW5kQ2hpbGQobmV3RG90KTtcbiAgICBvZmZzZXRzLnB1c2goLXNsaWRlc1tpXS5vZmZzZXRUb3ApO1xuICB9XG59XG5cbi8vIGZpZ3VyZSBvdXQgd2hpY2ggb2YgdGhlIDQgbmF2IGNvbnRyb2xzIGNhbGxlZCB0aGUgZnVuY3Rpb25cbmZ1bmN0aW9uIHNsaWRlQW5pbShlLCBpc0RyYWdnaW5nLCBpbmRleCkge1xuICBvbGRTbGlkZSA9IGFjdGl2ZVNsaWRlO1xuICBpZiAoIWlzRHJhZ2dpbmcpIHtcbiAgICAvLyBkcmFnZ2luZyB0aGUgcGFuZWxzXG4gICAgaWYgKHRoaXMuaWQgPT09IFwiZHJhZ2dlclwiKSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IG9mZnNldHMuaW5kZXhPZih0aGlzLmVuZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub0RyYWdnaW5nTm9JZERyYWdnZXIodGhpcy5pZCwgdGhpcy5jbGFzc05hbWUsIHRoaXMuaW5kZXgsIGUpO1xuICAgIH1cbiAgICBjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlKCk7XG4gICAgaWYgKG9sZFNsaWRlID09PSBhY3RpdmVTbGlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB3ZSdyZSBkcmFnZ2luZyB3ZSBkb24ndCBhbmltYXRlIHRoZSBjb250YWluZXJcbiAgICBpZiAodGhpcy5pZCAhPT0gXCJkcmFnZ2VyXCIpIHtcbiAgICAgIGlkSXNOb3REcmFnZ2VyKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZuSXNEcmFnZ2luZyhpbmRleCk7XG4gIH1cbn1cblxuLy8gdHdlZW4gdGhlIGRvdCBhbmltYXRpb24gYXMgdGhlIGRyYWdnYWJsZSBtb3Zlc1xuZnVuY3Rpb24gdHdlZW5Eb3QoKSB7XG4gIGdzYXAuc2V0KGRvdEFuaW0sIHtcbiAgICB0aW1lOiBNYXRoLmFicyhnc2FwLmdldFByb3BlcnR5KGNvbnRhaW5lciwgXCJ5XCIpIC8gaWgpICsgMSxcbiAgfSk7XG59XG5cbi8vIHJlc2l6ZSBhbGwgcGFuZWxzIGFuZCByZWZpZ3VyZSBkcmFnZ2FibGUgc25hcCBhcnJheVxuZnVuY3Rpb24gbmV3U2l6ZSgpIHtcbiAgb2Zmc2V0cyA9IFtdO1xuICBpaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgZ3NhcC5zZXQoXCIjcGFuZWxXcmFwXCIsIHsgaGVpZ2h0OiBzbGlkZXMubGVuZ3RoICogaWggfSk7XG4gIGdzYXAuc2V0KHNsaWRlcywgeyBoZWlnaHQ6IGloIH0pO1xuICBmb3IgKGxldCBzbGlkZSBvZiBzbGlkZXMpIHtcbiAgICBvZmZzZXRzLnB1c2goLXNsaWRlLm9mZnNldFRvcCk7XG4gIH1cbiAgZ3NhcC5zZXQoY29udGFpbmVyLCB7IHk6IG9mZnNldHNbYWN0aXZlU2xpZGVdIH0pO1xufVxuXG5mdW5jdGlvbiBub0RyYWdnaW5nTm9JZERyYWdnZXIoaWQsIGNsYXNzTmFtZSwgaW5kZXgsIGUpIHtcbiAgaWYgKGdzYXAuaXNUd2VlbmluZyhjb250YWluZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHVwL2Rvd24gYXJyb3cgY2xpY2tzXG4gIGlmIChpZCA9PT0gXCJkb3duQXJyb3dcIiB8fCBpZCA9PT0gXCJ1cEFycm93XCIpIHtcbiAgICBpZiAoaWQgPT09IFwiZG93bkFycm93XCIpIHtcbiAgICAgIGFjdGl2ZVNsaWRlICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgLT0gMVxuICAgIH1cbiAgICAvLyBjbGljayBvbiBhIGRvdFxuICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gXCJkb3RcIikge1xuICAgIGFjdGl2ZVNsaWRlID0gaW5kZXg7XG4gICAgLy8gc2Nyb2xsd2hlZWxcbiAgfSBlbHNlIHtcbiAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICBhY3RpdmVTbGlkZSArPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlIC09IDFcbiAgICB9XG4gIH1cbn1cblxuLy8gbWFrZSBzdXJlIHdlJ3JlIG5vdCBwYXN0IHRoZSBlbmQgb3IgYmVnaW5uaW5nIHNsaWRlXG5mdW5jdGlvbiBjaGVja1Bhc3RFbmRPckJlZ2lubmluZ1NsaWRlKCkge1xuICBhY3RpdmVTbGlkZSA9IGFjdGl2ZVNsaWRlIDwgMCA/IDAgOiBhY3RpdmVTbGlkZTtcbiAgYWN0aXZlU2xpZGUgPVxuICAgIGFjdGl2ZVNsaWRlID4gc2xpZGVzLmxlbmd0aCAtIDEgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGFjdGl2ZVNsaWRlO1xufVxuXG5mdW5jdGlvbiBpZElzTm90RHJhZ2dlcigpIHtcbiAgZ3NhcC50byhjb250YWluZXIsIHtcbiAgICB5OiBvZmZzZXRzW2FjdGl2ZVNsaWRlXSxcbiAgICBvblVwZGF0ZTogdHdlZW5Eb3QsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCIsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmbklzRHJhZ2dpbmcoaW5kZXgpIHtcbiAgZ3NhcC50byhjb250YWluZXIsIHtcbiAgICB5OiBvZmZzZXRzW2luZGV4XSxcbiAgICBvblVwZGF0ZTogdHdlZW5Eb3QsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCIsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQYWdlWShlKSB7XG4gIHJldHVybiBjdXJyZW50RGV2aWNlID09PSBcIkRFU0tUT1BcIiA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVk7XG59XG5cbmZ1bmN0aW9uIG1vdXNldXBIYW5kbGVyKGV2KSB7XG4gIGlmIChjdXJyZW50TW91c2VNb3VzZURpc3RhbmNlID4gbW91c2VNb3VzZURpc3RhbmNlVGhyZXNob2xkKSB7XG4gICAgaWYgKGFjdGl2ZVNsaWRlIDwgMCkge1xuICAgICAgYWN0aXZlU2xpZGUgPSAwO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlU2xpZGUgPiBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZGlyZWN0aW9uID09PSBcIk5FWFRcIiAmJlxuICAgICAgYWN0aXZlU2xpZGUgPD0gc2xpZGVzLmxlbmd0aCAtIDFcbiAgICApIHtcbiAgICAgIGFjdGl2ZVNsaWRlICs9IDE7XG4gICAgICBzbGlkZUFuaW0oZXYsIHRydWUsIGFjdGl2ZVNsaWRlKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVNsaWRlID4gMCkge1xuICAgICAgYWN0aXZlU2xpZGUgLT0gMTtcbiAgICAgIHNsaWRlQW5pbShldiwgdHJ1ZSwgYWN0aXZlU2xpZGUpO1xuICAgIH1cbiAgfVxuICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBkZXZpY2VzRXZlbnRzW2N1cnJlbnREZXZpY2VdLm1vdXNldXAsXG4gICAgbW91c2V1cEhhbmRsZXJcbiAgKTtcbiAgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDA7XG5cbn1cblxuZnVuY3Rpb24gbmF2RG90QW5pbWF0aW9uKCkge1xuICAvLyBnZXQgZWxlbWVudHMgcG9zaXRpb25lZFxuICBnc2FwLnNldChcIi5kb3RzXCIsIHsgeVBlcmNlbnQ6IC01MCB9KTtcbiAgZ3NhcC5zZXQoXCIuZG90XCIsIHsgbWFyZ2luQm90dG9tOiBcIjI1XCIgfSk7XG4gIC8vIHNpZGUgc2NyZWVuIGFuaW1hdGlvbiB3aXRoIG5hdiBkb3RzXG4gIGRvdEFuaW0gPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuICBkb3RBbmltLnRvKFxuICAgIFwiLmRvdFwiLFxuICAgIHtcbiAgICAgIHN0YWdnZXI6IHsgZWFjaDogMSwgeW95bzogdHJ1ZSwgcmVwZWF0OiAxIH0sXG4gICAgICBzY2FsZTogMi4xLFxuICAgICAgcm90YXRpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgfSxcbiAgICAwLjVcbiAgKTtcbiAgZG90QW5pbS50aW1lKDEpO1xuXG5cbiAgZ3NhcC5zZXQoXCIuaGlkZU1lXCIsIHsgb3BhY2l0eTogMSB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBzbGlkZUFuaW0pO1xuXG59XG5cbmZ1bmN0aW9uIGNvbmZpZ1BvcHVwcygpIHtcbiAgJChcIi5idG4tYm9va2luZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoXCIjYm9va2luZy1wb3B1cFwiKS5mYWRlSW4oNTAwKTtcbiAgfSk7XG5cbiAgJChcIiNvcGVuLXN1Y2Nlc3MtbXNnXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJChcIiNzdWNjZXNzLW1zZ1wiKS5mYWRlSW4oNTAwKTtcbiAgfSk7XG5cbiAgJChcIiNjbG9zZS1zdWNjZXNzLW1zZ1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNzdWNjZXNzLW1zZ1wiKS5mYWRlT3V0KDUwMCk7XG4gICAgJChcIiNib29raW5nLXBvcHVwXCIpLmZhZGVPdXQoNTAwKTtcbiAgfSk7XG59XG5cbi8vbXVzaWMgLSBob3dsZXIuanNcbmZ1bmN0aW9uIG11c2ljSG93bGVyKCkge1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcbiAgICAgIHNyYzogW1wicGlhbm8ubXAzXCJdLFxuICAgICAgdm9sdW1lOiAwLjgsXG4gICAgICBsb29wOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkKFwiLmMtaWNvbnNfX3NvdW5kIGRpdlwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIuYy1pY29uc19fc291bmQgZGl2IHNwYW5cIikudG9nZ2xlQ2xhc3MoXCJtdXNpYy1hbmltYXRpb25cIik7XG4gICAgICByZXR1cm4gc291bmQucGxheWluZygpID8gc291bmQucGF1c2UoKSA6IHNvdW5kLnBsYXkoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhY2NhcmRpb25Db250YWN0Rm9ybSgpIHtcbiAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDI0KSB7XG4gICAgc2hvd0NvbnRhY3RGb3JtKCk7XG4gIH1cblxuICAkKFwiLm8tZm9ybS1jb250YWluZXIgaDVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi51LWZvcm0tLXdyYXBcIikuYWRkQ2xhc3MoXCJyZXZlYWwtZm9ybVwiKS5yZW1vdmVDbGFzcyhcImhpZGUtZm9ybVwiKTtcbiAgICAkKHRoaXMpLmNzcyhcImJvcmRlci1yYWRpdXNcIiwgXCIxLjVyZW0gMS41cmVtIDAgMFwiKTtcblxuICAgICQoXCIuby1jb250YWN0X193cmFwcGVyXCIpLmFkZENsYXNzKFwiaGlkZS1mb3JtXCIpO1xuICAgICQoJy5vLWNvbnRhY3QtbW9kdWxlIGg1JykuY3NzKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEuNXJlbVwiKTtcbiAgfSk7XG5cbiAgJChcIi5vLWNvbnRhY3QtbW9kdWxlIGg1XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNob3dDb250YWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbnRhY3RGb3JtKCkge1xuICAkKFwiLm8tY29udGFjdF9fd3JhcHBlclwiKS5hZGRDbGFzcyhcInJldmVhbC1mb3JtXCIpLnJlbW92ZUNsYXNzKFwiaGlkZS1mb3JtXCIpO1xuICAkKCcuby1jb250YWN0LW1vZHVsZSBoNScpLmNzcyhcImJvcmRlci1yYWRpdXNcIiwgXCIxLjVyZW0gMS41cmVtIDAgMFwiKTtcblxuICAkKFwiLnUtZm9ybS0td3JhcFwiKS5hZGRDbGFzcyhcImhpZGUtZm9ybVwiKTtcbiAgJCgnLm8tZm9ybS1jb250YWluZXIgaDUnKS5jc3MoXCJib3JkZXItcmFkaXVzXCIsIFwiMS41cmVtXCIpO1xufVxuXG5mdW5jdGlvbiBjb25maWdFbGVtZW50cygpIHtcbiAgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jLXBhZ2Utc2VjdGlvbnMtLWpzXCIpO1xuICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhbmVsV3JhcFwiKTtcbiAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcbiAgaWggPSBkb2N1bWVudC5pbm5lckhlaWdodDtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rvd25BcnJvd1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVBbmltKTtcblxufVxuXG5mdW5jdGlvbiBob21lU2xpZGVzRHJhZ2dpbmcoKSB7XG4gIC8qKlxuICAgKiBob21lIHNsaWRlcyBkcmFnZ2luZ1xuICAgKi9cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaG9tZVNsaWRlc0RyYWdnaW5nSGFuZGxlciA9IGZ1bmN0aW9uIChzZWxlY3RlZERldmljZSkge1xuXG4gICAgICAkKFwiaW1nXCIpLm9uKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBkZXZpY2VzRXZlbnRzW3NlbGVjdGVkRGV2aWNlXS5tb3VzZWRvd24sXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY3VycmVudE1vdXNlTW91c2VEaXN0YW5jZSA9IDA7XG4gICAgICAgICAgY3VycmVudERldmljZSA9IHNlbGVjdGVkRGV2aWNlO1xuXG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgaWYgKHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9PT0gXCJcIikge1xuICAgICAgICAgICAgb2Zmc2V0U3RhcnQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRTdGFydCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICB3aW5kb3cud2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUudG9wLnNsaWNlKDAsIC0yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW91c2VTdGFydCA9IGdldFBhZ2VZKGUpO1xuXG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBkZXZpY2VzRXZlbnRzW3NlbGVjdGVkRGV2aWNlXS5tb3VzZXVwLFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICBtb3VzZXVwSGFuZGxlcihldik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgbGV0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYWxsb3dlZERldmljZXNGb3JEcmFnZ2luZyA9IFtcIkRFU0tUT1BcIiwgXCJNT0JJTEVcIl07XG4gICAgICBhbGxvd2VkRGV2aWNlc0ZvckRyYWdnaW5nLmZvckVhY2goZnVuY3Rpb24gKGRldmljZSkge1xuICAgICAgICBob21lU2xpZGVzRHJhZ2dpbmdIYW5kbGVyKGRldmljZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5pdCgpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdE5vZGVCeUlkKGlkKSB7XG4gIGZvciAobGV0IGl0ZW0gb2YgUHJvamVjdHNXb3JsZE1hcC5wcm9wcy5wcm9qZWN0c05vZGVMaXN0KSB7XG4gICAgaWYgKFxuICAgICAgaXRlbS5hdHRyaWJ1dGVzW1Byb2plY3RzV29ybGRNYXAucHJvcHMuc3ZnVW5pcUtleV0udmFsdWUgPT09IGlkXG4gICAgKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCkge1xuICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgc2VsZWN0ZWROb2RlID0gUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmZpbmRQcm9qZWN0Tm9kZUJ5SWQoXG4gICAgICBwcm9qZWN0LmlkXG4gICAgKTtcbiAgICBzZWxlY3RlZE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIiwgXCJzaG93XCIpO1xuICAgIHNlbGVjdGVkTm9kZS5jbGFzc0xpc3QuYWRkKHByb2plY3QuYWN0aXZlID8gXCJzaG93XCIgOiBcImhpZGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmlkID09PSBpZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnlQb3BvdmVyKHNlbGVjdGVkUHJvamVjdCkge1xuICByZXR1cm4gKFxuICAgICc8YSBocmVmPVwiJyArXG4gICAgc2VsZWN0ZWRQcm9qZWN0LmxpbmsgK1xuICAgICdcIj4nICtcbiAgICAnPGltZyBhbHQ9XCJcIiBzcmM9XCInICtcbiAgICBzZWxlY3RlZFByb2plY3QuaW1nICtcbiAgICAnXCIvPicgK1xuICAgIFwiPHA+XCIgK1xuICAgIHNlbGVjdGVkUHJvamVjdC50aW1lICtcbiAgICBcIiB8IFwiICtcbiAgICBzZWxlY3RlZFByb2plY3QudGl0bGUgK1xuICAgIFwiPC9wPlwiICtcbiAgICBcIjwvYT5cIlxuICApO1xufVxuXG5mdW5jdGlvbiBmaW5kVGlwcHlJbnN0YW5jZUJ5SWQoaWQpIHtcbiAgcmV0dXJuIFByb2plY3RzV29ybGRNYXAucHJvcHMudGlwcHlJbnN0YW5jZXMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAoXG4gICAgICBpdGVtLnJlZmVyZW5jZS5hdHRyaWJ1dGVzW1Byb2plY3RzV29ybGRNYXAucHJvcHMuc3ZnVW5pcUtleV1cbiAgICAgICAgLnZhbHVlID09PSBpZFxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldFRpbWVsaW5lKCkge1xuICBsZXQgdGltZWxpbmVDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLnRpbWVsaW5lQ2lyY2xlRWxlbVxuICApO1xuICB0aW1lbGluZUNpcmNsZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHNEcm9wZG93bk9wdGlvbnMoKSB7XG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImMtZm9vdC1wcmludF9fZHJvcGRvd25cIik7XG4gIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gaXRlbS50aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSBpdGVtLmlkO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgJChcIiNjLWZvb3QtcHJpbnRfX2Ryb3Bkb3duXCIpLm9uKFwic2VsZWN0MjpjbG9zZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGlwcHkuaGlkZUFsbCgpO1xuICAgIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcbiAgICAgIF9pdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfSk7XG4gICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLnJlc2V0VGltZWxpbmUoKTtcbiAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMudG9nZ2xlUHJvamVjdHNWaXNpYmlsaXR5KCk7XG4gICAgbGV0IGRhdGFQb2ludElkID0gJChcIiNjLWZvb3QtcHJpbnRfX2Ryb3Bkb3duXCIpWzBdLnZhbHVlO1xuICAgIGxldCB0aXBweUluc3RhbmNlID1cbiAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy5maW5kVGlwcHlJbnN0YW5jZUJ5SWQoZGF0YVBvaW50SWQpO1xuICAgIHRpcHB5SW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uOiBcInNjYWxlXCIsXG4gICAgICBhcnJvdzogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3REZXRhaWwgPVxuICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmZpbmRQcm9qZWN0QnlJZChkYXRhUG9pbnRJZCk7XG4gICAgdGlwcHlJbnN0YW5jZS5zZXRDb250ZW50KFxuICAgICAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzLmdldENvdW50cnlQb3BvdmVyKFxuICAgICAgICBzZWxlY3RlZFByb2plY3REZXRhaWxcbiAgICAgIClcbiAgICApO1xuICAgIHRpcHB5SW5zdGFuY2Uuc2hvdygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdW5pcShsaXN0KSB7XG4gIHJldHVybiBsaXN0XG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50aW1lKVxuICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzb3J0UHJvamVjdHNCeVRpbWUoYSwgYikge1xuICBpZiAoYi50aW1lIDwgYS50aW1lKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGIudGltZSA+IGEudGltZSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0VGltZUxpbmUoKSB7XG4gIFByb2plY3RzV29ybGRNYXAucHJvcHMuUFJPSkVDVFMuc29ydChcbiAgICBQcm9qZWN0c1dvcmxkTWFwLm1ldGhvZHMuc29ydFByb2plY3RzQnlUaW1lXG4gICk7XG5cbiAgUHJvamVjdHNXb3JsZE1hcC5tZXRob2RzXG4gICAgLnVuaXEoXG4gICAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLFxuICAgICAgXCJ0aW1lXCJcbiAgICApXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWxpbmVfX3N3aXBlci1zbGlkZVwiKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aXBweS5oaWRlQWxsKCk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRpbWUgPSB0aGlzLmF0dHJpYnV0ZXNbXCJkYXRhLXRpbWVcIl0udmFsdWU7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoUHJvamVjdHNXb3JsZE1hcC5wcm9wcy50aW1lbGluZUNpcmNsZUVsZW0pXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW0uaWQuaW5kZXhPZihzZWxlY3RlZFRpbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICBfaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgdGltZUxpbmVDaXJjbGVJdGVtID0gJChcbiAgICAgICAgICBcIi5jLXRpbWUtbGluZS1ib3ggLmRhdGUgI3RpbWUtbGluZS1cIiArIHNlbGVjdGVkVGltZVxuICAgICAgICApO1xuICAgICAgICB0aW1lTGluZUNpcmNsZUl0ZW0udG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGltZUxpbmVDaXJjbGVJdGVtLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBQcm9qZWN0c1dvcmxkTWFwLnByb3BzLlBST0pFQ1RTLmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XG4gICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW0udGltZSA9PT0gcGFyc2VJbnQoc2VsZWN0ZWRUaW1lKSkge1xuICAgICAgICAgICAgICBfaXRlbS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9pdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFByb2plY3RzV29ybGRNYXAubWV0aG9kcy50b2dnbGVQcm9qZWN0c1Zpc2liaWxpdHkoKTtcbiAgICAgIH07XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10aW1lXCIsIGl0ZW0pO1xuICAgICAgZGl2LmlubmVySFRNTCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwidGltZXN0YW1wIHRpbWUtbGluZS1jaXJjbGVcIj48c3Bhbj5jaXJjbGU8L3NwYW4+PC9kaXY+XFxuJyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZGF0ZVwiPjxzcGFuIGNsYXNzPVwidGltZS1saW5lLWNpcmNsZVwiIGlkPVwidGltZS1saW5lLScgK1xuICAgICAgICBpdGVtICtcbiAgICAgICAgJ1wiID4nICtcbiAgICAgICAgaXRlbSArXG4gICAgICAgIFwiPC9zcGFuPjwvZGl2PlxcblwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1RpbWVsaW5lXCIpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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
