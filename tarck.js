let busca= location.search;
let object= new URLSearchParams (busca);
let xx= object.get ("id");
let urls= `https://api.allorigins.win/raw?url= https://api.deezer.com/track/3135556" + xx`


fetch (urls)
.then (function(response){
    return response.json ()
})
.then (function(data){
    console.log(data);


    let fotito= document.querySelector (".holis")
    let nombre= document.querySelector (".nom")
    let tAlbum= document.querySelector (".tituloalmbum")
    let image = document.querySelector('img')

    image.src= data.album.picture_medium.url;
    nombre.innerText = data.title;
    fotito.innerText = data.artist.name
    








    //let info = data.data
    /*let ver= document.querySelector(".duele");
    let etre= "";

    for (let i=0; i<5; i++){
        let lista= ""
        etre += `  <article>
        <p> ${info[i].title}</p>
        <img src=${info[i].cover_big} alt = ""/>
        `
    }
    console.log(etre);
    ver.innerHTML += etre */
    

})
.catch (function(error) {
    console.log ("Error: " + error);
})





