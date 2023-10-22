// this is my first java script code 

console.log('bonjour mon amie!');

let addToDoButten = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addToDoButten.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraphe-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})

var starting=document.getElementById('starting')

starting.addEventListener('click',function(){
    if(starting.value=="START"){
        starting.value ="";
        starting.value="STOP"
    }
    else{
        starting.value ="";
        starting.value="START"
    }
})

function startF(){
if(starting.value=="START"){
const startingMinutes =5;
let time =startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown,1000);
function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds = time %60;

    seconds=seconds < 10 ? '0' + seconds:seconds;

    countdownEl.innerHTML =`0${minutes}:${seconds}`;
    time--;
}
}
}


var selectField=document.getElementById("selectField")
var selectText=document.getElementById("selectText")
var options =document.getElementsByClassName("options")
var list=document.getElementById("list")


selectText.onclick = function(){
    list.classList.toggle("hide");
    
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        
    }
}