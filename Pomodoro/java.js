
//to do list and and goals
var body = document.getElementById('body');
var thepomodoro = document.getElementById('thepomodoro');
var theheader = document.getElementById('theheader');
var addToDo = document.getElementById('addToDo');
var tasks = document.getElementById('tasks');
var thetitle = document.getElementById('thetitle');
var theheader = document.getElementById('theheader');
var tasks = document.getElementById('tasks');
var sidebar = document.getElementById('sidebar');
var goals = document.getElementById('goals');
var todoContainer = document.getElementById('todoContainer');
var colors = document.getElementById('colors');
var importansyQuestion = document.getElementById('importansy-question');
var important = document.getElementById('important');
var medium = document.getElementById('medium');
var notAdeal = document.getElementById('not-a-deal');
var importantTasks = document.getElementById('important-tasks');
var notABigDealTasks = document.getElementById('not-a-big-deal-tasks');
var mediumTasks = document.getElementById('medium-tasks');
var notesheader = document.getElementById('notesheader');
var headerp = document.getElementById('headerp');
var notesArrow1 = document.getElementById('notes-arrow-1');
var notesArrow2 = document.getElementById('notes-arrow-2');
var openNotes = document.getElementById('open-notes');
var addnote = document.getElementById('addnote');
var designingYourNote = document.getElementById('designing-your-note');
var closeNote = document.getElementById('closeNote');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var saveNote = document.getElementById('saveNote');
var choosenColorsDiv = document.getElementById('choosenColorsDiv');
var choosenColors = document.getElementById('choosenColors');
var notesContainer = document.getElementById('notesContainer');
var createdNoteTitle = document.getElementById('noteTitle');
var createdNoteContent = document.getElementById('noteContent')
var writeNoteAlert = document.getElementById('writeNoteAlert');
var moreAboutNotes = document.getElementById('moreAboutNotes');
var editNote = document.getElementById('editNote');
var changeNoteColor = document.getElementById('changeNoteColor');
var saveEdit = document.getElementById('saveEdit');
var  Delete = document.getElementById('delete');
var mouseClick = document.getElementById('mouseClick');
var mouseClick2 = document.getElementById('mouseClick2');
var mouseClick3 = document.getElementById('mouseClick3');
var mouseClick4 = document.getElementById('mouseClick4');
var selectedPomoNumber = document.getElementById('selectedPomoNumber');
var PomoNumberAlert = document.getElementById('PomoNumberAlert');

var c="#A8DADC"
var id = 0;
var idImg=-1;
var hid =1;
var pid=2;


