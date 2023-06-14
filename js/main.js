'use strict'

const URL = 'https://www.hebcal.com/converter?cfg=json&g2h=1&strict=1&date='

function onInit() {
    const date = new Date
    const formattedDate = getFormattedDate(date)
    document.querySelector('.start-date').value = formattedDate
}
function onConvertDate(ev) {
    ev.preventDefault()
    // get the date values from the form inputs
    const startDate = document.querySelector('.start-date').value
    const endDate = document.querySelector('.end-date').value

    

}