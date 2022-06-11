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
        album += `<article> 
        <img src="${data.md5_image}" alt="">
        <h2>${data.title} </h2> 
        <h3> ${data.artist.name} </h3>
        <p> ${data.duration} </p>
        <a href="detail-artist.html"> ${data.type}</a>
        
        </article> 
        <article> 
        <p> ${data.artist.tracklist} </p>
        </article> 
        `
    }

    console.log(album);
    mando.innerHTML += album;
})

.catch(function (error) {
    console.log(error);
})


/*         <ol>
         <li> <a href="playlist.html" type="submit">${info[i].tracks.data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
         </ol >
         
*/


