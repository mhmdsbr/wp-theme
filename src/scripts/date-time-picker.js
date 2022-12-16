(function () {
  const elem1 = document.querySelector('input[name="datepicker"]');
  var hourInputElem = $('#hour input')
  var minuteInputElem = $('#minute input')
  var timeSwitcherElem = $('.time-switcher span')
  var datePlaceholderElem = document.getElementById('datePlaceholder')
  var selectedDateStr = ''
  var selectedTimeFormat = 'AM'

  var setDefaultTime = function () {
    var now = new Date()
    var hour = now.getHours()
    hourInputElem.val(hour > 12 ? hour - 12 : hour)
    minuteInputElem.val(now.getMinutes())
    timeSwitcherElem.removeClass("active");
    if (hour > 12) {
      timeSwitcherElem.last().addClass("active");
    } else {
      timeSwitcherElem.first().addClass("active");
    }
  }

  const datepickerInstance = new Datepicker(elem1, {
    buttonClass: 'btn',
    autohide: true,
    calendarWeeks: false,
    clearBtn: false,
    // format: 'MM/dd/yyyy',
    nextArrow: '<img src="images/next.svg"/>',
    prevArrow: '<img src="images/pre.svg"/>',
    todayHighlight: true,
    format: {
      toValue(date, format, locale) {
        return date;
      },
      toDisplay(date, format, locale) {
        return date;
      },
    },
  });

  var updateDateTime = function () {
    var selectedHour = hourInputElem.val()
    var selectedMinute = minuteInputElem.val()
    var selectedDate = datepickerInstance.getDate() || new Date()
    var selectedDay = datepickerInstance.config.locale.daysShort[selectedDate.getDay()]
    var selectedMonth = datepickerInstance.config.locale.monthsShort[selectedDate.getMonth()]
    selectedDateStr = selectedDay + ' ' + selectedMonth + ' ' + selectedDate.getDate() + '/' + selectedDate.getFullYear()
    var selectedTimeStr = (selectedHour + ':' + selectedMinute) + ' ' + selectedTimeFormat
    datePlaceholderElem.innerHTML = '<img src="/images/date.svg"><span id="selectedDate">' + selectedDateStr + '</span><span id="dateDivider">|</span><img src="/images/clock.svg"><span id="selectedTime">' + selectedTimeStr + '</span>'
  }

  $('#datePlaceholder').click(function () {
    if (!datepickerInstance.active) {
      datepickerInstance.show()
    } else {
      datepickerInstance.hide()
    }
  })

  datepickerInstance.element.addEventListener('show', function (res) {
    if (!selectedDateStr) {
      setDefaultTime()
    }
  })

  datepickerInstance.element.addEventListener('changeDate', function (res) {
    updateDateTime()
  })

  var timePicker = document.getElementById('timePicker')
  timePicker.style.display = 'block'
  document.getElementsByClassName('datepicker').item(0).append(timePicker)
  hourInputElem.click(function () {
    hourInputElem.focus()
  })

  hourInputElem.keyup(function () {
    if (hourInputElem.val() > 12) {
      hourInputElem.val(12)
    }
    updateDateTime()
  })

  minuteInputElem.click(function () {
    minuteInputElem.focus()
  })

  minuteInputElem.keyup(function () {
    if (minuteInputElem.val() > 59) {
      minuteInputElem.val(59)
    }
    updateDateTime()
  })

  timeSwitcherElem.click(function () {
    timeSwitcherElem.removeClass("active");
    $(this).toggleClass("active");
    selectedTimeFormat = $(this).attr('data-value')
    updateDateTime()
  })
})()
