function getPassages() 
{
    return fetch('http://localhost:3000/passages', {mode:'no-cors'})
      .then(res => res.json())
}

function renderPassages(passage) 
{
    console.log(passage.title)
}

getPassages().then(passages => 
{
    passages.forEach(passage => 
    {
        renderPassages(passage)
    })
})

