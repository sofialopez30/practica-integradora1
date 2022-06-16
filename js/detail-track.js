let queryString = location.search;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get ("id");

let urlDeezer = 'https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + idUrl
fetch (urlDeezer)
.then (function (response) {
    return response.json ()
})
.then (function(data) {
    console.log (data)
    
    let picture= document.querySelector (".fotito");
    let name = document.querySelector (".nom");
    

    picture.src = tracks.album.cover;
    name.innerHTML = tracks.artist.name;



    /*let info = data.data;
    let album = document.querySelector (".ohMyGod");
    let discos = "";

    for (let i=0; i<5; i++) {
        discos += `<li> <a href="detail-album.html?id=${info[i].id}"> ${info[i].title} </a> </li>`
    }

    console.log (discos);

    album.innerHTML = discos;
    album.style.color =  "#0fff20"; */
})
.catch (function(error) {
    console.log ("Error: " + error);
})


    
/* let neverita = [];
let recupero = localStorage.getItem ("neverita")
let alf = document.querySelector (".neverita")

if(recupero){
    neverita= JSON.parse(recupero)
    neveritados= neverita
}

if(neverita.includes(idUrl)){
    alf.innerText = "Remover de playlist"
}
alf.addEventListener ("click", function(evento){
    evento.preventDefault()

    if(neverita.includes(idUrl)){
        let sacar = neverita.indexOf(idUrl)
        neverita.splice (sacar,1)
        alf.innerText = 'agregar a playlist'
    } else {
        neverita.push (idUrl)
        alf.innerText = 'Remover de playlist'
    }
    let gifToStrings = JSON.stringify(neverita)
    localStorage.setItem("neverita", gifToStrings)

    console.log(localStorage.getItem("neverita"));

    
}) */




