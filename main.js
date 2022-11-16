//Bianney Bolaños y Carolina Bustamante =)

console.log("Buenas");

//API
const API_URL = "http://localhost:3000/peliculas"

//Async / Await para traer la info de las Películas desde la API
const traerPeli = async (info = "") => {

    try {
        let response = await fetch(`${API_URL}?q=${info}`)
        let data = await response.json()
        mostrarPeli(data);

    } catch (error) {
        console.log("Ups! Se encontró un error: " + error);
    }
}

traerPeli()

// Imprimir Cards de las Películas

let divCards = document.querySelector("#cards-container")
function mostrarPeli(_data) {
    divCards.innerHTML = ""
    _data.forEach(element => {
        let cards = document.createElement("div")
        cards.setAttribute("class", "cards")
        const { nombre, imagen, puntaje, genero } = element
        cards.innerHTML =
            `<img src=${imagen}>
                <p>${nombre}</p>
                <p>${genero}</p>
                <p>⭐ ${puntaje}</p> `
        divCards.appendChild(cards)
    })
}

//Función para filtrar la búsqueda

const busqueda = document.querySelector("form")
busqueda.addEventListener("submit", event => {
    event.preventDefault()
    let buscado = event.target.input.value
    traerPeli(buscado)
    busqueda.reset()
})