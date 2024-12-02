function showShare() {
    toggleClassById("author-container", "hidden")
    toggleClassById("share-container", "hidden")
    toggleClassById("footer", "bg-slate-800")
}

function toggleClassById(elementId, className) {
    let element = document.getElementById(elementId)
    element.classList.toggle(className)
}