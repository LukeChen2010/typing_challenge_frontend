class ApiMethods
{
    static getPassage(passageId) 
    {
        return fetch("http://localhost:3000/passages/" + passageId)
        .then(response => response.json());
    }

    static getPassages() 
    {
        return fetch("http://localhost:3000/passages")
        .then(response => response.json());
    }

    static getHighscore(passageId) 
    {
        return fetch("http://localhost:3000/passages/" + passageId + "/highscores")
        .then(response => response.json());
    }

    static postHighscore(passageId, gameInstanceJson)
    {
        return fetch("http://localhost:3000/passages/" + passageId + "/highscores/new",
        {
            headers: {
                Authorization: "authenticity_token",
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: gameInstanceJson
        })
        .then(response => response.json());
    }
}