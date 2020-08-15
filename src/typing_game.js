const typingWindow = document.querySelector('#typing_window');
const inputBox = document.querySelector('#input');

let passage = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate-we can not consecrate-we can not hallowthis ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us-that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion-that we here highly resolve that these dead shall not have died in vain-that this nation, under God, shall have a new birth of freedom-and that government of the people, by the people, for the people, shall not perish from the earth.";
let shortPassage = "This is a short passage for testing!";

let passageSplit = shortPassage.split("");
let inputArray = [];
let start = false;
let i = 0;

let splitOnWords = shortPassage.split(" ");
letterCounter = 0;

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
            letterNode.innerHTML = '&nbsp';
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

