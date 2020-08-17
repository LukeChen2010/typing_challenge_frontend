const passageList = document.querySelector('#passage_list');

function getPassages() 
{
    return fetch('http://localhost:3000/passages')
      .then(response => response.json())
}

function getHighscore(passageId) 
{
    return fetch('http://localhost:3000/passages/' + passageId + '/highscores')
      .then(response => response.json())
}

function renderPassages(passage) 
{
    let passageContainer = document.createElement("div"); 
    passageContainer.className = "passage_container";

    let highscoreCount = document.createElement("span"); 
    highscoreCount.className = "highscore_count";

    let passageTitle = document.createElement("span"); 
    passageTitle.className = "passage_title";
    
    getHighscore(passage.id).then(highscore =>
        highscoreCount.innerHTML = highscore.length
    );

    passageTitle.innerHTML = passage.title;
    
    passageContainer.appendChild(highscoreCount);
    passageContainer.appendChild(passageTitle);
    passageList.appendChild(passageContainer);
}

getPassages().then(passages => 
{
    passages.forEach(passage => 
    {
        renderPassages(passage);
    })
})

