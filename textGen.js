const engWordsEasy = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","i","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
const engWordsMedium = ["The", "the","of","And","and","A","a","to","in","is","You","you","that","It","it","He","he","was","for","on","Are","are","as","with","His","his","they","I","i","at","be","This","this","have","from","or","one","had","by","Word","word","but","not","What","what","All","all","were","We","we","when","Your","your","can","said","there","use","an","each","which","She","she","do","how","Their","their","if","will","up","Other","other","about","out","many","then","Them","them","These","these","so","Some","some","Her","her","would","make","like","Him","him","into","time","has","Look","look","two","more","write","go","See","see","number","no","Way","way","could","People","people","My","my","than","first","water","been","call","Who","who","oil","Its","its","now","find","long","down","day","Did","did","get","come","made","may","part"];

const uaWordsEasy = ['як', 'я', 'його', 'що', 'він', 'було', 'для', 'на', 'є', 'вони', 'бути', 'у', 'один', 'мати', 'це', 'від', 'по', 'гаряча', 'слово', 'але', 'що', 'деякі', 'вогонь', 'це', 'ви', 'або', 'було', 'план', 'і', 'до', 'кішка', 'в', 'ми', 'може', 'через', 'другий', 'були', 'які', 'зробити', 'їх', 'час', 'якщо', 'буде', 'вона', 'кожен', 'сказати', 'робити', 'набір', 'три', 'хотіти', 'повітря', 'добре', 'також', 'грати', 'кінець', 'ставити', 'додому', 'читати', 'рука', 'великий', 'навіть', 'земля', 'тут', 'високий', 'чому', 'чоловіки', 'пішов', 'світло', 'вид', 'від', 'потрібно', 'будинок', 'картина', 'нам', 'знову', 'тварин', 'крапка', 'поруч', 'будувати', 'будь', 'новий', 'робота', 'частина', 'приймати', 'отримувати', 'місце', 'зробив', 'жити', 'де', 'після', 'назад', 'трохи', 'тільки', 'круглий', 'людина', 'рік', 'мене', 'наш', 'під', 'дуже', 'просто', 'вирок', 'думаю', 'сказати']
const uaWordsMedium = ['як','Як','Я', 'я', 'Його','його', 'Що','що', 'Він','він', 'було', 'для', 'на', 'Є','є', 'Вони','вони', 'бути', 'у', 'один', 'Мати','мати', 'Це','це', 'Від','від', 'по', 'гаряча', 'слово', 'Але','але', 'деякі', 'вогонь', 'Ви','ви', 'або', 'було', 'план', 'І','і', 'До','до', 'кішка', 'В','в', 'Ми','ми', 'може', 'через', 'другий', 'були', 'Які','які', 'зробити', 'Їх','їх', 'Час','час', 'Якщо','якщо', 'Буде','буде', 'Вона','вона', 'кожен', 'сказати', 'робити', 'набір', 'три', 'хотіти', 'повітря', 'добре', 'також', 'грати', 'кінець', 'ставити', 'додому', 'читати', 'Рука','рука', 'Великий','великий', 'навіть', 'Земля','земля', 'Тут','тут', 'високий', 'Чому','чому', 'чоловіки', 'пішов', 'світло', 'Вид','вид', 'Від','від', 'потрібно', 'будинок', 'картина', 'Нам','нам', 'знову', 'Тварини','тварини', 'крапка', 'поруч', 'будувати', 'Будь','будь', 'Новий','новий', 'робота', 'частина', 'приймати', 'отримувати', 'Місце','місце', 'зробив', 'Жити','жити', 'Де','де', 'після', 'назад', 'трохи', 'тільки', 'круглий', 'Людина','людина', 'Рік','рік', 'Мене','мене', 'Наш','наш', 'під', 'дуже', 'просто', 'вирок', 'думаю', 'сказати']

