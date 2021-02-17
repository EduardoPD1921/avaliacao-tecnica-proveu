var express = require('express')
var router = express.Router()

router.post('/', function(req, res, next) {
    const firstTime = req.body.firstTime
    const secondTime = req.body.secondTime
    
    const firstTimeValidator = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(firstTime)
    const secondTimeValidator = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(secondTime)

    // validações
    if (firstTimeValidator === false) {
        return res.status(400).send('firstTime-invalid')
    }

    if (secondTimeValidator === false) {
        return res.status(400).send('secondTime-invalid')
    }

    const firstTimeSplit = firstTime.split(':')
    const secondTimeSplit = secondTime.split(':')

    let firstTimeHours = firstTimeSplit[0]
    let firstTimeMinutes = firstTimeSplit[1]

    let secondTimeHours = secondTimeSplit[0]
    let secondTimeMinutes = secondTimeSplit[1]

    if (firstTimeHours == secondTimeHours && firstTimeMinutes == secondTimeMinutes) {
        return res.status(400).send('twentyfourHours-invalid')
    }

    let dayHours = 0
    let dayMinutes = 0

    let nightHours = 0
    let nightMinutes = 0

    let minutesCounter = firstTimeMinutes
    let hoursCounter = firstTimeHours

    for(let i = 0; i !== 1;) {
        if (minutesCounter == 60) {
            hoursCounter++
            minutesCounter = 0
        }

        // if (minutesCounter == secondTimeMinutes && hoursCounter == secondTimeHours) {
        //     return console.log(hoursCounter, minutesCounter)
        // }

        minutesCounter++
    }
})

module.exports = router