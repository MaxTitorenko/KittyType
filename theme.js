let themeStd = document.getElementById("themeStandard"),
    themeDark = document.getElementById("themeDark"),
    themeLight = document.getElementById("themeLight"),
    themeLaguna = document.getElementById("themeLaguna"),
    themeSwamp = document.getElementById("themeSwamp")
    

let root = document.documentElement;

let theme = localStorage.getItem("theme")

if(theme == "standard"){
    setStandard
}else if(theme == "dark"){
    setDark()
}else if(theme == "light"){
    setLight()
}else if(theme == "laguna"){
    setLaguna()
}else if(theme == "swamp"){
    setSwamp()
}

function setStandard(){
    root.style.setProperty("--bg-color", "#2D2F33")
    root.style.setProperty("--element-bg-color", "#26282C")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#BBBBBB")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
}

function setDark(){
    root.style.setProperty("--bg-color", "#0C0C0C")
    root.style.setProperty("--element-bg-color", "#000000")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#BBBBBB")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
}

function setLight(){
    root.style.setProperty("--bg-color", "#fff")
    root.style.setProperty("--element-bg-color", "#fff")
    root.style.setProperty("--main-text-color", "#343434")
    root.style.setProperty("--secondary-text-color", "#707070")
    root.style.setProperty("--border-color", "#343434")
    root.style.setProperty("--svg-filter", "invert(16%) sepia(9%) saturate(6%) hue-rotate(11deg) brightness(90%) contrast(85%)")
}

function setLaguna(){
    root.style.setProperty("--bg-color", "#374267")
    root.style.setProperty("--element-bg-color", "#272B3F")
    root.style.setProperty("--main-text-color", "#E1F1FF")
    root.style.setProperty("--secondary-text-color", "#9A9A9A")
    root.style.setProperty("--border-color", "#FAFBFF")
    root.style.setProperty("--svg-filter", "invert(88%) sepia(15%) saturate(6032%) hue-rotate(187deg) brightness(103%) contrast(102%)")
}

function setSwamp(){
    root.style.setProperty("--bg-color", "#70836A")
    root.style.setProperty("--element-bg-color", "#70836A")
    root.style.setProperty("--main-text-color", "#D5FFD4")
    root.style.setProperty("--secondary-text-color", "#424242")
    root.style.setProperty("--border-color", "#CCE5CC")
    root.style.setProperty("--svg-filter", "invert(93%) sepia(11%) saturate(655%) hue-rotate(61deg) brightness(101%) contrast(104%)")
}

themeStd.addEventListener("click", function(event){
    event.preventDefault()
    setStandard()
    localStorage.setItem("theme", "standard")
})

themeDark.addEventListener("click", function(event){
    event.preventDefault()
    setDark()
    localStorage.setItem("theme", "dark")
})

themeLight.addEventListener("click", function(event){
    event.preventDefault()
    setLight()
    localStorage.setItem("theme", "light")
})

themeLaguna.addEventListener("click", function(event){
    event.preventDefault()
    setLaguna()
    localStorage.setItem("theme", "laguna")
})

themeSwamp.addEventListener("click", function(event){
    event.preventDefault()
    setSwamp()
    localStorage.setItem("theme", "swamp")
})