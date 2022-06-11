let detailAlbum = 'https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127'

fetch (detailAlbum)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);

    let mando= document.querySelector ('.detalle')
    let album= ''

    for (let i = 0; i <1; i++) {
        album += `<article class= images> 
        <img src="${data.cover_medium}" alt="">
        </article> 
        <article class= xdlol>
        <h2 class=arte >${data.title} </h2> 
        <h3> ${data.artist.name} </h3>
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

    console.log(album);
    mando.innerHTML += album;
})
.catch(function (error) {
    console.log(error);
})