const gerWordsEasy = ["der", "und", "sein", "in", "ein", "zu", "haben", "ich", "werden","sie", "von", "nicht", "mit", "es", "sich", "auch", "auf", "für", "an", "er", "so", "dass", "können", "dies", "als", "ihr", "ja", "wie", "bei", "oder", "wir", "aber", "dann", "amn", "da", "sein", "noch", "nach", "was", "also", "aus", "all", "wenn", "nur", "müssen", "sagen", "um", "über", "machen", "kein", "jahr", "du", "mein", "schon", "vor", "durch", "geben", "mehr", "andere", "viel", "kommen", "jetzt", "sollen", "mir", "wollen", "ganz", "mich", "immer", "gehen", "sehr", "hier", "doch", "bis", "groß", "wieder", "mal", "zwei", "gut", "wissen", "neu", "sehen", "lassen", "uns", "weil", "unter", "denn", "stehen", "jede", "beispiel", "zeit", "erste", "ihm", "ihn", "wo", "lang", "eigentlich", "damit", "selbst", "unser", "oben"]
const gerWordsMedium = ["der", "Der", "und", "Und","sein", "in", "ein", "Ein","zu", "haben", "Haben","ich", "Ich","werden", "sie", "Sie","von", "Von","nicht", "Nicht","mit", "es", "Es","sich", "auch", "Auch","auf", "Auf","für", "Für","an", "er", "so", "das", "Das", "können", "Können","dies", "als", "ihr", "ja", "Ja","wie", "Wie","bei", "oder", "Oder","wir", "aber", "dann", "Dann","amn", "da", "sein", "noch", "Noch","nach", "was", "Was", "also", "aus", "all", "wenn", "Wenn","nur", "müssen", "Müssen","sagen", "um", "über", "machen", "Machen", "kein", "jahr", "Jahr","du", "mein", "schon", "Schon", "vor", "durch", "Durch","geben", "mehr", "andere", "viel", "Viel","kommen", "jetzt", "Jetzt","sollen", "mir", "wollen", "ganz", "mich", "immer", "gehen", "Gehen","sehr", "hier", "doch", "bis", "groß", "wieder", "mal", "zwei", "Zwei","gut", "Gut","wissen", "neu", "sehen", "lassen", "Lassen","uns", "weil", "unter", "denn", "stehen", "jede", "beispiel", "Beispiel","zeit", "erste", "ihm", "ihn", "wo", "lang", "eigentlich", "damit", "Damit","selbst", "unser", "Unser","oben"]

const spaWordsEasy = ["que", "de", "no", "a", "la", "el", "es", "y", "en", "lo", "un", "por", "qué", "me", "una", "te", "los", "se", "con", "para", "mi", "está", "si", "bien", "pero", "yo", "eso", "las", "sí", "su", "tu", "aquí", "del", "al", "como", "le", "más", "esto", "ya", "todo", "esta", "vamos", "muy", "hay", "ahora", "algo", "estoy", "tengo", "nos", "tú", "nada", "cuando", "ha", "este", "sé", "estás", "así", "puedo", "cómo", "quiero", "sólo", "soy", "tiene", "gracias", "o", "él", "bueno", "fue", "ser", "hacer", "son", "todos", "era", "eres", "vez", "tienes", "creo", "ella", "he", "ese", "voy", "puede", "sabes", "hola", "sus", "porque", "quién", "nunca", "dios", "dónde", "quieres", "casa", "favor", "esa", "dos", "tan", "señor", "tiempo", "verdad", "estaba"]
const spaWordsMedium = ["que", "Que", "de", "De", "no", "No","a", "A","la", "El","el", "Es","es", "y", "en", "lo", "un", "Por","por", "Qué","qué", "Me","me", "Una","una", "Te","te", "Los","los", "Se","se", "con", "Para","para", "mi", "Está","está", "Si","si", "Bien","bien", "Pero","pero", "Yo","yo", "Eso","eso", "Las","las", "Sí","sí", "su", "Tu","tu", "Aquí","aquí", "Del","del", "al", "Como","como", "le", "Más","más", "esto", "ya", "Todo","todo", "esta", "Vamos","vamos", "Muy","muy", "hay", "ahora", "algo", "Estoy","estoy", "Tengo","tengo", "nos", "tú", "Nada","nada", "cuando", "ha", "este", "sé", "Estás","estás", "así", "puedo", "Cómo","cómo", "quiero", "Sólo","sólo", "soy", "tiene", "Gracias","gracias", "o", "él", "Bueno","bueno", "fue", "ser", "Hacer","hacer", "son", "todos", "era", "eres", "vez", "Tienes","tienes", "Creo","creo", "ella", "he", "ese", "voy", "Puede","puede", "sabes", "Hola","hola", "sus", "Porque","porque", "quién", "Nunca","nunca", "dios", "dónde", "Quieres","quieres", "casa", "favor", "esa", "dos", "tan", "Señor","señor", "tiempo", "Verdad","verdad", "estaba"]

