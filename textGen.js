const engWordsEasy = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","i","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
const engWordsMedium = ["The", "the","of","And","and","A","a","to","in","is","You","you","that","It","it","He","he","was","for","on","Are","are","as","with","His","his","they","I","i","at","be","This","this","have","from","or","one","had","by","Word","word","but","not","What","what","All","all","were","We","we","when","Your","your","can","said","there","use","an","each","which","She","she","do","how","Their","their","if","will","up","Other","other","about","out","many","then","Them","them","These","these","so","Some","some","Her","her","would","make","like","Him","him","into","time","has","Look","look","two","more","write","go","See","see","number","no","Way","way","could","People","people","My","my","than","first","water","been","call","Who","who","oil","Its","its","now","find","long","down","day","Did","did","get","come","made","may","part"];

const uaWordsEasy = ['як', 'я', 'його', 'що', 'він', 'було', 'для', 'на', 'є', 'вони', 'бути', 'у', 'один', 'мати', 'це', 'від', 'по', 'гаряча', 'слово', 'але', 'що', 'деякі', 'вогонь', 'це', 'ви', 'або', 'було', 'план', 'і', 'до', 'кішка', 'в', 'ми', 'може', 'через', 'другий', 'були', 'які', 'зробити', 'їх', 'час', 'якщо', 'буде', 'вона', 'кожен', 'сказати', 'робити', 'набір', 'три', 'хотіти', 'повітря', 'добре', 'також', 'грати', 'кінець', 'ставити', 'додому', 'читати', 'рука', 'великий', 'навіть', 'земля', 'тут', 'високий', 'чому', 'чоловіки', 'пішов', 'світло', 'вид', 'від', 'потрібно', 'будинок', 'картина', 'нам', 'знову', 'тварин', 'крапка', 'поруч', 'будувати', 'будь', 'новий', 'робота', 'частина', 'приймати', 'отримувати', 'місце', 'зробив', 'жити', 'де', 'після', 'назад', 'трохи', 'тільки', 'круглий', 'людина', 'рік', 'мене', 'наш', 'під', 'дуже', 'просто', 'вирок', 'думаю', 'сказати']
const uaWordsMedium = ['як','Як','Я', 'я', 'Його','його', 'Що','що', 'Він','він', 'було', 'для', 'на', 'Є','є', 'Вони','вони', 'бути', 'у', 'один', 'Мати','мати', 'Це','це', 'Від','від', 'по', 'гаряча', 'слово', 'Але','але', 'деякі', 'вогонь', 'Ви','ви', 'або', 'було', 'план', 'І','і', 'До','до', 'кішка', 'В','в', 'Ми','ми', 'може', 'через', 'другий', 'були', 'Які','які', 'зробити', 'Їх','їх', 'Час','час', 'Якщо','якщо', 'Буде','буде', 'Вона','вона', 'кожен', 'сказати', 'робити', 'набір', 'три', 'хотіти', 'повітря', 'добре', 'також', 'грати', 'кінець', 'ставити', 'додому', 'читати', 'Рука','рука', 'Великий','великий', 'навіть', 'Земля','земля', 'Тут','тут', 'високий', 'Чому','чому', 'чоловіки', 'пішов', 'світло', 'Вид','вид', 'Від','від', 'потрібно', 'будинок', 'картина', 'Нам','нам', 'знову', 'Тварини','тварини', 'крапка', 'поруч', 'будувати', 'Будь','будь', 'Новий','новий', 'робота', 'частина', 'приймати', 'отримувати', 'Місце','місце', 'зробив', 'Жити','жити', 'Де','де', 'після', 'назад', 'трохи', 'тільки', 'круглий', 'Людина','людина', 'Рік','рік', 'Мене','мене', 'Наш','наш', 'під', 'дуже', 'просто', 'вирок', 'думаю', 'сказати']

const punctuation = [",",".",";",":","?","!"]


let textArea = document.getElementById("textArea"),
    replayButton = document.getElementById("replayButton")

let diffEasy = document.getElementById("diffEasy"),
    diffMedium = document.getElementById("diffMedium"),
    diffHard = document.getElementById("diffHard")

