replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/iu/gi)) {
            element.parentElement.remove()
        }
        if (element.textContent.match(/indiana university bloomington/gi)) {
            element.parentElement.remove()
        }
        if (element.textContent.match(/iu bloomington/gi)) {
            element.parentElement.remove()
        }
        if (element.textContent.match(/indiana university/gi)) {
            element.parentElement.remove()
        }
        if (element.textContent.match(/bloomington/gi)) {
            element.parentElement.remove()
        }
    }
}