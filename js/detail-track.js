let busca= location.search
let object= new URLSearchParams (queryS)
let xx= object.get ("id")
let urls= "https://api.allorigins.win/raw?url= https://api.deezer.com/track/3135556" + xx



fetch (urls)
.then