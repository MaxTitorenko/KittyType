let themeStd = document.getElementById("themeStandard"),
    themeDark = document.getElementById("themeDark"),
    themeLight = document.getElementById("themeLight")

let root = document.documentElement;

themeStd.addEventListener("click", function(event){
    event.preventDefault()
    root.style.setProperty("--bg-color", "#2D2F33")
    root.style.setProperty("--element-bg-color", "#26282C")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#BBBBBB")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
})

themeDark.addEventListener("click", function(event){
    event.preventDefault()
    root.style.setProperty("--bg-color", "#0C0C0C")
    root.style.setProperty("--element-bg-color", "#000000")
    root.style.setProperty("--main-text-color", "#fff")
    root.style.setProperty("--secondary-text-color", "#AEAEAE")
    root.style.setProperty("--border-color", "#BBBBBB")
    root.style.setProperty("--svg-filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(2deg) brightness(102%) contrast(104%)")
})


themeLight.addEventListener("click", function(event){
    event.preventDefault()
    root.style.setProperty("--bg-color", "#fff")
    root.style.setProperty("--element-bg-color", "#fff")
    root.style.setProperty("--main-text-color", "#343434")
    root.style.setProperty("--secondary-text-color", "#707070")
    root.style.setProperty("--border-color", "#343434")
    root.style.setProperty("--svg-filter", "invert(16%) sepia(9%) saturate(6%) hue-rotate(11deg) brightness(90%) contrast(85%)")
})