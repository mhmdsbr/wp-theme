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
let slides, container, dots, oldSlide = 0, activeSlide = 0, offsets = [], ih, dotAnim,
  offsetStart = 0, currentDevice, mouseStart, currentMouseMouseDistance = 0,
  mouseMouseDistanceThreshold = 30, direction = "NEXT",
  devicesEvents = {
    DESKTOP: {
      mousedown: "mousedown",
      mousemove: "mousemove",
      mouseup: "mouseup",
    },
    MOBILE: {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend",
    },
  }, ProjectsWorldMap;

if (document.readyState !== "loading") {
  console.log("document is already ready, just execute code here");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    movingWaves();
    console.clear();
    configElements()
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
  const svgR = $(".c-home__bg-waves svg:nth-child(odd)");
  const svgL = $(".c-home__bg-waves svg:nth-child(even)");

  // Moving Waves With Parallax
  $(document).on("mousemove", function (e) {
    parallaxIt(e, [svgR], -40);
    parallaxIt(e, [svgL], 40);
  });

  // End Moving Waves With Parallax
}

function parallaxIt(e, target, movement) {
  try {
    const $this = $(document);
    const relX = e.pageX - $this.offset().left;
    gsap.to(target, {
      duration: 1,
      x: ((relX - $this.width() / 4) / $this.width()) * movement,
    });
  } catch (error) {
  }
}

// Convert Select to ul
function configDropDowns() {
  const $uFormContainerJs = $("#u-form-container--js");

  $("#c-foot-print__dropdown").select2({
    width: "resolve", // need to override the changed default
    dropdownParent: $("#foot-print-nav"),
    minimumResultsForSearch: Infinity,
  });
  $("#form-project-discovery").select2({
    width: "null", // need to override the changed default
    dropdownParent: $uFormContainerJs,
    minimumResultsForSearch: Infinity,
  });
  $("#form-content").select2({
    width: "null", // need to override the changed default
    dropdownParent: $uFormContainerJs,
    minimumResultsForSearch: Infinity,
  });
}

// Companies Slider Config
function configSlider() {
  const rev = $(".c-companies__slider-wrapper");
  rev
    .on("init", function (event, slick) {
      const cur = $(slick.$slides[slick.currentSlide]);
      const next = cur.next();
      const prev = cur.prev();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      cur.removeClass("slick-snext").removeClass("slick-sprev");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      console.log("beforeChange");
      const cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass("slick-sprev");
      slick.$next.removeClass("slick-snext");
      const next = cur.next();
      const prev = cur.prev();
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
    customPaging: function () {
      return "";
    },
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
          appendTo: document.getElementsByClassName(
            "c-foot-print__world-map"
          )[0],
          interactive: true,
          onTrigger(instance, ref) {
            tippy.hideAll();
            const dataPointId =
              ref.target.attributes[ProjectsWorldMap.props.svgUniqKey].value;
            const selectedProjectDetail =
              ProjectsWorldMap.methods.findProjectById(dataPointId);
            instance.setContent(
              ProjectsWorldMap.methods.getCountryPopover(
                selectedProjectDetail
              )
            );
          }
        }),
      },
      methods: {
        findProjectNodeById,
        toggleProjectsVisibility,
        findProjectById,
        getCountryPopover,
        findTippyInstanceById,
        resetTimeline,
        generateProjectsDropdownOptions,
        uniq,
        sortProjectsByTime,
        generateProjectTimeLine,
      },
      init: function () {
        ProjectsWorldMap.methods.generateProjectTimeLine();
        ProjectsWorldMap.methods.generateProjectsDropdownOptions();
        ProjectsWorldMap.methods.toggleProjectsVisibility();
      },
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
  for (let i = 0; i < slides.length; i++) {
    let newDot = document.createElement("div");
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
    time: Math.abs(gsap.getProperty(container, "y") / ih) + 1,
  });
}

// resize all panels and refigure draggable snap array
function newSize() {
  offsets = [];
  ih = window.innerHeight;
  gsap.set("#panelWrap", { height: slides.length * ih });
  gsap.set(slides, { height: ih });
  for (let slide of slides) {
    offsets.push(-slide.offsetTop);
  }
  gsap.set(container, { y: offsets[activeSlide] });
}

function noDraggingNoIdDragger(id, className, index, e) {
  if (gsap.isTweening(container)) {
    return;
  }
  // up/down arrow clicks
  if (id === "downArrow" || id === "upArrow") {
    if (id === "downArrow") {
      activeSlide += 1
    } else {
      activeSlide -= 1
    }
    // click on a dot
  } else if (className === "dot") {
    activeSlide = index;
    // scrollwheel
  } else {
    if (e.deltaY > 0) {
      activeSlide += 1
    } else {
      activeSlide -= 1
    }
  }
}

// make sure we're not past the end or beginning slide
function checkPastEndOrBeginningSlide() {
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide =
    activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
}

function idIsNotDragger() {
  gsap.to(container, {
    y: offsets[activeSlide],
    onUpdate: tweenDot,
    duration: 1,
    ease: "power1.out",
  });
}

