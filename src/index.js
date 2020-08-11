const typingWindow = document.querySelector('#typing_window');
const inputBox = document.querySelector('#input');

let sentence = "The first personnel management department started at the National Cash Register Co. in 1900. The owner, John Henry Patterson, organized a personnel department to deal with grievances, discharges and safety, and training for supervisors on new laws and practices after several strikes and employee lockouts. During the 1970s, companies experienced globalization, deregulation, and rapid technological change which caused the major companies to enhance their strategic planning and focus on ways to promote organizational effectiveness. This resulted in developing more jobs and opportunities for people to show their skills which were directed to effective applying employees toward the fulfillment of individual, group, and organizational goals. Many years later the major/minor of human resource management was created at universities and colleges also known as business administration.";

let sentenceSplit = sentence.split("");
let inputArray = [];
let start = false;
let i = 0;

for (let i = 0; i < sentenceSplit.length; i++) 
{
    let node = document.createElement("span"); 
    node.id = "element" + i;
    if (sentenceSplit[i] === " ")
    {
        node.innerHTML = '&nbsp;'; 
    }
    else
    {
        node.innerHTML = sentenceSplit[i];
    }
    
    typingWindow.appendChild(node);
}

document.addEventListener('keydown', function(event) 
{ 
    const key = event.key; 
    if (key === "Backspace") 
    { 
        handleUserInput("backspace");
    } 
}); 

function textInputHandler()
{ 
    value = inputBox.value;
    inputBox.value = "";
    handleUserInput(value);
}

function handleUserInput(input)
{
    if (input === "backspace")
     {
         j = i-1;
        node = document.getElementById("element"+j);

        if (i > 0)
        {
            node.className = ""
            i--;
            inputArray.pop();
        }
    }
    else
    {
        node = document.getElementById("element"+i);

        if (sentenceSplit[i] === input)
        {
            inputArray.push(1);
            node.className = "correct"
        }
        else
        {
            inputArray.push(2);
            node.className = "mistake"
        }
        i++;
        if (i === 1 && !start)
        {
            start = true;
            timer()
        }
    }
}

let h1 = document.getElementsByTagName('h1')[0],
    totalcentiseconds = 0, centiseconds = 0, seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    totalcentiseconds++
    centiseconds++

    if (centiseconds >= 100) {
        centiseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (centiseconds > 9 ? centiseconds : "0" + centiseconds);

    timer();
}

function timer() {
    t = setTimeout(add, 10);
}

