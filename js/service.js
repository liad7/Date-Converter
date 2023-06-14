'use strict'

function getAns(onSuccess,url) {
    const xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            onSuccess(res)
        }
    }

    xhr.open('GET', url)
    xhr.send()
}