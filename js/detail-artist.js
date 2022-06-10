let querystring = location.storage;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get ("id");

let urlDeezer = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + idUrl

fetch (urlDeezer)
.then (function (response) {
    return response.json ()
})
.then (function(data) {
    console.log (data)
    
    let picture= document.querySelector (".quieroLlorar");
    let name = document.querySelector (".nombreArtista");

    picture.src = data.picture;
    name.innerHTML = data.name;
})
.catch (function(error) {
    console.log ("Error: " + error);
})

let urlDeezer2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + idUrl+ "/albums"

fetch (urlDeezer2)