const porWordsEasy = ["pra", "também", "vocês", "quê", "algo", "obrigado", "dia", "esse", "lhe", "este", "ir", "deus", "essa", "oh", "melhor", "ainda", "temos", "cara", "sem", "pai", "sempre", "vida", "vez", "homem", "estamos", "talvez", "mãe", "anos", "alguém", "depois", "verdade", "claro", "boa", "nem", "pouco", "ficar", "coisas", "aí", "tinha", "dois", "falar", "deve", "antes", "pelo", "faz", "parece", "todo", "dele", "pessoas", "fora", "lugar", "apenas", "ei", "fazendo", "ninguém", "dinheiro", "acha", "vá", "comigo", "mundo", "preciso", "qual", "grande", "estar", "alguma", "hoje", "trabalho", "suas", "dar", "seja", "disso", "fez", "nome", "será", "novo", "filho", "outro", "qualquer", "quanto", "saber", "vão", "meus", "queria", "ok", "podemos", "nossa", "poderia", "outra", "olá", "precisa", "venha", "nosso", "mulher", "sinto", "desculpe", "toda", "diga", "hora", "daqui", "amor"]
const porWordsMedium = ["pra", "Também","também", "vocês","Vocês", "Quê","quê", "algo","Algo", "obrigado","Obrigado","dia", "Esse","esse", "lhe", "este", "ir", "deus","Deus", "essa", "oh", "melhor","Melhor", "ainda", "temos","Temos", "cara","Cara", "sem", "pai", "sempre", "Sempre","vida", "vez", "homem","Homem", "estamos", "Talvez","talvez", "mãe", "anos", "Slguém","alguém", "depois", "Verdade","verdade", "claro", "boa", "nem", "Pouco","pouco", "ficar","Ficar", "coisas","Coisas", "aí", "tinha","Tinha", "dois", "falar", "deve", "antes", "Antes","pelo", "faz", "parece", "todo", "dele","Dele", "pessoas", "fora", "lugar","Lugar", "apenas", "ei", "fazendo","Fazendo", "ninguém", "dinheiro","Dinheiro", "acha", "vá", "comigo", "mundo", "preciso", "Preciso","qual", "grande", "estar", "alguma","Alguma", "hoje", "trabalho","Trabalho", "suas", "dar", "seja","Seja", "disso", "fez", "nome", "Será","será", "novo", "filho","Filho", "outro", "qualquer","Qualquer", "quanto", "saber", "vão","Vão", "meus", "queria", "ok", "podemos","Podemos", "nossa", "poderia", "outra", "olá","Olá", "precisa", "venha", "nosso","Nosso", "mulher", "sinto", "desculpe","Desculpe", "toda", "diga","Diga", "hora", "daqui","Daqui", "amor"]

const lettersEngEasy = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const lettersEngMedium = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const lettersUaEasy = ["а","б","в","г","ґ","д","е","є","ж","з","и","і","ї","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ь","ю","я"]
const lettersUaMedium = ["а","б","в","г","ґ","д","е","є","ж","з","и","і","ї","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ь","ю","я","А","Б","В","Г","Ґ","Д","Е","Є","Ж","З","И","І","Ї","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Ч","Ц","Ч","Ш","Щ","Ь","Ю","Я"]

