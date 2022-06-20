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


    for (let i=0; i<data.data.length; i++){
        elementosListados += `<article class=generosmiau>
        <a href = "detail-artist.html?id=${data.data[i].id}"><p>${data.data[i].name}</p>
        
        <img class="fotosgeneros" src="${data.data[i].picture}" alt="">
        </article>`
    }
    console.log(elementosListados);
    lista.innerHTML += elementosListados;
})
.catch(function(error){
    console.log(error)
})