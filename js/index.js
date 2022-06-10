let ver= document.querySelector (".probando ");
let lol="https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch (lol)
.then (function(response){
    return response.json()
})
.then (function(data){
    console.log(data);
    
    let info = data.data
    let ll = document.querySelector (".probando");
    let characters= "";
    let img = document.querySelector (".fotos")

    for(let i=0; i<5; i++){
        let lista= ""
        characters += `
        <article>
        <p> ${info[i].artist.name}</p>
        <p> ${info[i].album.title}</p>
        <img src= ${info[i].artist.picture_medium} alt = "" />
        <br>
        <a href="./detail-track.html?id=${info[i].id} "> Ir a detalle </a>
        </article>`

    }
    console.log(characters);
    ll.innerHTML += characters;

    
})
.catch(function(error){
    console.log(error)

})

let ese = document.querySelector ('.mmm')
let dd = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums'

fetch (dd)
.then (function(response){
    return response.json()
})
.then (function(data){
    console.log(data);
    
    let info = data.data
    let lls = document.querySelector (".mmm");
    let rs= "";
    let img = document.querySelector (".fotos")

    for(let i=0; i<5; i++){
        let lista= ""
        rs += `
        <article>
        <p> ${info[i].artist.name}</p>
        <p> ${info[i].title}</p>
        <img src= ${info[i].cover_medium} alt = "" />
        <br>
        <a href="./detail-track.html?id=${info[i].id} "> Ir a detalle </a>
        </article>`

    }
    console.log(rs);
    lls.innerHTML += rs;

    
})
.catch(function(error){
    console.log(error)

})
let eses = document.querySelector ('.sss')
let ddd = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists'

fetch (ddd)
.then (function(response){
    return response.json()
})
.then (function(data){
    console.log(data);
    
    let info = data.data
    let lls = document.querySelector (".sss");
    let rs= "";
    let img = document.querySelector (".fotos")

    for(let i=0; i<5; i++){
        let lista= ""
        rs += `
        <article>
        <p> ${info[i].name}</p>
        <img src= ${info[i].picture_medium} alt = "" />
        <br>
        <a href="./detail-track.html?id=${info[i].id} "> Ir a detalle </a>
        </article>`

    }
    console.log(rs);
    lls.innerHTML += rs;

    
})
.catch(function(error){
    console.log(error)

})

