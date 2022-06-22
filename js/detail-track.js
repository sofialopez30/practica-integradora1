let hola= document.querySelector("form")
let messi= document.querySelector(".input")

hola.addEventListener('submit', function (event) {
    event.preventDefault();
    if(messi.value.length == "" ){
        alert ("Que deseas buscar?")
    }else if(messi.value.length <= 2){
        alert ('Poner al menos tres caracteres')
    } else{
        this.submit()
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
    


    name.innerHTML += `<h3> ${data.title}</h3>`
    nomart.innerHTML += `<a class= "duele" href="./detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`
    nombredisco.innerHTML += `</p><a class "duele" href= "./detail-album.html?id=${data.album.id}""> ${data.title}</a>`
    iframe.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idUrl}" width="100%" height="170px" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
    
    


    let xd= document.querySelector("#xd")

    let neverita = [];

    if(localStorage.getItem('neverita') && localStorage.getItem('neverita') != null){
        neverita = JSON.parse(localStorage.getItem('neverita'));
    }
    
    if(neverita.includes(idUrl)){
        xd.innerText = "Remover de playlist"
    }
    xd.addEventListener ("click", function(evento){
        evento.preventDefault()
    
        if(neverita.includes(idUrl)){
            neverita.splice (neverita.indexOf(idUrl),1)
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






