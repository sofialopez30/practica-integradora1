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

let recuperoStorage = localStorage.getItem("neverita");
recuperoStorageToArray = JSON.parse(recuperoStorage);

let seccion = document.querySelector (".neverita");
let contSeccion ="";


for(let i=0; i<recuperoStorageToArray.length; i++){

    let urlCanciones = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + recuperoStorageToArray[i];
    
    fetch(urlCanciones)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);

            contSeccion += `<article>
                                    <img class="image" src="${data.artist.picture_small}" alt="">
                                    <p class="name"> <a href="detail-artist.html?id= ${data.artist.id}</a> Artista: ${data.artist.name}</p>
                                    <p class= "song"> Cancion: ${data.title}
                            </article>`
            

                            seccion.innerHTML = contSeccion

        })
        .catch(function(error){
            console.log(error);
        })

        }



