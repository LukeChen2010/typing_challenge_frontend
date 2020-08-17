const typingWindow = document.querySelector('#typing_window');
const inputBox = document.querySelector('#input');

const passageId = document.URL.split("=")[1];

document.addEventListener("keydown", function(event) 
{ 
    const key = event.key; 
    if (key === "Backspace") 
    { 
        handleUserInput("backspace");
    } 
}); 

getPassage().then(passage => { renderPassage(passage) });

var passageSplit, inputArray, start, i = 0;

function renderPassage(passage)
{
    passageSplit = passage.contents.split("");
    inputArray = [];
    start = false;

    let splitOnWords = passage.contents.split(" ");
    let letterCounter = 0;

    for (let i = 0; i < splitOnWords.length; i++) 
    {
        word = splitOnWords[i];

        let wordNode = document.createElement("span"); 

        for (let j = 0; j <= word.length; j++)
        {
            let letterNode = document.createElement("span"); 
            letterNode.id = "element" + letterCounter;

            if (j == word.length)
            {
                letterNode.innerHTML = "&nbsp";
            }
            else
            {
                letterNode.innerHTML = word[j];
            }

            wordNode.appendChild(letterNode);
            letterCounter++;
        }

        typingWindow.appendChild(wordNode);
    }

    document.getElementById("element" + (letterCounter - 1).toString()).remove(); //remove extra space at the end
}

function getPassage() 
{
    return fetch("http://localhost:3000/passages/" + passageId)
      .then(response => response.json())
}

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
        j = i - 1;
        node = document.getElementById("element"+j);

        if (i > 0)
        {
            node.className = "";
            i--;
            inputArray.pop();
        }
    }
    else
    {
        node = document.getElementById("element"+i);

        if (passageSplit[i] === input)
        {
            inputArray.push(1);
            node.className = "correct";
        }
        else
        {
            inputArray.push(2);
            node.className = "mistake";
        }
        i++;
        if (i === 1 && !start)
        {
            start = true;
            timer();
        }
    }

    if (inputArray.length === passageSplit.length && !inputArray.includes(2))
    {
        won();
    }
}

function won()
{
    alert("WON!");
    clearTimeout(t);
}

let h1 = document.getElementsByTagName("h1")[0],
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

