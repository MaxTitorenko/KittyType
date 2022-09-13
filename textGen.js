const commonWordsEasy = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","i","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
const commonWordsMedium = ["The", "the","of","And","and","A","a","to","in","is","You","you","that","It","it","He","he","was","for","on","Are","are","as","with","His","his","they","I","i","at","be","This","this","have","from","or","one","had","by","Word","word","but","not","What","what","All","all","were","We","we","when","Your","your","can","said","there","use","an","each","which","She","she","do","how","Their","their","if","will","up","Other","other","about","out","many","then","Them","them","These","these","so","Some","some","Her","her","would","make","like","Him","him","into","time","has","Look","look","two","more","write","go","See","see","number","no","Way","way","could","People","people","My","my","than","first","water","been","call","Who","who","oil","Its","its","now","find","long","down","day","Did","did","get","come","made","may","part"];
const punctuation = [",",".",";",":","?","!"]

let textArea = document.getElementById("textArea"),
    replayButton = document.getElementById("replayButton")

let diffEasy = document.getElementById("diffEasy"),
    diffMedium = document.getElementById("diffMedium"),
    diffHard = document.getElementById("diffHard")

function textGen(array){
    text = ""

    for(let i = 0; i <=100; i++){
        rng = Math.floor(Math.random() * array.length)
        text += array[rng] + " "
    }

    textArea.textContent = text
    textArea.value = text
}

function textGenHard(array){
    text = ""

    for(let i = 0; i <=100; i++){
        rng = Math.floor(Math.random() * array.length)
        rng2 = Math.floor(Math.random() * punctuation.length)
        if(Math.floor(Math.random()*10)>=7){
            text += array[rng]
            text += punctuation[rng2] + " "
        }else{
            text += array[rng] + " "
        }
    }

    textArea.textContent = text
    textArea.value = text
}

function generate(){
    if(diffEasy.checked){
        textGen(commonWordsEasy)
    }else if(diffMedium.checked){
        textGen(commonWordsMedium)
    }else if(diffHard.checked){
        textGenHard(commonWordsMedium)
    }
}

generate()

replayButton.addEventListener("click", function(event){
    event.preventDefault()
    generate()
})

document.addEventListener('keyup', function(event){
    if (event.key === "F2"){
        generate()
    }
})

diffEasy.addEventListener("click", function(){
    generate()
})

diffMedium.addEventListener("click", function(){
    generate()
})

diffHard.addEventListener("click", function(){
    generate()
})

// textArea.addEventListener("keydown", function(event){
//     console.log(event.key)
//     if(event.key == text[0]){
//         textArea.html.append = "<span class='correct'>"+event.key+"</span>"
//     }
// })

let inputText = document.getElementById("inputText")
let inputVerify = document.getElementById("inputVerify")

inputCount = -1

inputText.addEventListener("keydown", function(event){
    inputCount += 1

    if(event.key == text[inputCount]){
        inputVerify.innerHTML += "<span class='correct'>"+text[inputCount]+"</span>"
    }else{
        inputVerify.innerHTML += "<span class='wrong'>"+text[inputCount]+"</span>"
    }

    console.log(inputCount)
    
})

// Timer

let resultModal = document.getElementById("resultModal")
let closeResult = document.getElementById("closeResult")
let textAreaTime = document.getElementById("textArea")
let timer = document.getElementById("timer")

let time15 = document.getElementById("time15"),
    time30 = document.getElementById("time30"),
    time60 = document.getElementById("time60")

timeVal = 15

function timing(time){

    lvt = setInterval(function(){timer.textContent = timeVal - 1
        timeVal -= 1}, 1000)
    
    setTimeout(function(){resultModal.classList.remove("hidden")
        clearInterval(lvt)
        generate()
        inputText.value = ""
        inputVerify.textContent = ""
        inputCount = -1
        if(time15.checked){
            timer.textContent = 15
        }else if(time30.checked){
            timer.textContent = 30
        }else if(time60.checked){
            timer.textContent = 60
        }
        inputText.addEventListener("keydown", function(event){
    
            if(time15.checked){
                timing(15000)
                timeVal = 15
            }else if(time30.checked){
                timing(30000)
                timeVal = 30
            }else if(time60.checked){
                timing(60000)
                timeVal = 60
            }
            
        }, {once:true})}, time)
}

inputText.addEventListener("keydown", function(event){
    
    if(time15.checked){
        timing(15000)
        timeVal = 15
    }else if(time30.checked){
        timing(30000)
        timeVal = 30
    }else if(time60.checked){
        timing(60000)
        timeVal = 60
    }
    
}, {once:true})

closeResult.addEventListener("click", function(){
    resultModal.classList.add("hidden")
})

time15.addEventListener("click", function(){
    timer.textContent = 15
})

time30.addEventListener("click", function(){
    timer.textContent = 30
})

time60.addEventListener("click", function(){
    timer.textContent = 60
})
