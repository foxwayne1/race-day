let raceNumber = Math.floor(Math.random() * 1000)

let registeredEarly = true

let runnersAge = 130

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`Your Race starts at 9:30 and your race number is ${raceNumber}`)
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`Your Race starts at 11:00 and your race number is ${raceNumber}`)
} else if (runnersAge <= 18) {
  console.log(`Your Race starts at 12:30 and your race number is ${raceNumber}`)
}
