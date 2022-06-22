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

let recuperoStorage = localStorage.getItem("neverita");
recuperoStorageToArray = JSON.parse(recuperoStorage);
let arrayDiscos= JSON.parse(localStorage.getItem("discos"))
let seccion = document.querySelector (".neverita");
let contSeccion ="";


console.log (recuperoStorageToArray);
for(let i=0; i<recuperoStorageToArray.length; i++){

    let urlCanciones = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + recuperoStorageToArray[i];
    
    fetch(urlCanciones)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);

            contSeccion += `<article class="dejoLaCarrera">
                                    <img class="imageUwu" src="${data.artist.picture_small}" alt="">
                                    <p class= "song"><a href="detail-track.html?id=${data.id}">${data.title}</a>  </p>
                            </article>`

                            seccion.innerHTML = contSeccion

        })
        .catch(function(error){
            console.log(error);
        })

        }

        