function moreabout(thisNote){
    var idN=Number(thisNote.id)+1;
    var HnoteId=Number(thisNote.id)+2;
    var PnoteId=Number(thisNote.id)+3;
    var NoteId = document.getElementById(idN);
    var Hnote = document.getElementById(HnoteId);
    var Pnote = document.getElementById(PnoteId);

    editNote.style.bottom="60%"
    changeNoteColor.style.bottom="50%"
    Delete.style.bottom="40%"
    editNote.style.visibility="visible"
    changeNoteColor.style.visibility="visible"
    Delete.style.visibility="visible"
    importansyQuestion.style.opacity="0.55";
    importansyQuestion.style.zIndex="98";
    Delete.addEventListener('click' , function(){
        NoteId.remove();
        editNote.style.bottom="-50%"
        changeNoteColor.style.bottom="-50%"
        Delete.style.bottom="-50%"
        importansyQuestion.style.opacity="0";
        importansyQuestion.style.zIndex="0";
        editNote.style.visibility="hidden";
        changeNoteColor.style.visibility="hidden";
        Delete.style.visibility="hidden";
    })
    editNote.addEventListener('click' , function(){
        designingYourNote.style.top="50%";
        saveEdit.style.bottom="7%"
        saveEdit.style.visibility="visible";
        editNote.style.bottom="-50%"
        changeNoteColor.style.bottom="-50%"
        Delete.style.bottom="-50%"
        editNote.style.visibility="hidden";
        changeNoteColor.style.visibility="hidden";
        Delete.style.visibility="hidden";
        createdNoteTitle.value=Hnote.value
        createdNoteContent.value=Pnote.value
        // createdNoteTitle.addEventListener("keydown" , function(){
        //     Hnote.innerText=createdNoteTitle.value
        // })
        // createdNoteContent.addEventListener("keypress" , function(){
        //     Pnote.innerText=createdNoteTitle.value
        // })
        saveEdit.addEventListener('click' , function(){
            var HnoteId=Number(thisNote.id)+2;
            var PnoteId=Number(thisNote.id)+3;
            let Hnote = document.getElementById(HnoteId);
            let Pnote = document.getElementById(PnoteId);

            // alert("title :"+createdNoteTitle.value)
            // alert("content :"+createdNoteContent.value)
            
            Hnote.value=createdNoteTitle.value;
            Pnote.value=createdNoteContent.value;
            Hnote.innerText=createdNoteTitle.value;
            Pnote.innerText=createdNoteContent.value;
            createdNoteTitle.value=""
            createdNoteContent.value=""

            saveEdit.style.bottom="-50%";
            importansyQuestion.style.opacity="0";
            importansyQuestion.style.zIndex="0";
            designingYourNote.style.top="-50%";
            saveNote.style.bottom="-50%"
            saveNote.style.transition="0.7s";
            writeNoteAlert.style.top="-50%";
        })
    })
}
function linethrought(goal){
    if(goal.style.textDecoration!="line-through"){
        goal.style.textDecoration="line-through";
    }else{
        goal.style.textDecoration="none";
    }
}
function deletegoal(goal){
    goal.remove()
}
importansyQuestion.addEventListener('click' , function(){
    importansyQuestion.style.opacity="0";
    importansyQuestion.style.zIndex="0";
    designingYourNote.style.top="-50%";
    saveNote.style.bottom="-50%"
    saveNote.style.transition="0.7s";
    saveNote.style.visibility="hidden";
    writeNoteAlert.style.top="-50%";
    colors.style.top="-50%";
    editNote.style.bottom="-50%";
    changeNoteColor.style.bottom="-50%";
    Delete.style.bottom="-50%";
    editNote.style.visibility="hidden";
    changeNoteColor.style.visibility="hidden";
    Delete.style.visibility="hidden";
    saveEdit.style.bottom="-50%"
    saveEdit.style.visibility="hidden";
})
color1.addEventListener('click' , function(){
    mouseClick4.play();
    choosenColorsDiv.style.top="0";
    choosenColors.style.backgroundColor="#E63946";
    c="#E63946";
    color1.style.borderColor="F1FAEE";
})
color2.addEventListener('click' , function(){
    mouseClick4.play();
    choosenColorsDiv.style.top="0";
    c="#A8DADC";
    choosenColors.style.backgroundColor="#A8DADC";
    color1.style.borderColor="F1FAEE";
})
color3.addEventListener('click' , function(){
    mouseClick4.play();
    choosenColorsDiv.style.top="0";
    c="#457B9D";
    choosenColors.style.backgroundColor="#457B9D";
    color1.style.borderColor="F1FAEE";
})
color4.addEventListener('click' , function(){
     mouseClick4.play();
    choosenColorsDiv.style.top="0";
    c="#1D3557";
    choosenColors.style.backgroundColor="#1D3557";
    color1.style.borderColor="F1FAEE";
})
color5.addEventListener('click' , function(){
     mouseClick4.play();
    choosenColorsDiv.style.top="0";
    c="#FFA9A3";
    choosenColors.style.backgroundColor="#FFA9A3";
    color1.style.borderColor="F1FAEE";
})  
// create a new note
saveNote.addEventListener('click' , function(){
if((createdNoteTitle.value=="") || (createdNoteContent.value=="")){
    writeNoteAlert.style.top="0";
}else{
    mouseClick2.play();

    var divNote = document.createElement('div');
    var navNote = document.createElement('nav');
    var h3Note = document.createElement('h3');
    var pNote = document.createElement('p');
    var NoteImg = document.createElement('img');
    
    NoteImg.setAttribute("onclick","moreabout(this)")

    divNote.style.backgroundColor=c;
    h3Note.value=createdNoteTitle.value;
    pNote.value=createdNoteContent.value;
    h3Note.innerText=createdNoteTitle.value;
    pNote.innerText=createdNoteContent.value;
    createdNoteTitle.value=""
    createdNoteContent.value=""
    NoteImg.src="more.png"
    id++
    idImg++
    hid++
    pid++
    divNote.setAttribute("id",id);
    NoteImg.setAttribute("id",idImg);
    h3Note.setAttribute("id",hid);
    pNote.setAttribute("id",pid);



    importansyQuestion.style.opacity="0";
    importansyQuestion.style.zIndex="0";
    designingYourNote.style.top="-50%";
    saveNote.style.bottom="-50%";
    choosenColorsDiv.style.top="-50%"
    writeNoteAlert.style.top="-50%";
    saveNote.style.visibility="hidden";

    navNote.appendChild(h3Note);
    navNote.appendChild(NoteImg);
    divNote.appendChild(navNote)
    divNote.appendChild(pNote);
    notesContainer.appendChild(divNote);
}
   

    
});
closeNote.addEventListener('click' ,function(){
    mouseClick3.play();
    choosenColorsDiv.style.top="-50%"
    writeNoteAlert.style.top="-50%";
    saveEdit.style.bottom="-50%";
    importansyQuestion.style.opacity="0";
    importansyQuestion.style.zIndex="0";
    designingYourNote.style.top="-50%";
    saveNote.style.bottom="-50%"
    saveNote.style.transition="0.7s";
    writeNoteAlert.style.top="-50%";
    saveEdit.style.visibility="hidden";
})
addnote.addEventListener('click' , function(){
    mouseClick.play();
    importansyQuestion.style.opacity="0.55";
    importansyQuestion.style.zIndex="98";
    designingYourNote.style.top="50%";
    saveNote.style.bottom="8%";
    saveNote.style.visibility="visible";
})
openNotes.addEventListener('click' , function(){
    notes.style.right="0";
    openNotes.style.right="-50%";
})
notesheader.addEventListener('mouseover' , function(){
    headerp.style.marginLeft="20px";
    notesArrow1.style.opacity="1";
    notesArrow2.style.opacity="1";
    notesArrow1.style.transform="rotate(-45deg)"
    notesArrow1.style.marginLeft="5px";
    notesArrow2.style.transform="rotate(45deg)"
    notesArrow2.style.marginLeft="-4px";
})
notesheader.addEventListener('mouseout' , function(){
    headerp.style.marginLeft="-15px";
    notesArrow1.style.opacity="0";
    notesArrow2.style.opacity="0";
    notesArrow1.style.transform="rotate(0)"
    notesArrow1.style.marginLeft="0";
    notesArrow2.style.transform="rotate(0)"
    notesArrow2.style.marginLeft="3px";
})
notesheader.addEventListener('click' , function(){
    notes.style.right="-50%"
    openNotes.style.right="0";
})


