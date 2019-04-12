let currentDateTime
let is24Hour = true
const switchMode = document.querySelector('.button')
const modeIndicator = document.querySelector('.hr')

updateTime()
setInterval(updateTime, 1000)

switchMode.addEventListener('click', () => {
  is24Hour = !is24Hour
  modeIndicator.textContent = is24Hour
    ? '24'
    : currentDateTime.getHours() > 11
    ? 'PM'
    : 'AM'
  updateTime()
})

// Functions
function updateTime() {
  currentDateTime = new Date(Date.now())
  const hours = formatTime(getCorrectHours(currentDateTime.getHours()))
  const minutes = formatTime(currentDateTime.getMinutes())
  const seconds = formatTime(currentDateTime.getSeconds())

  currentTimeString = `${hours}${minutes}${seconds}`

  document.querySelectorAll('.digit').forEach((digit, i) => {
    digit.textContent = currentTimeString.charAt(i)
  })
}

function formatTime(num) {
  return num < 10 ? `0${num}` : `${num}`
}

function getCorrectHours(hours) {
  if (is24Hour) {
    return hours
  } else {
    return convert24ToAMPM(hours)
  }
}

function convert24ToAMPM(hour) {
  if (hour === 0) {
    return 12
  } else if (hour > 12) {
    return (hour -= 12)
  } else {
    return hour
  }
}
