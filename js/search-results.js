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
let idUrl = queryStringObt.get ("busqueda");


let detailAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${idUrl}`;

fetch (detailAlbum)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);

    let probar = document.querySelector (".search");
    let artistSearch = document.querySelector (".artistSearch");
    let buscar = data.data

    if(buscar.length == 0){
        probar.innerHTML = "No se encontro ningun resultado que coincide con "+ " "+ idUrl
    } else {
        probar.innerHTML = "Estos son todos los resultados para" + " " + idUrl
    }


    for (let i= 0; i< buscar.length; i++){
        artistSearch.innerHTML += `
        <img src= "${buscar[i].album.cover_medium}" alt=""> 
        <br>
        <a href = "detail-track.html?id=${buscar[i].album.id}> <p>${buscar[i].title}</p></a>
        <br>
        <a href = "detail-track.html?id=${buscar[i].id}> <p> ${buscar[i].title} </p> </a>
        <br>
        <br>`
    } 

})
.then (function(){
    document.querySelector (".gifs").style.display="none"
})
.catch(function (error) {
    console.log(error);
})