todoContainer.style.height="80%";
// task hide and review
tasks.addEventListener('click' , function(){
    if(todoContainer.style.height=="80%"){
        todoContainer.style.height="0"
    }else{
        todoContainer.style.height="80%"
    }
})
goals.addEventListener('focus' , function(){
    goals.style.width="85%";
})
// create a new goal by clicking enter

goals.addEventListener('keyup' , (e) =>{
    if(e.keyCode===13){
        mouseClick.play();
        importansyQuestion.style.opacity="0.55";
        importansyQuestion.style.zIndex="98";
        colors.style.top="50%"
    }
});
important.addEventListener('click' , function(){
    if(selectedPomoNumber.value!=0){
        mouseClick2.play();
        let navadded = document.createElement('nav');
        let span = document.createElement('span');
        let padded = document.createElement('p') ;
        let pomoNumber = document.createElement('small');

        pomoNumber.classList.add("pomoNumber");

        span.style.backgroundColor="#E63946"
        padded.value=goals.value;
        padded.innerText=goals.value;
        goals.value="";
        pomoNumber.innerText=selectedPomoNumber.value
        selectedPomoNumber.value="";
        navadded.setAttribute("ondblclick","deletegoal(this)");
        padded.setAttribute("onclick","linethrought(this)");


        navadded.appendChild(span);
        navadded.appendChild(padded);
        navadded.appendChild(pomoNumber);
        importantTasks.appendChild(navadded);
        importansyQuestion.style.opacity="0";
        importansyQuestion.style.zIndex="0";
        colors.style.top="-50%"
        todoContainer.style.height="80%";
    }else{
        PomoNumberAlert.style.top="0";
    }
});
medium.addEventListener('click' , function(){
    if(selectedPomoNumber.value==""){
        mouseClick2.play();
        let navadded = document.createElement('nav');
        let span = document.createElement('span');
        let padded = document.createElement('p') ;
        let pomoNumber = document.createElement('small');

        pomoNumber.classList.add("pomoNumber");

        span.style.backgroundColor="#80ED99"
        padded.value=goals.value;
        padded.innerText=goals.value;
        goals.value="";
        pomoNumber.innerText=selectedPomoNumber.value;
        selectedPomoNumber.value="";
        navadded.setAttribute("ondblclick","deletegoal(this)");
        padded.setAttribute("onclick","linethrought(this)");

        navadded.appendChild(span);
        navadded.appendChild(padded);
        navadded.appendChild(pomoNumber);
        mediumTasks.appendChild(navadded);
        importansyQuestion.style.opacity="0";
        importansyQuestion.style.zIndex="0";
        colors.style.top="-50%"
        todoContainer.style.height="80%";
    }else{
        PomoNumberAlert.style.top="0";
    }
});
notAdeal.addEventListener('click' , function(){
    if(selectedPomoNumber.value!=0){
        mouseClick2.play();
        let navadded = document.createElement('nav');
        let span = document.createElement('span');
        let padded = document.createElement('p') ;
        let pomoNumber = document.createElement('small');

        pomoNumber.classList.add("pomoNumber");

        span.style.backgroundColor="#011627";
        padded.value=goals.value;
        padded.innerText=goals.value;
        goals.value="";
        pomoNumber.innerText=selectedPomoNumber.value;
        selectedPomoNumber.value="";
        navadded.setAttribute("ondblclick","deletegoal(this)");
        padded.setAttribute("onclick","linethrought(this)");

        navadded.appendChild(span);
        navadded.appendChild(padded);
        navadded.appendChild(pomoNumber);
        notABigDealTasks.appendChild(navadded);
        importansyQuestion.style.opacity="0";
        importansyQuestion.style.zIndex="0";
        colors.style.top="-50%"
        todoContainer.style.height="80%";
    }else{
        PomoNumberAlert.style.top="0";   
    }
});



