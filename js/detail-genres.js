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
    let lista = document.querySelector('.sectionplaylist')
    let elementosListados = ''


    for (let i=0; i<info.length; i++){
        elementosListados += `<article class="detallegeneros">
        <p>${info[i].name}</a>
        <img class="fotosgeneros" src="${info[i].picture_medium}" alt="">
        </article>`
    }
    console.log(elementosListados);
    lista.innerHTML += elementosListados;
})
.catch(function(error){
    console.log(error)
})