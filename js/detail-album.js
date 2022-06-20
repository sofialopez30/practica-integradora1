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
    lol.innerHTML += `<a href="detail-artist.html?id=${data.artist.id}"> <p> ${data.artist.name}</p> </a>`
    veremos.innerHTML= `<a href="detail-artist.html?id=${data.artist.id}"><p> ${data.title}</p></a>  `;
    color.innerHTML= "Duration:" + " " + data.duration;
    bonito.innerHTML= "Release date:"+ " "+ data.release_date ;
    rato.innerHTML += `<a href= "detail-genres.html?id=${data.genres.data[0].id}"> ${data.genres.data [0].name} </a>`;
    
    let inf= data.tracks.data
    let tracks= document.querySelector (".funcioname");
    let info= "";
    

    for (let i = 0; i <inf.length; i++) {
        info += ` <li class = "item"> 
        <a href = "detail-track.html?id=${inf[i].id}"><h4> ${inf[i].title} </h4></a>
        </li>
         `
    }
    console.log(info);
    tracks.innerHTML += info
    

    let favoritos = [];
    let recuperoStorage= localStorage.getItem("discos");
    let botones =document.querySelectorAll ("button")
    console.log(botones);

    if(localStorage.getItem('discos') && localStorage.getItem('discos') != null){
        favoritos = JSON.parse(localStorage.getItem('discos'));
    }
    if(favoritos.includes(idUrl)){
        botones[1].innerHTML = "Sacas de Playlist" 
    }


    botones [1].addEventListener("click",function (){
        if(favoritos.includes (idUrl)){
            let sacar = favoritos.indexOf(idUrl);
            favoritos.splice (sacar, 1);
            botones[1].innerText = "Agregar a favoritos"
            console.log(favoritos);

        }else{
        favoritos.push (idUrl)
        botones[1].innerText = "Sacar de Favoritos"
        console.log(favoritos);
        }

        let gifToString = JSON.stringify(favoritos)
        localStorage.setItem("discos", gifToString)

    })
   

    
         


    
            




})
.catch(function (error) {
    console.log(error);
})