//start the time

                    // function startF(){
                    //     var countdownEl = document.getElementById("countdown");
                    //     var counting = countdownEl.innerText
                    //     counting = counting.substring(0,2)
                    // if(starting.value=="START"){
                    //     var startingMinutes =Number(counting);
                    //     let time =startingMinutes * 60;
                    //     setInterval(updateCountdown,1000);
                    //     function updateCountdown(){
                    //         let minutes=Math.floor(time/60);
                    //         let seconds = time %60;

                    //         seconds=seconds < 10 ? '0' + seconds:seconds;

                    //         countdownEl.innerHTML =`${minutes}:${seconds}`;

                    //         if(minutes==0 && seconds==0){
                    //             countdownEl.innerHTML =`${"05"}:${"00"}`;
                    //             starting.value="START"
                    //         }else{
                    //             time--;
                    //         }
                    //     }
                    // }else{
                    //     countdownEl.innerHTML =`${minutes}:${seconds}`;
                    // }
                    // }




var tictac = document.getElementById('tictac');
var alarm = document.getElementById('alarm');

var start = document.getElementById('starting');
var reset = document.getElementById('reset');

var countdown = document.getElementById('countdown');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var i=1;
var j=0.5;
var startTimer;
start.addEventListener('click' , function(){
    if(startTimer === undefined && start.value == "START"){
        start.value= "STOP"
        startTimer = setInterval(timer, 1000);
    }else{
        start.value= "START"
        stopIterval()
        startTimer = undefined;
    }
})

