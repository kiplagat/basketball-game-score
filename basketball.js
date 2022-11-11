let score = 0;
function incrementHomeByOne(){
    score += 1
 document.getElementById("counter1").innerText = score
}
function incrementHomeByTwo(){
    score += 2
 document.getElementById("counter1").innerText = score
}

function incrementHomeByThree(){
    score += 3
 document.getElementById("counter1").innerText = score
}

function incrementGuestByOne(){
    score += 1
    document.getElementById("counter2").innerText = score
   }
   function incrementGuestByTwo(){
    score += 2
    document.getElementById("counter2").innerText = score
   }
   
   function incrementGuestByThree(){
    score += 3
    document.getElementById("counter2").innerText = score
   }
   function scoreClear(){
    document.getElementById("counter1").innerText = ""
    document.getElementById("counter2").innerText = ""
    score = 0

   }
