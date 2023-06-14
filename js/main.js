'use strict'

const URL = 'https://www.hebcal.com/converter?cfg=json&g2h=1&strict=1'

function onInit() {
    const date = new Date
    const formattedDate = getFormattedDate(date)
    document.querySelector('.start-date').value = formattedDate
}
async function onConvertDate(ev) {
    ev.preventDefault()
    // get the date values from the form inputs
    const startDate = document.querySelector('.start-date').value
    const endDate = document.querySelector('.end-date').value

    let text = ''
    if (endDate) {
        const res = await getDateRange(`${URL}&start=${startDate}&end=${endDate}`)
        text = `טווח התאריכים הנבחר הוא: ${res.start} - ${res.end}`
    } else {
        const res = await getSingleDate(`${URL}&date=${startDate}`)
        text = `התאריך שבחרת הוא -${res}`
    }
    console.log('text:', text)

    document.querySelector('.result').innerText = text
}