function fnIsDragging(index) {
  gsap.to(container, {
    y: offsets[index],
    onUpdate: tweenDot,
    duration: 1,
    ease: "power1.out",
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
    if (
      direction === "NEXT" &&
      activeSlide <= slides.length - 1
    ) {
      activeSlide += 1;
      slideAnim(ev, true, activeSlide);
    } else if (activeSlide > 0) {
      activeSlide -= 1;
      slideAnim(ev, true, activeSlide);
    }
  }
  window.document.removeEventListener(
    devicesEvents[currentDevice].mouseup,
    mouseupHandler
  );
  currentMouseMouseDistance = 0;

}

function navDotAnimation() {
  // get elements positioned
  gsap.set(".dots", { yPercent: -50 });
  gsap.set(".dot", { marginBottom: "25" });
  // side screen animation with nav dots
  dotAnim = gsap.timeline({ paused: true });
  dotAnim.to(
    ".dot",
    {
      stagger: { each: 1, yoyo: true, repeat: 1 },
      scale: 2.1,
      rotation: 0.1,
      backgroundColor: "transparent",
      ease: "none",
    },
    0.5
  );
  dotAnim.time(1);


  gsap.set(".hideMe", { opacity: 1 });
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
    const sound = new Howl({
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
    let homeSlidesDraggingHandler = function (selectedDevice) {

      $("img").on("dragstart", function (event) {
        event.preventDefault();
      });

      window.document.addEventListener(
        devicesEvents[selectedDevice].mousedown,
        function (e) {
          currentMouseMouseDistance = 0;
          currentDevice = selectedDevice;

          window.document.body.style.position = "relative";
          if (window.document.body.style.top === "") {
            offsetStart = 0;
          } else {
            offsetStart = parseInt(
              window.window.document.body.style.top.slice(0, -2)
            );
          }
          mouseStart = getPageY(e);

          window.document.addEventListener(
            devicesEvents[selectedDevice].mouseup,
            (function (ev) {
              mouseupHandler(ev);
            })
          );

        }
      );
    };

    let init = function () {
      let allowedDevicesForDragging = ["DESKTOP", "MOBILE"];
      allowedDevicesForDragging.forEach(function (device) {
        homeSlidesDraggingHandler(device);
      });
    };

    init();
  })();
}

function findProjectNodeById(id) {
  for (let item of ProjectsWorldMap.props.projectsNodeList) {
    if (
      item.attributes[ProjectsWorldMap.props.svgUniqKey].value === id
    ) {
      return item;
    }
  }
}

function toggleProjectsVisibility() {
  ProjectsWorldMap.props.PROJECTS.forEach(function (project) {
    let selectedNode = ProjectsWorldMap.methods.findProjectNodeById(
      project.id
    );
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
  return (
    '<a href="' +
    selectedProject.link +
    '">' +
    '<img alt="" src="' +
    selectedProject.img +
    '"/>' +
    "<p>" +
    selectedProject.time +
    " | " +
    selectedProject.title +
    "</p>" +
    "</a>"
  );
}

function findTippyInstanceById(id) {
  return ProjectsWorldMap.props.tippyInstances.find(function (item) {
    return (
      item.reference.attributes[ProjectsWorldMap.props.svgUniqKey]
        .value === id
    );
  });
}

function resetTimeline() {
  let timelineCircles = document.querySelectorAll(
    ProjectsWorldMap.props.timelineCircleElem
  );
  timelineCircles.forEach(function (item) {
    item.classList.remove("active");
  });
}

function generateProjectsDropdownOptions() {
  let select = document.getElementById("c-foot-print__dropdown");
  ProjectsWorldMap.props.PROJECTS.forEach(function (item) {
    let option = document.createElement("option");
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
    let dataPointId = $("#c-foot-print__dropdown")[0].value;
    let tippyInstance =
      ProjectsWorldMap.methods.findTippyInstanceById(dataPointId);
    tippyInstance.setProps({
      allowHTML: true,
      animation: "scale",
      arrow: true,
    });
    const selectedProjectDetail =
      ProjectsWorldMap.methods.findProjectById(dataPointId);
    tippyInstance.setContent(
      ProjectsWorldMap.methods.getCountryPopover(
        selectedProjectDetail
      )
    );
    tippyInstance.show();
  });
}

function uniq(list) {
  return list
    .map((item) => item.time)
    .filter((value, index, self) => self.indexOf(value) === index);
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
  ProjectsWorldMap.props.PROJECTS.sort(
    ProjectsWorldMap.methods.sortProjectsByTime
  );

  ProjectsWorldMap.methods
    .uniq(
      ProjectsWorldMap.props.PROJECTS,
      "time"
    )
    .forEach(function (item) {
      let div = document.createElement("div");
      div.classList.add("time-line__swiper-slide");
      div.onclick = function () {
        tippy.hideAll();
        let selectedTime = this.attributes["data-time"].value;
        document
          .querySelectorAll(ProjectsWorldMap.props.timelineCircleElem)
          .forEach(function (_item) {
            if (_item.id.indexOf(selectedTime) === -1) {
              _item.classList.remove("active");
            }
          });
        let timeLineCircleItem = $(
          ".c-time-line-box .date #time-line-" + selectedTime
        );
        timeLineCircleItem.toggleClass("active");
        const isActive = timeLineCircleItem.hasClass("active");
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
      div.innerHTML =
        '<div class="timestamp time-line-circle"><span>circle</span></div>\n' +
        '<div class="date"><span class="time-line-circle" id="time-line-' +
        item +
        '" >' +
        item +
        "</span></div>\n";
      document.getElementById("projectsTimeline").appendChild(div);
    });
}

