let hola= document.querySelector("form")
let messi= document.querySelector(".input")

hola.addEventListener('submit', function (event) {
    event.preventDefault()
    if(messi.value.length == "" ){
        alert ("Que deseas buscar?")
    }else if(messi.value.length <= 2){
        alert ('Poner al menos tres caracteres')
    } else{
        this.submit()
      }
    
})


let querystring =location.storage;
let querystringObt = new URLSearchParams(querystring);
let idUurl =querystringObt.get("id");
let urlapi = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre" 

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
