//*Api Key - Endpoint
const apiKey = "u8zJTi2iIyk35EbrqzbN5vPBfQRgtk0qXtjt1mZ6O2q9JIgpHojkpkM0"
const endpoint = "https://api.pexels.com/v1/search?query=";

//*on click esegue chiamata api
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    let search = document.getElementById("searchBar").value;

    fetch(endpoint + search, { headers: { Authorization: apiKey} }) //promise
        .then((response) => response.json()) // response in json // promise
        .then((jsonData) => creaFoto(jsonData)) // chiama creaFoto con jsonData come argomento
        .catch((err) => console.log("Error detected: ", err) ); //catch error
})

//! creaFoto -- riga 12
function creaFoto(foto) {
    //contenitore principale row-col bootstrap, si svuota al click
    const section = document.getElementById("section");
    section.innerHTML = "";
    console.log(foto.photos);
    
    //forEach di jsonData.photos, array di immagini
    foto.photos.forEach((element, index) => {
        //elementi del DOM
            let card = document.createElement("div");
            let imgA = document.createElement("img");
            let author = document.createElement("span");
            let idAuthor = document.createElement("span");
        //classi, id
            card.classList.add("justify-content-center", "d-flex", "p-1", "flex-column");
            imgA.classList.add("mt-1", "img");
        //.innerHtml jsonData.photos
            imgA.src = foto.photos[index].src.tiny;
            idAuthor.innerText = "Id Author: " + foto.photos[index].photographer_id;
            author.innerText = "Author: " + foto.photos[index].photographer;
        //APPENDCHILD
            card.appendChild(imgA);
            card.appendChild(author);
            card.appendChild(idAuthor);
            section.appendChild(card);
    });

}