reset.addEventListener('click' , function(){
        if(i%2!=0){
            ws.innerText ="00";
            wm.innerText="05";
            document.getElementById('counter').innerText = 0;
            stopIterval();
            startTimer = undefined;
        }else{
            ws.innerText ="00";
            wm.innerText=30;
            var i =0;
            document.getElementById('counter').innerText = 0;
            stopIterval();
            startTimer = undefined;
        }
})
// start timer function
function timer(){
    if(ws.innerText!=0){
        ws.innerText--;            
    }else{
        if(wm.innerText!=0 && ws.innerText == 0){
            ws.innerText=59;
            wm.innerText--;
        }
    }
    if(wm.innerText==0 && ws.innerText==10){
        tictac.play();
    }
    if(wm.innerText==0 && ws.innerText==0){
        if(j%3==0){
            ws.innerText ="00";
            wm.innerText=15;
            i++;
            j++;
        }else{
            if(i%2!=0){
                ws.innerText ="00";
                wm.innerText=5;
                i++
                j++;
            }else{
                ws.innerText ="00";
                wm.innerText=30;
                i++;
                j++;
                document.getElementById('counter').innerText++;
            }
        }
        alarm.play()
        tictac.pause()
    }  
}
// stop timer function
function stopIterval(){
    clearInterval(startTimer);
}
// changing the pomodoro
var pomoBtn = document.getElementById('pomodoroBtn');
var longBrakBtn = document.getElementById('longBrakBtn');
var shortBrakeBtn = document.getElementById('shortBreakBtn');
// change it to a pomodoro "default"
function pomodoro(){
    pomoBtn.style.fontWeight="900";
    pomoBtn.style.backgroundColor="#212121";
    shortBrakeBtn.style.fontWeight="100";
    shortBrakeBtn.style.backgroundColor="#F1FAEE";
    longBrakBtn.style.fontWeight="100";
    longBrakBtn.style.backgroundColor="#F1FAEE";
    longBrakBtn.style.color="#212121";
    shortBrakeBtn.style.color="#212121";
    pomoBtn.style.color="#e2ebdf";
    


    start.value = "START";
    wm.innerText = 30;
    ws.innerText = "00";
    stopIterval();
    startTimer = undefined;
    var i=1;
    var j=0.5;
}
// change it to a short break
function shortBreak(){
    pomoBtn.style.fontWeight="100";
    pomoBtn.style.backgroundColor="#F1FAEE";
    shortBrakeBtn.style.fontWeight="900";
    shortBrakeBtn.style.backgroundColor="#212121";
    longBrakBtn.style.fontWeight="100";
    longBrakBtn.style.backgroundColor="#F1FAEE";
    longBrakBtn.style.color="#212121";
    shortBrakeBtn.style.color="#e2ebdf";
    pomoBtn.style.color="#212121";
    

    start.value = "START";
    wm.innerText ="05";
    ws.innerText = "00";
    stopIterval();
    startTimer = undefined;
    var i=1;
    var j=1;
}
// change it to a long brak
function longBreak(){
    pomoBtn.style.fontWeight="100";
    pomoBtn.style.backgroundColor="#F1FAEE";
    shortBrakeBtn.style.fontWeight="100";
    shortBrakeBtn.style.backgroundColor="#F1FAEE";
    longBrakBtn.style.fontWeight="900";
    longBrakBtn.style.backgroundColor="#212121";
    longBrakBtn.style.color="#e2ebdf";
    shortBrakeBtn.style.color="#212121";
    pomoBtn.style.color="#212121";


    start.value = "START";
    wm.innerText = 15;
    ws.innerText = "00";
    stopIterval();
    startTimer = undefined;
    var i=2;
    var j=3;
}