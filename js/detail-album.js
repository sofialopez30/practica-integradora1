let queryString = location.search;
let queryStringObt= new URLSearchParams (queryString);
let idUrl = queryStringObt.get ("id");
let detailAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idUrl}?`;

fetch (detailAlbum)

.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);


    let mando= document.querySelector (".efecto");
    let name = document.querySelector (".a");
    let veremos= document.querySelector (".b");
    let color = document.querySelector (".color");
    let bonito = document.querySelector (".bonito");
    let lista= document.querySelector (".lista");
    let rato = document.querySelector (".rato");
    let zz= document.querySelector (".neverita");

    let vamo= "";
     /*let lista2 = [];
    lista = lista2
    let recuperos = localStorage.getItem ("lista2")

    if(recuperos){
        lista= JSON.stringify(recuperos)
    } */
        //lista2.innerHTML= data.tracklist


    mando.src=data.cover_medium;
    name.innerHTML = data.artist.name
    veremos.innerHTML= data.title
    color.innerHTML= "Duracion:" + " " + data.duration
    bonito.innerHTML= "Release date:"+ " "+ data.release_date 
    rato.innerHTML= "Genero:"+ " "+ data.genres.data [0].name
    

    
    //let busco= localStorage.getItem ("tracks")
    //tracks= JSON.stringify (busco);

    let inf= data.tracks.data
    let tracks= document.querySelector (".funcioname");
    let info= "";

    for (let i = 0; i <inf.length; i++) {
        info += `<li>
        <a href = "detail-track.html?q=${inf[i].id}"> 
        <h4>${inf[i].title} <i class="fa-solid fa-heart-circle-plus"<a href="playlist.html" type="submit"> </a></i></h4> 
        </li>`
        

    }
    console.log(info);
    tracks.innerHTML += info

    


})
.catch(function (error) {
    console.log(error);
})

/*<a href="playlist.html" type="submit">Agregar a Playlist <i class="fa-solid fa-heart-circle-plus"></i>

/* let detailAlbum2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + idUrl + "/tracks"

fetch (detailAlbum2)
.then (function(response){
    return response.json ();
})
.then (function(data){
    console.log(data);


    let info= data.data;
    let zz= document.querySelector (".neverita");
    let vamo= "";

    for (let i = 0; i <1; i++) {
        vamo += `
        <br> 
        <article class=art> 
        <a href="playlist.html" type="submit">Agregar a Playlist <i class="fa-solid fa-heart-circle-plus"></i>
        <br>
        </article> 
        `

    }

  </a>  console.log(vamo);
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
            alf.innerText = 'agregar a playlist'
        } else {
            neverita.push (idUrl)
            alf.innerText = 'Remover de playlist'
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

    /*let infos=data.genres.data;
    let po= document.querySelector (".porto");
    let probandoGenres="";

    for(let i=0; i<info.length; i++){
        //construir un elemento de lista
        probandoGenres += `<p> ${infos[i].name}</p>`
    }
    console.log(probandoGenres);
    
    po.innerHTML += probandoGenres;


    let infoCanciones = data.tracks.data;

    //capturar el contenedor de lista
    let cancioneslist = document.querySelector(".cancioneslist");
    let contenidoCanciones = "";

    //Los elementos están en un array y para obtenerlos hay recorrerlo.
    for(let i=0; i<infoCanciones.length; i++){
        //construir un elemento de lista
        contenidoCanciones += `${infoCanciones[i].title}`
    }
    console.log(contenidoCanciones);

    cancioneslist.innerHTML += contenidoCanciones; 

    
})
.catch(function (error) {
    console.log(error);
}) */




