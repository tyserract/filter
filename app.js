function update() {

    document.querySelectorAll('p').forEach(element => {
        let val = new RegExp(inpt.value,"i")
        if (!element.innerText.match(val)) {
            element.style.display = "none";
        } else {
            element.style.display = ""
        }
    })
}
