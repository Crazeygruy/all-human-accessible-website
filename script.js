// de button opzoeken
// de card opzoeken
const alleKaarten = document.querySelectorAll("article");

// op de button klikken
alleKaarten.forEach(function(deCard) {
    const cardMeerButton = deCard.querySelector("div:nth-of-type(1) button");
    const cardMinderButton = deCard.querySelector("div:nth-of-type(2) button");

    // op de button klikken
    // iets met de kaart doen - draaien
    cardMeerButton.addEventListener("click", function() {
        deCard.classList.add("is-meer");
    });

    cardMinderButton.addEventListener("click", function() {
        deCard.classList.remove("is-meer");
    });
});