function lookUp() {
    let input = document.getElementById('search').value
    input=input.toLowerCase()
    let coffeetea = document.getElementsByClassName('coffeetea')

    for (i = 0; i < coffeetea.length; i++) {
        if(!coffeetea[i].innerHTML.toLowerCase().includes(input)) {
            coffeetea[i].style.display="none"
        } else {
            coffeetea[i].style.display="list-item"
        }
    }
}

function contact() {
    contacts = document.getElementById("contacts")
    contacts.style.display = "block"
}