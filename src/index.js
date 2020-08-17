const passageList = document.querySelector("#passage_list");

getPassages().then(passages => 
    {
        passages.forEach(passage => 
        {
            renderPassages(passage);
        })
    })
        

function getPassages() 
{
    return fetch("http://localhost:3000/passages")
      .then(response => response.json())
}

function renderPassages(passage) 
{
    let passageContainer = document.createElement("div"); 
    passageContainer.className = "passage_container";

    let highscoreCount = document.createElement("span"); 
    highscoreCount.className = "highscore_count";

    let passageTitle = document.createElement("a"); 
    passageTitle.className = "passage_title";
    passageTitle.href = "./show.html?passage=" + passage.id
    
    getHighscore(passage.id).then(highscore =>
        highscoreCount.innerHTML = highscore.length
    );

    passageTitle.innerHTML = passage.title;
    
    passageContainer.appendChild(highscoreCount);
    passageContainer.appendChild(passageTitle);
    passageList.appendChild(passageContainer);
}
