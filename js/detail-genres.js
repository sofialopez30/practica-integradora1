let querystring =location.search;
let querystringObt = new URLSearchParams(querystring);
let idUrl =querystringObt.get("id");
let urlApi = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/" + idUrl

fetch(urlApi)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.data;
    let lista = document.querySelector('.sectionplaylist')
    let elementosListados = ''


    for (let i=0; i<1; i++){
        elementosListados += `<article class=detalleGeneros>
        <p>Genero: ${data.name}</p>
        <img class="fotosgeneros" src="${data.picture_medium}" alt="">
        </article>`
    }
    console.log(elementosListados);
    lista.innerHTML += elementosListados;
})
.catch(function(error){
    console.log(error)
})