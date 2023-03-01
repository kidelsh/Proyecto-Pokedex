"use strict"

const Pokeurl = "https://pokeapi.co/api/v2/pokemon/"
let pokemons = ""
let pokeid = 1


function Medidas(num) {
    const resultado = num / 10
    return resultado
}

function Habilidades(habList){
    let Hab = ""
    habList.forEach(nombreHab => {
        Hab = Hab + `${nombreHab.ability.name}, `
    })
    return Hab
}

function Elemento(tipo) {
    let tipos = " "
    tipo.forEach(Element => {
    if (Element.type.name == "bug") {
      tipos = tipos + `<p class="bicho">Bicho</p> `
    }
    if (Element.type.name == "dark") {
      tipos = tipos + `<p class="siniestro">Siniestro</p> `
    }
    if (Element.type.name == "dragon") {
      tipos = tipos + `<p class="dragon">Dragon</p> `
    }
    if (Element.type.name == "electric") {
      tipos = tipos + `<p class="electrico">Electrico</p> `
    }
    if (Element.type.name == "fairy") {
      tipos = tipos + `<p class="hada">Hada</p> `
    }
    if (Element.type.name == "fighting") {
      tipos = tipos + `<p class="lucha">Lucha</p> `
    }
    if (Element.type.name == "fire") {
      tipos = tipos + `<p class="fuego">Fuego</p> `
    }
    if (Element.type.name == "flying") {
      tipos = tipos + `<p class="volador">Volador</p> `
    }
    if (Element.type.name == "ghost") {
      tipos = tipos + `<p class="fantasma">Fantasma</p> `
    }
    if (Element.type.name == "grass") {
      tipos = tipos + `<p class="pasto">Planta</p> `
    }
    if (Element.type.name == "ground") {
      tipos = tipos + `<p class="tierra">Tierra</p> `
    }
    if (Element.type.name == "ice") {
      tipos = tipos + `<p class="hielo">Hielo</p> `
    }
    if (Element.type.name == "normal") {
      tipos = tipos + `<p class="normal">Normal</p> `
    }
    if (Element.type.name == "poison") {
      tipos = tipos + `<p class="veneno">Veneno</p> `
    }
    if (Element.type.name == "psychic") {
      tipos = tipos + `<p class="psiquico">Psiquico</p> `
    }
    if (Element.type.name == "rock") {
      tipos = tipos + `<p class="roca">roca</p> `
    }
    if (Element.type.name == "steel") {
      tipos = tipos + `<p class="hierro">Acero</p> `
    }
    if (Element.type.name == "water") {
      tipos = tipos + `<p class ="agua">Agua</p> `
    }
    })
    return tipos
}

const Buscar = async()=> {
  try{
    let pokeInfo = await fetch(Pokeurl + pokeid)
    let Pokeinfojson = await pokeInfo.json()
    let pokemon = Pokeinfojson
    pokemons = ` 
           <div class=" btn-lg btn-gradient btn-light col info"> 
           <h2 class="nombre"> ${pokemon.name}</h2>
           <h3> Habilidades : ${Habilidades(pokemon.abilities)}</h3>
           <h4>Peso = ${Medidas(pokemon.weight)} Kg</h4>
           <h4>Altura : ${Medidas(pokemon.height)} M</h4>
           </div>

           <div class=" btn-lg btn-gradient btn-light col">
           <h3 class="numero"> N°.${pokemon.id}</h3> 
           <img class="imagenesP" src="${pokemon.sprites.other['official-artwork'].front_default}"> 
           <h1></h1> 
           ${Elemento(pokemon.types)} 
           </div>`
   document.getElementById("Cinfo").innerHTML = pokemons
  }
  catch{
    alert("Ese pokemon no existe")
  }
}

Buscar()

let busqueda = document.getElementById('search')
busqueda.addEventListener('change', (e) => {
    e.target.value;
})

const boton = document.getElementById("buscar")
boton.addEventListener("click", (e) => {
  pokeid = busqueda.value
  Buscar()
})

const bajar = document.getElementById("bajar")
bajar.addEventListener("click", (e) => {
  let pokenumero = Number(pokeid)
  pokeid = pokenumero +1
  if (pokeid <= 0 || pokeid >= 1280){
    alert("No hay mas pokemons")
    return pokeid -1
  }
  Buscar()
})

const subir = document.getElementById("subir")
subir.addEventListener("click", (e) => {
  let pokenumero = Number(pokeid)
  pokeid = pokenumero -1
  if (pokeid <= 0 || pokeid >= 1280){
    alert("No hay mas pokemons")
    return pokeid +1
  }
  Buscar()
})
