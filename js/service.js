'use strict'

function getAnswer(url) {
    return fetch(url)
        .then(res => res.json())
}

async function getSingleDate(url) {
    try {
        const res = await getAnswer(url)
        return res.hebrew
    } catch (err) {
        console.log('Can\'t get single date:', err)
    }
}

async function getDateRange(url) {
    try {
        const res = await getAnswer(url)
        const { start, end, hdates: dates } = res
        return {
            start: dates[start],
            end: dates[end]
        }
    } catch (err) {
        console.log('Can\'t get this date range:', err)
    }
}
function getFormattedDate(date) {
    return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
}