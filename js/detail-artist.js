let hola= document.querySelector("form")
let messi= document.querySelector(".input")

hola.addEventListener('submit', function (event) {
    event.preventDefault()
    if(messi.value.length >= 3 ){
        this.submit()
    }else{
        alert ('Poner al menos tres caracteres')
    }
    
})

let queryString = location.search;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get ("id");

let urlDeezer = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + idUrl

fetch (urlDeezer)
.then (function (response){
    return response.json ()
})
.then (function(data) {
    console.log (data)
    
    let picture= document.querySelector (".quieroLlorar");
    let name = document.querySelector (".nombreArtista");

    picture.src = data.picture;
    name.innerHTML = data.name;
    name.style.color = "#0fff20";
})
.catch (function(error) {
    console.log ("Error: " + error);
})

let urlDeezer2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + idUrl+ "/albums"

fetch (urlDeezer2)
.then (function(response){
    return response.json ()
})
.then (function (data){
    console.log (data)

    let info = data.data;
    let album = document.querySelector (".ohMyGod");
    let discos = "";

    for (let i=0; i<5; i++) {
        discos += `<li> <a href="detail-album.html?id=${info[i].id}"> ${info[i].title} </a> </li>`
    }

    console.log (discos);

    album.innerHTML = discos;
    album.style.color =  "#0fff20";
})
.catch (function(error){
    console.log (error);
})
