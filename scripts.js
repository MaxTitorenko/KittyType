let infoButton = document.getElementById("infoButton"),
    settingsButton = document.getElementById("settingsButton"),
    languageButton = document.getElementById("languageButton"),
    keyboardButton = document.getElementById("keyboardButton"),
    historyButton = document.getElementById("historyButton")
    logButton = document.getElementById("logButton")

let closeInfo = document.getElementById("closeInfo"),
    closeSettings = document.getElementById("closeSettings"),
    closeLanguage = document.getElementById("closeLanguage"),
    closeHistroy = document.getElementById("closeHistory"),
    closeLog = document.getElementById("closeLog")

let infoModal = document.getElementById("infoModal"),
    settingsModal = document.getElementById("settingsModal"),
    languageModal = document.getElementById("languageModal"),
    historyModal = document.getElementById("historyModal"),
    logModal = document.getElementById("logModal"),
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

historyButton.addEventListener("click", function(event){
    event.preventDefault()
    historyModal.classList.remove("hidden")
})

closeHistroy.addEventListener("click", function(event){
    event.preventDefault()
    historyModal.classList.add("hidden")
})

logButton.addEventListener("click", function(event){
    event.preventDefault()
    logModal.classList.remove("hidden")
})

closeLog.addEventListener("click", function(event){
    event.preventDefault()
    logModal.classList.add("hidden")
})

let notSupported = document.getElementById("notSupported")
let logo = document.getElementById("logo")

window.addEventListener("resize", function(){
    if(window.screen.width < 600){
        notSupported.classList.remove("hidden")
        logo.classList.add("hidden")
        document.classList.add("remove-scrolling")
    }else{
        notSupported.classList.add("hidden")
        logo.classList.remove("hidden")
        document.classList.remove("remove-scrolling")
    }
})

if(window.screen.width < 600){
    notSupported.classList.remove("hidden")
    logo.classList.add("hidden")
    document.classList.add("remove-scrolling")
}else{
    notSupported.classList.add("hidden")
    logo.classList.remove("hidden")
    document.classList.remove("remove-scrolling")
}