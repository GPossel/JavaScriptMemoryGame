const data = {
    images: [
        { name: "cow" },
        { name: "pig" },
        { name: "horse" },
        { name: "cat" },
        { name: "goat" },
        { name: "dog" },
        { name: "duck" },
        { name: "hen" }
    ],
    players: [
        {
            name: "",
            score: 0
        },
        {
            name: "",
            score: 0
        }
    ],

}

const gameField = document.getElementById("game-field");

function init() {
    gameField.innerHTML = "";
    data.images.forEach(image => {
        let newCard = document.createElement("div");
        let newImage = document.createElement("img");
        let cover = document.createElement("div"); // wij maken een nieuwe cover zodat wij met de css hidden en displat block het kaartje verborgen en niet verborgen maken

        newImage.src = `/images/${image.name}.jpg`; // backticks, de schuine accentjes. Wij wilen niet verwijzen naar de path images, want wij loopen over alle images. Wij gaan nu string interpolation toevoegen.
        // de ${} is opnieuw javascript, omdat wij hem als lokale variabel image hebben kunnen wij de source attributre zetten
        cover.className = "cover";

        newCard.append(newImage, cover); // wij maken de newCard, waarin wij de new imae en de cover zetten.
        gameField.append(newCard); // hiermee voegen wij alle drie toe aan de gameField
    })  // fat arrow function, inline function(annonomous function)
}

function checkMatch() {

}

function onTurnCard() {

}