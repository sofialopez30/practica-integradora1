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
    let veremos= document.querySelector (".b")
    let color = document.querySelector (".color")
    let bonito = document.querySelector (".bonito")
    inf= ""

    mando.src=data.cover_medium;
    name.innerHTML = data.artist.name
    veremos.innerHTML= data.title
    color.innerText = "Duracion:"
    color.innerHTML= data.duration
    bonito.innerHTML= data.release_date 



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
    
    let info= data.data
    let zz= document.querySelector (".neverita")
    let vamo= ""

    for (let i = 0; i <1; i++) {
        vamo += `
    
        <article class=art> 
        <br>
        <a href="detail-artist.html"> Ver artista</a>
        <br>
        <a href="playlist.html" type="submit">Agregar a Playlist <i class="fa-solid fa-heart-circle-plus"></i>
        </article> 
        `

    }

    console.log(vamo);

    zz.innerHTML += vamo;

    let neverita = [];
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
            alf.innerText = 'agregar a favoritos'
        } else {
            neverita.push (idUrl)
            alf.innerText = 'Sacar de favoritos'
        }
        let gifToStrings = JSON.stringify(neverita)
        localStorage.setItem("neverita", gifToStrings)

        console.log(localStorage.getItem("neverita"));
    })


    let favoritos = [];
    let recuperoStorage= localStorage.getItem("favoritos")

    if(recuperoStorage){
        favoritos= JSON.parse(recuperoStorage)
        favoritosdos= favoritos
    }


    let as = document.querySelector (".tarot")

    if(favoritos.includes (idUrl)){
        as.innerText = "Sacar de Favoritos"
    }

    as.addEventListener ("click", function(evento){
        evento.preventDefault()

        if(favoritos.includes (idUrl)){
            let sacar = favoritos.indexOf(idUrl)
            favoritos.splice (sacar, 1)
            as.innerText = "agregar a favoritos"

        }else{
            favoritos.push (idUrl)
            as.innerText = "Sacar de Favoritos"
        }

        //agergar arrat a local Stograge y pasar a string//
        let gifToString = JSON.stringify(favoritos)
        localStorage.setItem("favoritos", gifToString)

        console.log(localStorage.getItem("favoritos"));
    })

    
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


