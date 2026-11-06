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

// functie aan uit popups
function showPopup(id) {
    document.getElementById(id).showModal();
}

function closePopup(id) {
    document.getElementById(id).close();
}

// Create the map
const map = L.map('map').setView([52.352007, 4.930380], 19);

const bounds = [
    [52.352007, 4.930380]
    [52.352248, 4.931638]

];
map.setMaxBounds (bounds);

// Add OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Create a custom icon
const flowerIcon = L.icon({
    iconUrl: 'Images/Mapmarker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

// Add marker to map
L.marker([52.351840, 4.931011], {
    icon: flowerIcon
})
.addTo(map)
.bindPopup(`<article class="flower-card">
                <div>
                    <h2>Darwin Zuurbes</h2>
                    <img class="tb" src="Images/DarwinZuurbes.png" alt="Darwin Zuurbes">
                    <button>Meer</button>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button aria-label="verberg de details">X</button>
                </div>
            </article>`);

L.marker([52.351740, 4.930649], {
    icon: flowerIcon
})
.addTo(map)
.bindPopup(`<article class="flower-card">
                <div>
                    <h2>Valeriaan</h2>
                    <img class="tb" src="Images/Valeriaan.png" alt="Valeriaan">
                    <button>Meer</button>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button aria-label="verberg de details">X</button>
                </div>
            </article>`);

L.marker([52.352061, 4.931110], {
    icon: flowerIcon
})
.addTo(map)
.bindPopup(`<article class="flower-card">
                <div>
                    <h2>Wilde Marjolein</h2>
                    <img class="tb" src="Images/WildMarjolein.png" alt="Wilde Marjolein">
                    <button>Meer</button>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button aria-label="verberg de details">X</button>
                </div>
            </article>`);