const lettersGerEasy = ["ä","ö","ü","ß","a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const lettersGerMedium = ["ä","ö","ü","ß","Ä","Ö","Ü","ẞ","a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const lettersSpaEasy = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
const lettersSpaMedium = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const lettersPorEasy = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const lettersPorMedium = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const punctuation = [",",".",";",":","?","!"]

const numberpack = [0,1,2,3,4,5,6,7,8,9]


let textArea = document.getElementById("textArea"),
    replayButton = document.getElementById("replayButton"),
    cover = document.getElementById("cover")


let diffEasy = document.getElementById("diffEasy"),
    diffMedium = document.getElementById("diffMedium"),
    diffHard = document.getElementById("diffHard")

let langEng = document.getElementById("langEng"),
    langUA = document.getElementById("langUA"),
    langGer = document.getElementById("langGer"),
    langEs = document.getElementById("langEs"),
    langPor = document.getElementById("langPor")

let words = document.getElementById("words"),
    letters = document.getElementById("letters"),
    numbers = document.getElementById("numbers"),
    mode = document.getElementById("mode"),
    difficulty = document.getElementById("difficulty")

function textGen(array, len){
    text = ""
    if (len == null){
        len = 80
    }

    for(let i = 0; i <=len; i++){
        rng = Math.floor(Math.random() * array.length)
        text += array[rng] + " "
    }
    text = text.slice(0, -1)

    textArea.textContent = text
    textArea.value = text
}

function textGenHard(array, len){
    text = ""
    if (len == null){
        len = 70
    }

    for(let i = 0; i <=len; i++){
        rng = Math.floor(Math.random() * array.length)
        rng2 = Math.floor(Math.random() * punctuation.length)
        if(Math.floor(Math.random()*10)>=7){
            text += array[rng]
            text += punctuation[rng2] + " "
        }else{
            text += array[rng] + " "
        }
    }
    text = text.slice(0, -1)

    textArea.textContent = text
    textArea.value = text
}

function numberGen(array){
    text = ""

    for(let i = 0; i <=200; i++){
        rng = Math.floor(Math.random() * array.length)
        text += array[rng]
        if(Math.floor(Math.random()*10)>=6){
            text += " "
        }
    }
    text = text.slice(0, -1)

    textArea.textContent = text
    textArea.value = text
}

function numberGenMed(array){
    text = ""

    for(let i = 0; i <=200; i++){
        rng = Math.floor(Math.random() * array.length)
        text += array[rng]
        if(Math.floor(Math.random()*10)>=6){
            text += "."
        }
        if(Math.floor(Math.random()*10)>=6){
            text += " "
        }
    }
    text = text.slice(0, -1)

    textArea.textContent = text
    textArea.value = text
}

function numberGenHard(array){
    text = ""

    for(let i = 0; i <=200; i++){
        rng = Math.floor(Math.random() * array.length)
        text += array[rng]
        if(Math.floor(Math.random()*10)>=6){
            if(Math.floor(Math.random()*10)>=5){
                text += "."
            }else{
                text += ","
            }
        }
        if(Math.floor(Math.random()*10)>=6){
            text += " "
        }
    }
    text = text.slice(0, -1)

    textArea.textContent = text
    textArea.value = text
}

function generate(){
    if(words.checked){
        if(diffEasy.checked){
            if(langEng.checked){
                textGen(engWordsEasy)
            }else if(langUA.checked){
                textGen(uaWordsEasy)
            }else if(langGer.checked){
                textGen(gerWordsEasy)
            }else if(langEs.checked){
                textGen(spaWordsEasy)
            }else if(langPor.checked){
                textGen(porWordsEasy)
            }
        }else if(diffMedium.checked){
            if(langEng.checked){
                textGen(engWordsMedium)
            }else if(langUA.checked){
                textGen(uaWordsMedium)
            }else if(langGer.checked){
                textGen(gerWordsMedium)
            }else if(langEs.checked){
                textGen(spaWordsMedium)
            }else if(langPor.checked){
                textGen(porWordsMedium)
            }
        }else if(diffHard.checked){
            if(langEng.checked){
                textGenHard(engWordsMedium)
            }else if(langUA.checked){
                textGenHard(uaWordsMedium)
            }else if(langGer.checked){
                textGenHard(gerWordsMedium)
            }else if(langEs.checked){
                textGenHard(spaWordsMedium)
            }else if(langPor.checked){
                textGenHard(porWordsMedium)
            }
        }
    }else if(letters.checked){
        if(diffEasy.checked){
            if(langEng.checked){
                textGen(lettersEngEasy, 200)
            }else if(langUA.checked){
                textGen(lettersUaEasy, 200)
            }else if(langGer.checked){
                textGen(lettersGerEasy, 200)
            }else if(langEs.checked){
                textGen(lettersSpaEasy, 200)
            }else if(langPor.checked){
                textGen(lettersPorEasy, 200)
            }
        }else if(diffMedium.checked){
            if(langEng.checked){
                textGen(lettersEngMedium, 200)
            }else if(langUA.checked){
                textGen(lettersUaMedium, 200)
            }else if(langGer.checked){
                textGen(lettersGerMedium, 200)
            }else if(langEs.checked){
                textGen(lettersSpaMedium, 200)
            }else if(langPor.checked){
                textGen(lettersPorMedium, 200)
            }
        }else if(diffHard.checked){
            if(langEng.checked){
                textGenHard(lettersEngMedium, 200)
            }else if(langUA.checked){
                textGenHard(lettersUaMedium, 200)
            }else if(langGer.checked){
                textGenHard(lettersGerMedium, 200)
            }else if(langEs.checked){
                textGenHard(lettersSpaMedium, 200)
            }else if(langPor.checked){
                textGenHard(lettersPorMedium, 200)
            }
        }
    }else if(numbers.checked){
        if(diffEasy.checked){
            numberGen(numberpack)
        }else if(diffMedium.checked){
            numberGenMed(numberpack)
        }else if(diffHard.checked){
            numberGenHard(numberpack)
        } 
    }
}

generate()

function resetLogic(){
        cover.classList.add("hidden")
        generate()
        clearTimeout(to)
        clearInterval(lvt)
        inputText.value = ""
        inputVerify.textContent = ""
        inputCount = -1
        correctInput = 0
        wrongInput = 0
        graphCorrect = []
        graphWrong = []

        if(time15.checked){
            timeVal = 15
            timer.textContent = 15
        }else if(time30.checked){
            timeVal = 30
            timer.textContent = 30
        }else if(time60.checked){
            timeVal = 60
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
            
        }, {once:true})
}

