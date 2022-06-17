let querystring =location.storage;
let querystringObt = new URLSearchParams(querystring);
let idUurl =querystringObt.get("id");
let urlapi = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre" 

fetch(urlapi)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.data;
    let lista = document.querySelector('.generos')
    let elementosLista = ''


    for (let i=0; i<info.length; i++){
        elementosLista += `<article class="generoshijos">
        <p><a href="detail-genres.html?id=${info[i].id}">${info[i].name}</a></p>
        </article>`
    }
    console.log(elementosLista);
    lista.innerHTML += elementosLista;
})
.catch(function(error){
    console.log(error)
})
