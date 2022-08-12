const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
  const now = new Date()

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  
  const secondsDegrees = parseInt(((seconds / 60) * 360) + 90)
  const minutesDegrees = parseInt(((minutes / 60) * 360) + 90)
  const hoursDegrees = parseInt(((hours / 12) * 360) + 90)
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)