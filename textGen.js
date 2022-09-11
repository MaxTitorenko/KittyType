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