replayButton.addEventListener("click", function(event){
    event.preventDefault()
    resetLogic()
})

document.addEventListener('keydown', function(event){
    if (event.key === "F2"){
        resetLogic()
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

words.addEventListener("click", function(){
    generate()
})

letters.addEventListener("click", function(){
    generate()
})

numbers.addEventListener("click", function(){
    generate()
})

let inputText = document.getElementById("inputText")
let inputVerify = document.getElementById("inputVerify")
let verifier1 = document.getElementById("verifier1")
let verifier2 = document.getElementById("verifier2")

inputCount = -1
correctInput = 0
wrongInput = 0

utilKeys = ["Backspace","Tab","Meta" ,"Control", "Alt", "CapsLock", "Shift", "Enter", "F2", "F1", "F3", "F4"]


inputText.addEventListener("keydown", function(event){
    inputCount += 1
    
    if(verifier1.checked){

        
            if(utilKeys.includes(event.key)){ inputCount -= 1}
            else if(event.key == text[inputCount]){
                if(event.key == " "){
                    inputVerify.innerHTML += "<span class='correct writing-line invisible'>"+"!"+"</span>"
                }else{
                    inputVerify.innerHTML += "<span class='correct writing-line'>"+text[inputCount]+"</span>"
                }
                correctInput += 1
            }else if(event.key !== text[inputCount]){
                if(text[inputCount] == " "){
                    inputVerify.innerHTML += "<span class='wrong writing-line'>"+"!"+"</span>"
                }else{
                    inputVerify.innerHTML += "<span class='wrong writing-line'>"+text[inputCount]+"</span>"
                }
                wrongInput += 1
            } 

            if(event.key == "Backspace"){
                if(inputVerify.children[inputVerify.children.length-1].classList.contains("correct")){
                    correctInput -= 1
                }else if(inputVerify.children[inputVerify.children.length-1].classList.contains("wrong")){
                    wrongInput -= 1
                }
                
                inputVerify.children[inputVerify.children.length-1].remove()
                inputVerify.children[inputVerify.children.length-1].classList.add("writing-line")
                inputCount -= 1
            }
        

        if(inputCount>0){
            inputVerify.getElementsByTagName("span")[inputCount-1].classList.remove("writing-line")
            if(text[inputCount-1] == " "){
                inputVerify.getElementsByTagName("span")[inputCount-1].textContent = " "
                inputVerify.getElementsByTagName("span")[inputCount-1].classList.remove("invisible")
            }
        }
    

        
    }else if(verifier2.checked){
        if(utilKeys.includes(event.key)){ inputCount -= 1 }
        else if(event.key == text[inputCount]){
            if(event.key == " "){
                inputVerify.innerHTML += "<span class='correct writing-line invisible'>"+"!"+"</span>"
            }else{
                inputVerify.innerHTML += "<span class='correct writing-line'>"+text[inputCount]+"</span>"
            }
            correctInput += 1
        }else{
         inputVerify.innerHTML += "<span class='wrong writing-line'>"+event.key+"</span>"
            wrongInput += 1
        }

        if(event.key == "Backspace"){
            if(inputVerify.children[inputVerify.children.length-1].classList.contains("correct")){
                correctInput -= 1
            }else if(inputVerify.children[inputVerify.children.length-1].classList.contains("wrong")){
                wrongInput -= 1
            }
            
            inputVerify.children[inputVerify.children.length-1].remove()
            inputVerify.children[inputVerify.children.length-1].classList.add("writing-line")
            inputCount -= 1
        }

        if(inputCount>0){
        inputVerify.getElementsByTagName("span")[inputCount-1].classList.remove("writing-line")
            if(inputVerify.getElementsByTagName("span")[inputCount-1].classList.contains("wrong")){
                inputVerify.getElementsByTagName("span")[inputCount-1].textContent = text[inputCount-1]
            }

            if(text[inputCount-1] == " "){
                inputVerify.getElementsByTagName("span")[inputCount-1].textContent = " "
                inputVerify.getElementsByTagName("span")[inputCount-1].classList.remove("invisible")
            }
        }

    }

    inputText.addEventListener("keyup", function(){
        if(text.length == inputText.value.length){
            generate()
            inputCount = -1
            inputText.value = ""
            inputVerify.textContent = ""
        }
    })
        
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
    cover.classList.remove("hidden")

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
    
    to = setTimeout(function(){resultModal.classList.remove("hidden")
        inputText.blur()
        cover.classList.add("hidden")
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

        if(diffEasy.checked){
            difficulty.textContent = "Easy"
        }else if(diffMedium.checked){
            difficulty.textContent = "Medium"
        }else if(diffHard.checked){
            difficulty.textContent = "Hard"
        }

        if(words.checked){
            mode.textContent = "Words"
        }else if(letters.checked){
            mode.textContent = "Letters"
        }else if(numbers.checked){
            mode.textContent = "Numbers"
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
let inputActivate = document.getElementById("inputActivate")

langEng.addEventListener("click", function(){
    generate()
    langText.textContent = "Eng"
})

langUA.addEventListener("click", function(){
    generate()
    langText.textContent = "Ua"
})

langGer.addEventListener("click", function(){
    generate()
    langText.textContent = "Ger"
})

langEs.addEventListener("click", function(){
    generate()
    langText.textContent = "Es"
})

langPor.addEventListener("click", function(){
    generate()
    langText.textContent = "Pt"
})

inputActivate.addEventListener("click", function(){
    inputActivate.style = "display: none"
    inputText.focus()
})

inputText.addEventListener("focusout", function(){
    inputActivate.style = "display: flex"
})