var score = 0
var timerRate = 30
var xrl = 255
var xgl = 0
var xbl = 0
var xrr = 0
var xgr = 0
var xbr = 255
var color = 3

function rand(){
  return Math.round(Math.random()*255)
}

function setBg(rl,gl,bl,rr,gr,br){
  document.getElementById("body").style.background = "linear-gradient(90deg, rgba("+rl+","+gl+","+bl+",1) 0%, rgba("+rr+","+gr+","+br+",1) 100%)"
  xrl = rl
  xgl = gl
  xbl = bl
  xrr = rr
  xgr = gr
  xbr = br
  color = Math.round(Math.random())

  if (color == 0){ //center = left color
    document.getElementById("center").style.background = "rgb("+xrl+","+xgl+","+xbl+")"
  }

  if (color == 1){ //center = right color
    document.getElementById("center").style.background = "rgb("+xrr+","+xgr+","+xbr+")"
  }
}

function randomize(){
  setBg(rand(),rand(),rand(),rand(),rand(),rand())
}

document.onkeydown = checkKey;
function checkKey(e) { //space to start
  e = e || window.event;
  if (e.keyCode == 32){
    if (color == 3){
      randomize()
      timer()
      document.getElementById("disp").innerHTML = 0
    }
  } 
  if (e.keyCode == '37') { //left
   if (color == 0){
     score++
     document.getElementById("disp").innerHTML = score
     width = 50
     document.getElementById("b").style.width = width+"vw"
     timerRate *= 0.97
     randomize()
   }
   else if (color == 1) {
     document.getElementById("center").style.background = "white"
     document.getElementById("body").style.background = "red"
     document.getElementById("disp").innerHTML = score + " - game over, press R to reset"
     color = 2
   }
  }
  else if (e.keyCode == '39') { //right
   if (color == 1){
     score++
     document.getElementById("disp").innerHTML = score
     width = 50
     document.getElementById("b").style.width = width+"vw"
     timerRate *= 0.97
     randomize()
   }
   else if (color == 0){
     document.getElementById("center").style.background = "white"
     document.getElementById("body").style.background = "red"
     document.getElementById("disp").innerHTML = score + " - game over, press R to reset"
     color = 2
   }
  }
  else if (e.keyCode == '82'){ //R
    if (color == 2){
     console.log("resetting")
     window.location.href = window.location.href
    }
  }
}
document.getElementById("b").style.width = "4px"
width = 50
function timer(){
  if (width >= 0){
    width -= 0.5
    document.getElementById("b").style.width = width+"vw"
    setTimeout(timer,timerRate)
  }
  else if (width <= 0){
    document.getElementById("center").style.background = "white"
    document.getElementById("body").style.background = "red"
    document.getElementById("disp").innerHTML = score + " - game over, press R to reset"
    color = 2
  }
}