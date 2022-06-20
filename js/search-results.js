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
let idUrl = queryStringObt.get ("buscador");
let detailAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${idUrl}?`;

fetch (detailAlbum)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);

    let probar = document.querySelector (".search");
    let artistSearch = document.querySelector (".artistSearch");

    let results = data.data

    if(results.length == 0){
        probar.innerHTML = "No se encontro ningun resultado que coincide con "+ idUrl
    } else {
        probar.innerHTML = "Estos son todos los resultados para" + idUrl
    }

    for (let i=0; i< results.length; i++){
        artistSearch.innerHTML += `
        <img src= "${results[i].cover_medium}" alt=""> 
        <a href = "detail-album.html?id=${results[i].id}> ${results[i].title}</a>
        <a href ="detail-artist.html?id=${results[i].artist.id}>${results[i].artist.name}</a>`
    }

})
.catch(function (error) {
    console.log(error);
})
