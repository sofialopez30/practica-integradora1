let hola= document.querySelector("form")
let messi= document.querySelector(".input")

hola.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("error");
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
let detailAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${idUrl}?`;

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
    let lol = document.querySelector (".lol")

    let vamo= "";

    mando.src=data.cover_medium; 
    name.innerHTML += `<a href="detail-artist.html?id=${data.artist.id}"> </a>  `//${data.artist.name}</a>`;
    lol.innerHTML += `<p> ${data.artist.name}</p>`
    //+= `<a href="detail-artist.html?id=${data.artist.id}">${data.artist.name}</a>`;
    veremos.innerHTML= data.title;
    color.innerHTML= "Duration:" + " " + data.duration;
    bonito.innerHTML= "Release date:"+ " "+ data.release_date ;
    rato.innerHTML += `<a href= "genres.html?id=${data.genres.id}"> ${data.genres.data [0].name} </a>`;
    

    
    //let busco= localStorage.getItem ("tracks")
    //tracks= JSON.stringify (busco);

    let inf= data.tracks.data
    let tracks= document.querySelector (".funcioname");
    let info= "";

    for (let i = 0; i <inf.length; i++) {
        info += ` <li class = "item"> 
        <a href = "detail-track.html?id=${inf[i].id}"><h4> ${inf[i].title} </h4></a>
        <div> <button onClick="agregarFavoritos(${inf[i].id},${i})">
        <i class="fa-solid fa-heart-circle-plus"></i>
        </button>  </div>
        </li>
         `

    }
    console.log(info);
    tracks.innerHTML += info




    let favoritos = [];
    let recuperoStorage= localStorage.getItem("favoritos");
        
        if(recuperoStorage){
            favoritos= JSON.parse(recuperoStorage);
            favoritosdos= favoritos;
        }
        let as = document.querySelector (".tarot");
        if(favoritos.includes(idUrl)){
            as.innerText = "Sacar de Favoritos"
        }
        let botones =document.querySelectorAll ("button")
        console.log(botones);
        for (let i = 1; i< botones.length; i++) {
            botones [i].addEventListener("click", agregarFavoritos(inf[i].id, i))
            
        }
        function agregarFavoritos (id, pos) {
            if(favoritos.includes (id)){
                let sacar = favoritos.indexOf(id);
                favoritos.splice (sacar, 1);
                botones[i].innerText = "agregar a favoritos"
            }else{
            favoritos.push (id)
            botones[i].innerText = "Sacar de Favoritos"
            }
        
        }
        

        //agergar arrat a local Stograge y pasar a string//
        let gifToString = JSON.stringify(favoritos)
        localStorage.setItem("favoritos", gifToString)

        console.log(localStorage.getItem("favoritos"));




    
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
