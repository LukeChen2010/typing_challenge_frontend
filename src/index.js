const passageList = document.querySelector("#passage_list");

ApiMethods.getPassages().then(passages => 
{
    passages.forEach(passage => 
    {
        renderPassages(passage);
    })
})       

function renderPassages(passage) 
{
    let passageContainer = document.createElement("div"); 
    passageContainer.className = "passage_container";

    let highscoreCount = document.createElement("div");

    ApiMethods.getHighscore(passage.id).then(highscore =>
        highscoreCount.innerHTML = highscore.length + " players have completed"
    );

    let passageTitle = document.createElement("a"); 
    passageTitle.href = "./show.html?passage=" + passage.id;
    passageTitle.innerHTML = passage.title;

    let passageHighscore = document.createElement("a"); 
    passageHighscore.href = "./highscore-show.html?passage=" + passage.id;
    passageHighscore.innerHTML = "View highscore";

    let linebreak = document.createElement("br");
    let header = document.createElement("h3")
    
    let highscoreCountContainer = document.createElement("div");
    highscoreCountContainer.className = "highscore_count";
    highscoreCountContainer.appendChild(highscoreCount);

    let passageTitleContainer = document.createElement("div");
    passageTitleContainer.className = "passage_title";
    header.appendChild(passageTitle)
    passageTitleContainer.appendChild(header);
    passageTitleContainer.appendChild(linebreak);
    passageTitleContainer.appendChild(passageHighscore);
    
    passageContainer.appendChild(highscoreCountContainer);
    passageContainer.appendChild(passageTitleContainer);
    
    passageList.appendChild(passageContainer);
}