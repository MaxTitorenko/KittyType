let infoButton = document.getElementById("infoButton"),
    settingsButton = document.getElementById("settingsButton"),
    languageButton = document.getElementById("languageButton"),
    keyboardButton = document.getElementById("keyboardButton")

let closeInfo = document.getElementById("closeInfo"),
    closeSettings = document.getElementById("closeSettings"),
    closeLanguage = document.getElementById("closeLanguage")

let infoModal = document.getElementById("infoModal"),
    settingsModal = document.getElementById("settingsModal"),
    languageModal = document.getElementById("languageModal"),
    keyboard = document.getElementById("keyboard")

infoButton.addEventListener("click", function(event){
    event.preventDefault()
    infoModal.classList.remove("hidden")
})

closeInfo.addEventListener("click", function(event){
    event.preventDefault()
    infoModal.classList.add("hidden")
})

settingsButton.addEventListener("click", function(event){
    event.preventDefault()
    settingsModal.classList.remove("hidden")
})

closeSettings.addEventListener("click", function(event){
    event.preventDefault()
    settingsModal.classList.add("hidden")
})

languageButton.addEventListener("click", function(event){
    event.preventDefault()
    languageModal.classList.remove("hidden")
})

closeLanguage.addEventListener("click", function(event){
    event.preventDefault()
    languageModal.classList.add("hidden")
})

keyboardButton.addEventListener("click", function(event){
    event.preventDefault()
    keyboard.classList.toggle("hidden")
})