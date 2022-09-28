let themeStd = document.getElementById("themeStandard"),
    themeDark = document.getElementById("themeDark"),
    themeLight = document.getElementById("themeLight"),
    themeLaguna = document.getElementById("themeLaguna"),
    themeSwamp = document.getElementById("themeSwamp"),
    themeCrimson = document.getElementById("themeCrimson"),
    themeHoney = document.getElementById("themeHoney"),
    themeMidnight = document.getElementById("themeMidnight")
    

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
}else if(theme == "crimson"){
    setCrimson()
}else if(theme == "honey"){
    setHoney()
}else if(theme == "midnight"){
    setMidnight()
}else if(theme == "mint"){
    setMint()
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
    root.style.setProperty("--element-bg-color", "#F1F1F1")
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
    root.style.setProperty("--element-bg-color", "#5C6B57")
    root.style.setProperty("--main-text-color", "#D5FFD4")
    root.style.setProperty("--secondary-text-color", "#AAAAAA")
    root.style.setProperty("--border-color", "#CCE5CC")
    root.style.setProperty("--svg-filter", "invert(93%) sepia(11%) saturate(655%) hue-rotate(61deg) brightness(101%) contrast(104%)")
}

function setCrimson(){
    root.style.setProperty("--bg-color", "#220B0B")
    root.style.setProperty("--element-bg-color", "#481F1F")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#D88C8C")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
}

function setHoney(){
    root.style.setProperty("--bg-color", "#825D00")
    root.style.setProperty("--element-bg-color", "#483800")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#FFE6A7")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
}

function setMidnight(){
    root.style.setProperty("--bg-color", "#2D1239")
    root.style.setProperty("--element-bg-color", "#2C1B39")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#ECC2FF")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
}

function setMint(){
    root.style.setProperty("--bg-color", "#60A9A5")
    root.style.setProperty("--element-bg-color", "#418884")
    root.style.setProperty("--main-text-color", "#343434")
    root.style.setProperty("--secondary-text-color", "#000")
    root.style.setProperty("--border-color", "#8BCABF")
    root.style.setProperty("--svg-filter", "invert(16%) sepia(9%) saturate(6%) hue-rotate(11deg) brightness(90%) contrast(85%)")
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

themeCrimson.addEventListener("click", function(event){
    event.preventDefault()
    setCrimson()
    localStorage.setItem("theme", "crimson")
})

themeHoney.addEventListener("click", function(event){
    event.preventDefault()
    setHoney()
    localStorage.setItem("theme", "honey")
})

themeMidnight.addEventListener("click", function(event){
    event.preventDefault()
    setMidnight()
    localStorage.setItem("theme", "midnight")
})

themeMint.addEventListener("click", function(event){
    event.preventDefault()
    setMint()
    localStorage.setItem("theme", "mint")
})