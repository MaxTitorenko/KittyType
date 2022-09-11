dragElement(document.getElementById("keyboard"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "keyboardDrag")) {
    document.getElementById(elmnt.id + "keyboardDrag").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let keyQ = document.getElementById("keyQ"),
    keyW = document.getElementById("keyW"),
    keyE = document.getElementById("keyE"),
    keyR = document.getElementById("keyR"),
    keyT = document.getElementById("keyT"),
    keyY = document.getElementById("keyY"),
    keyU = document.getElementById("keyU"),
    keyI = document.getElementById("keyI"),
    keyO = document.getElementById("keyO"),
    keyP = document.getElementById("keyP"),
    keyP1 = document.getElementById("key["),
    keyP2 = document.getElementById("key]"),
    keyA = document.getElementById("keyA"),
    keyS = document.getElementById("keyS"),
    keyD = document.getElementById("keyD"),
    keyF = document.getElementById("keyF"),
    keyG = document.getElementById("keyG"),
    keyH = document.getElementById("keyH"),
    keyJ = document.getElementById("keyJ"),
    keyK = document.getElementById("keyK"),
    keyL = document.getElementById("keyL"),
    keyL1 = document.getElementById("key;"),
    keyL2 = document.getElementById("key'"),
    keyZ = document.getElementById("keyZ"),
    keyX = document.getElementById("keyX"),
    keyC = document.getElementById("keyC"),
    keyV = document.getElementById("keyV"),
    keyB = document.getElementById("keyB"),
    keyN = document.getElementById("keyN"),
    keyM = document.getElementById("keyM"),
    keyM1 = document.getElementById("key,"),
    keyM2 = document.getElementById("key."),
    keyM3 = document.getElementById("key?"),
    keySpace = document.getElementById("keySpace")
 
    document.addEventListener("keydown", function(event){
      if (event.key === "q" || event.key === "Q"){
        keyQ.style.animation="keyPress .2s linear running"
      }

      if (event.key === "w" || event.key === "W"){
        keyW.style.animation="keyPress .2s linear running"
      }

      if (event.key === "e" || event.key === "E"){
        keyE.style.animation="keyPress .2s linear running"
      }

      if (event.key === "r" || event.key === "R"){
        keyR.style.animation="keyPress .2s linear running"
      }

      if (event.key === "t" || event.key === "T"){
        keyT.style.animation="keyPress .2s linear running"
      }

      if (event.key === "y" || event.key === "Y"){
        keyY.style.animation="keyPress .2s linear running"
      }

      if (event.key === "u" || event.key === "U"){
        keyU.style.animation="keyPress .2s linear running"
      }

      if (event.key === "i" || event.key === "I"){
        keyI.style.animation="keyPress .2s linear running"
      }

      if (event.key === "o" || event.key === "O"){
        keyO.style.animation="keyPress .2s linear running"
      }

      if (event.key === "p" || event.key === "P"){
        keyP.style.animation="keyPress .2s linear running"
      }

      if (event.key === "[" || event.key === "{"){
        keyP1.style.animation="keyPress .2s linear running"
      }

      if (event.key === "]" || event.key === "}"){
        keyP2.style.animation="keyPress .2s linear running"
      }

      if (event.key === "a" || event.key === "A"){
        keyA.style.animation="keyPress .2s linear running"
      }

      if (event.key === "s" || event.key === "S"){
        keyS.style.animation="keyPress .2s linear running"
      }

      if (event.key === "d" || event.key === "D"){
        keyD.style.animation="keyPress .2s linear running"
      }

      if (event.key === "f" || event.key === "F"){
        keyF.style.animation="keyPress .2s linear running"
      }

      if (event.key === "g" || event.key === "G"){
        keyG.style.animation="keyPress .2s linear running"
      }

      if (event.key === "h" || event.key === "H"){
        keyH.style.animation="keyPress .2s linear running"
      }

      if (event.key === "j" || event.key === "J"){
        keyJ.style.animation="keyPress .2s linear running"
      }

      if (event.key === "k" || event.key === "K"){
        keyK.style.animation="keyPress .2s linear running"
      }

      if (event.key === "l" || event.key === "L"){
        keyL.style.animation="keyPress .2s linear running"
      }

      if (event.key === ";" || event.key === ":"){
        keyL1.style.animation="keyPress .2s linear running"
      }

      if (event.key === "'" || event.key === '"'){
        keyL2.style.animation="keyPress .2s linear running"
      }

      if (event.key === "z" || event.key === "Z"){
        keyZ.style.animation="keyPress .2s linear running"
      }

      if (event.key === "x" || event.key === "X"){
        keyX.style.animation="keyPress .2s linear running"
      }

      if (event.key === "c" || event.key === "C"){
        keyC.style.animation="keyPress .2s linear running"
      }

      if (event.key === "v" || event.key === "V"){
        keyV.style.animation="keyPress .2s linear running"
      }

      if (event.key === "b" || event.key === "B"){
        keyB.style.animation="keyPress .2s linear running"
      }

      if (event.key === "n" || event.key === "N"){
        keyN.style.animation="keyPress .2s linear running"
      }

      if (event.key === "m" || event.key === "M"){
        keyM.style.animation="keyPress .2s linear running"
      }

      if (event.key === ","){
        keyM1.style.animation="keyPress .2s linear running"
      }

      if (event.key === "."){
        keyM2.style.animation="keyPress .2s linear running"
      }

      if (event.key === "/" || event.key === "?"){
        keyM3.style.animation="keyPress .2s linear running"
      }

      if (event.key === " "){
        keySpace.style.animation="keyPress .2s linear running"
      }
    })

    document.addEventListener("keyup", function(event){
      if (event.key === "q" || event.key === "Q"){
        keyQ.style.animation="none"
      }

      if (event.key === "w" || event.key === "W"){
        keyW.style.animation="none"
      }

      if (event.key === "e" || event.key === "E"){
        keyE.style.animation="none"
      }

      if (event.key === "r" || event.key === "R"){
        keyR.style.animation="none"
      }

      if (event.key === "t" || event.key === "T"){
        keyT.style.animation="none"
      }

      if (event.key === "y" || event.key === "Y"){
        keyY.style.animation="none"
      }

      if (event.key === "u" || event.key === "U"){
        keyU.style.animation="none"
      }

      if (event.key === "i" || event.key === "I"){
        keyI.style.animation="none"
      }

      if (event.key === "o" || event.key === "O"){
        keyO.style.animation="none"
      }

      if (event.key === "p" || event.key === "P"){
        keyP.style.animation="none"
      }

      if (event.key === "[" || event.key === "{"){
        keyP1.style.animation="none"
      }

      if (event.key === "]" || event.key === "}"){
        keyP2.style.animation="none"
      }

      if (event.key === "a" || event.key === "A"){
        keyA.style.animation="none"
      }

      if (event.key === "s" || event.key === "S"){
        keyS.style.animation="none"
      }

      if (event.key === "d" || event.key === "D"){
        keyD.style.animation="none"
      }

      if (event.key === "f" || event.key === "F"){
        keyF.style.animation="none"
      }

      if (event.key === "g" || event.key === "G"){
        keyG.style.animation="none"
      }

      if (event.key === "h" || event.key === "H"){
        keyH.style.animation="none"
      }

      if (event.key === "j" || event.key === "J"){
        keyJ.style.animation="none"
      }

      if (event.key === "k" || event.key === "K"){
        keyK.style.animation="none"
      }

      if (event.key === "l" || event.key === "L"){
        keyL.style.animation="none"
      }

      if (event.key === ";" || event.key === ":"){
        keyL1.style.animation="none"
      }

      if (event.key === "'" || event.key === '"'){
        keyL2.style.animation="none"
      }

      if (event.key === "z" || event.key === "Z"){
        keyZ.style.animation="none"
      }

      if (event.key === "x" || event.key === "X"){
        keyX.style.animation="none"
      }

      if (event.key === "c" || event.key === "C"){
        keyC.style.animation="none"
      }

      if (event.key === "v" || event.key === "V"){
        keyV.style.animation="none"
      }

      if (event.key === "b" || event.key === "B"){
        keyB.style.animation="none"
      }

      if (event.key === "n" || event.key === "N"){
        keyN.style.animation="none"
      }

      if (event.key === "m" || event.key === "M"){
        keyM.style.animation="none"
      }

      if (event.key === ","){
        keyM1.style.animation="none"
      }

      if (event.key === "."){
        keyM2.style.animation="none"
      }

      if (event.key === "/" || event.key === "?"){
        keyM3.style.animation="none"
      }

      if (event.key === " "){
        keySpace.style.animation="none"
      }
    })