let busca= location.search
let object= new URLSearchParams (busca)
let xx= object.get ("id")
let urls= "https://api.allorigins.win/raw?url= https://api.deezer.com/track/" + xx


fetch (urls)
.then (function(response){
    return response.json ()
})
.then (function(data){
    console.log(data);

    let info = data.data

    let fotito= document.querySelector (".holis")
    let nombre= document.querySelector (".nom")
    let tAlbum= document.querySelector (".tituloalmbum")

    fotito.src= data.album
    nombre.innerHTML=data.title
    tAlbum.innerHTML=data.album.title



})
.catch (function(error) {
    console.log ("Error: " + error);
})