let langEng = document.getElementById("langEng"),
    langUA = document.getElementById("langUA")

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
        if(langEng.checked){
            textGen(engWordsEasy)
        }else if(langUA.checked){
            textGen(uaWordsEasy)
        }
    }else if(diffMedium.checked){
        if(langEng.checked){
            textGen(engWordsMedium)
        }else if(langUA.checked){
            textGen(uaWordsMedium)
        }
    }else if(diffHard.checked){
        if(langEng.checked){
            textGenHard(engWordsMedium)
        }else if(langUA.checked){
            textGenHard(uaWordsMedium)
        }
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

let inputText = document.getElementById("inputText")
let inputVerify = document.getElementById("inputVerify")

inputCount = -1
correctInput = 0
wrongInput = 0

inputText.addEventListener("keydown", function(event){
    inputCount += 1
    

    if(event.key == "Shift"){ inputCount -= 1 }
    else if(event.key == text[inputCount]){
        inputVerify.innerHTML += "<span class='correct writing-line'>"+text[inputCount]+"</span>"
        correctInput += 1
    }else{
        inputVerify.innerHTML += "<span class='wrong writing-line'>"+text[inputCount]+"</span>"
        wrongInput += 1
    }
    if(inputCount>0){
        inputVerify.getElementsByTagName("span")[inputCount-1].classList.remove("writing-line")
    }
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
    graphCorrect = []
    graphWrong = []
    arrayNorm1 = 0
    arrayNorm2 = 0
    sum1 = 0
    sum2 = 0

    lvt = setInterval(function(){timer.textContent = timeVal - 1
        timeVal -= 1
        
        if(graphCorrect.length==0){
            graphCorrect.push(correctInput)
        }else{
            sum1 += graphCorrect[arrayNorm1]
            graphCorrect.push(correctInput-sum1)
            arrayNorm1 += 1
        }

        if(graphWrong.length==0){
            graphWrong.push(wrongInput)
        }else{
            sum2 += graphWrong[arrayNorm2]
            graphWrong.push(wrongInput-sum2)
            arrayNorm2 += 1
        }

    }, 1000)
    
    setTimeout(function(){resultModal.classList.remove("hidden")
        inputText.blur()
        clearInterval(lvt)
        generate()
        inputText.value = ""
        inputVerify.textContent = ""
        inputCount = -1
        charCorrect.textContent = correctInput
        charWrong.textContent = wrongInput

        accVal = ((correctInput*100)/(correctInput+wrongInput)).toFixed(2)
        acc.textContent = accVal
        
        if(time15.checked){
            timer.textContent = 15
            wpmVal = (correctInput/5)/0.25
            rawVal = ((correctInput+wrongInput)/5)/0.25
            xVal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }else if(time30.checked){
            timer.textContent = 30
            wpmVal = (correctInput/5)/0.5
            rawVal = ((correctInput+wrongInput)/5)/0.5
            xVal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        }else if(time60.checked){
            timer.textContent = 60
            wpmVal = (correctInput/5)/1
            rawVal = ((correctInput+wrongInput)/5)/1
            xVal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
        }

        wpm.textContent = wpmVal
        rawWpm.textContent = rawVal

        var chart = new Chart("resultChart",{
            type: "line",
            data: {
                labels: xVal,
                datasets: [{
                    data: graphCorrect,
                    borderColor: "green",
                    lineTension: 0.3,
                    label: "correct"
                },{
                    data: graphWrong,
                    borderColor: "red",
                    lineTension: 0.3,
                    label: "wrong"
                }]
            }
        })

        closeResult.addEventListener("click", function(){
            chart.destroy()
        })

        correctInput = 0
        wrongInput = 0
        graphCorrect = []
        graphWrong = []

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

let wpm = document.getElementById("wpm")
let rawWpm = document.getElementById("rawWpm")
let acc = document.getElementById("acc")
let charCorrect = document.getElementById("charCorrect")
let charWrong = document.getElementById("charWrong")
let langText = document.getElementById("langText")

langEng.addEventListener("click", function(){
    generate()
    langText.textContent = "Eng"
})

langUA.addEventListener("click", function(){
    generate()
    langText.textContent = "UA"
})