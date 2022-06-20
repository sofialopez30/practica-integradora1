let hola= document.querySelector("form")
let messi= document.querySelector(".input")

hola.addEventListener('submit', function (event) {
    event.preventDefault()
    if(messi.value.length >= 3 ){
        this.submit()
    }else{
        alert ('Poner al menos tres caracteres')
    }
    
})

let querystring =location.search;
let querystringObt = new URLSearchParams(querystring);
let idUrl =querystringObt.get("id");


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idUrl}/artists`)
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