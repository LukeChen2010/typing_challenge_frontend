const highscoreList = document.querySelector("#highscores_list");
const passageTitle = document.querySelector("#passage_title");

const passageId = document.URL.split("=")[1];

ApiMethods.getPassage(passageId).then(passage => { renderPassage(passage) });

ApiMethods.getHighscore(passageId).then(highscores => 
    { 
        highscores.forEach(highscore => 
        {
            renderHighscore(highscore); 
        })
    })

function renderPassage(passage)
{
    passageTitle.innerHTML = "Viewing highscore for " + passage.title;
}

function renderHighscore(highscore)
{
    let newRow = highscoreList.insertRow();
    let newCell  = newRow.insertCell(-1);
    let newText  = document.createTextNode(highscore.name);
    newCell.appendChild(newText);

    newCell  = newRow.insertCell(-1);
    newText  = document.createTextNode(highscore.time/100);
    newCell.appendChild(newText);
}
