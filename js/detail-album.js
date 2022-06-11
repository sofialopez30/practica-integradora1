let queryString = location.search;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get ("id");
let detailAlbum = 'https://api.allorigins.win/raw?url=https://api.deezer.com/album/' + idUrl 

fetch (detailAlbum)

.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);


    let mando= document.querySelector (".efecto");
    let name = document.querySelector (".a");
    inf= ""

    mando.src=data.cover_medium;
    name.innerHTML = data.artist.name
    name.style.color= " #00fdff";


})
.catch(function (error) {
    console.log(error);
})

let detailAlbum2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + idUrl + "/tracks"

fetch (detailAlbum2)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);
    
    let zz= document.querySelector (".bonito")
    let vamo= ""

    for (let i = 0; i <1; i++) {
        vamo += `<article class= images> 
        <img src="${data.cover_medium}" alt="">
        </article> 
        <article class= xdlol>
        <h2 class=arte >${data.title} </h2> 
        <h3> ${data.name} </h3>
        <p> Duration: ${data.duration} </p>
        <p> Release date: ${data.release_date}</p>
        
        </article> 
    
        <article class=art> 
        <br>
        <a href="detail-artist.html"> Ver artista</a>
        <br>
        <a href="playlist.html" type="submit">Agregar a Playlist <i class="fa-solid fa-heart-circle-plus"></i>
        <p> ${data.tracklist} </p>
        </article> 
        `

    }

    console.log(vamo);
    zz.innerHTML += vamo;

    
})
.catch(function (error) {
    console.log(error);
})


/*let detailAlbum2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + idUrl + "/tracks"

fetch(detailAlbum2)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);

    let info =data.data;
    let album= document.querySelector(".bonito");
    let mostrar = "";



    for (let i = 0; i <5; i++) {
        album += `
        <article class= images> 
        <img src="${info[i].cover_medium}" alt="">
        </article> 
        <article class= xdlol>
        <h2 class=arte >${info[i].title} </h2> 
        <h3> ${info[i].artist.name} </h3>
        <p> Duration: ${info[i].duration} </p>
        <p> Release date: ${info[i].release_date}</p>
        
        </article> 
        <li> <a href = "detail-artist.html?id=${info[i].id}"> ${info[i].title}</a></li>`
        
        
        
        /*`<article class= images> 
        <img src="${info[i].cover_medium}" alt="">
        </article> 
        <article class= xdlol>
        <h2 class=arte >${info[i].title} </h2> 
        <h3> ${info[i].artist.name} </h3>
        <p> Duration: ${info[i].duration} </p>
        <p> Release date: ${info[i].release_date}</p>
        
        </article> 

        <article class=art> 
        <br>
        <a href="detail-artist.html"> Ver artista</a>
        <br>
        <a href="playlist.html" type="submit">Agregar a Playlist <i class="fa-solid fa-heart-circle-plus"></i>
        <p> ${data.tracklist} </p>
        </article> 
        `*/
       /* 
    }

    console.log(mostrar);
    album.innerHTML = mostrar;





})
.catch(function (error) {
    console.log(error);
})  */


