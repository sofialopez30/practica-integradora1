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

let urlDeezer = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idUrl
fetch (urlDeezer)
.then (function (response) {
    return response.json ()
})
.then (function(data) {
    console.log (data)
    
    let picture= document.querySelector (".fotito");
    let name = document.querySelector (".nom");
    let nomart = document.querySelector (".nomart");
    let nombredisco = document.querySelector (".nombredisco");
    let iframe = document.querySelector (".iframe")
    

    picture.src= data.album.cover_big
    
   /* <a href="" class="nombretema"><br> ${tracks.title} </a>
    <a href="./detail-artist.html" class="nombretema"><br> ${tracks.artist.name} </a>
    <a href="./detail-album.html" class="albumde">  </a>
    <a href="./detail-album.html" class="albumde"><br> ${tracks.album.title} </a>
    <br>
    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idCancion}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    <br>
    <br>
    
    </article> */


    name.innerHTML += `  ${data.title}</a> `
    nomart.innerHTML += `<p><a href="./detail-artist.html?q=${data.artist.id}">${data.artist.name}</a></p>`
    nombredisco.innerHTML += `</p><a class "href" href= "./detail-album.html?q=${data.album.id}""> ${data.title}</a>`
    iframe.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idUrl}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
    
    
    
    
    //<a href="./detail-album.html?q=${data.album.id}">
    //nomart.innerHTML = data.artist.name
    //nombredisco.innerHTML = data.album.title

    let xd= document.querySelector("#xd")

    let neverita = [];
    let recupero = localStorage.getItem ("neverita")
    let alf = document.querySelector (".neverita")

    if (recupero === "" || recupero === null) {
        recupero = "[]"
    }
    console.log(recupero);

    if(recupero){
        neveritados= JSON.parse(recupero)
        neveritados = neverita
    }
    
    if(neverita.includes(idUrl)){
        alf.innerText = "Remover de playlist"
    }
    xd.addEventListener ("click", function(evento){
        evento.preventDefault()
    
        if(neverita.includes(idUrl)){
            let sacar = neverita.indexOf(idUrl)
            neverita.splice (sacar,1)
            xd.innerText = 'agregar a playlist'
        } else {
            neverita.push (idUrl)
            xd.innerText = 'Remover de playlist'
        }
        let gifToStrings = JSON.stringify(neverita)
        localStorage.setItem("neverita", gifToStrings)
    
        console.log(localStorage.getItem("neverita"));
    
        
    })





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




