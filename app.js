let questLog = [
    {title: "Oppdagelsen av Tommen", description: "Du finner en gammel Tome som avslører Fyrebreaths skjebnesvangre nærvær."},
    {title: "Gjennom de tåkede ruinene", description: "Du navigerer gjennom de tåkede ruinene av Tael'arun, på jakt etter et middel mot dragen."},
    {title: "Kampen med Fyrebreath", description: "Du står ansikt til ansikt med den eldgamle dragen, bevæpnet med kunnskap og mot."}
];

let logList = document.getElementById("log-list");
let nextQuestButton = document.getElementById("next-quest");
let currentQuestIndex = 0;

nextQuestButton.addEventListener("click", () => {
    if (currentQuestIndex < questLog.length) {
        let quest = questLog[currentQuestIndex];
        let listItem = document.createElement("li");
        listItem.textContent = `${quest.title}: ${quest.description}`;
        logList.appendChild(listItem);
        currentQuestIndex++;
    } else {
        alert("Du har fullført alle oppdragene!");
    }
});

let inventory = ["Magisk sverd", "Helbredende urt"];
let inventoryList = document.getElementById("inventory-list");
let addItemButton = document.getElementById("add-item");

function updateInventory() {
    inventoryList.innerHTML = '';
    inventory.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        inventoryList.appendChild(listItem);
    });
}

addItemButton.addEventListener("click", () => {
    let newItem = prompt("Hva vil du legge til i inventaret?");
    if (newItem) {
        inventory.push(newItem);
        updateInventory();
    }
});

updateInventory();

let locations = [
    {name: "Whispering Forest", description: "En mystisk skog hvor trærne hvisker gamle hemmeligheter."},
    {name: "Echoing Caves", description: "Huleganger som reflekterer lyden av gamle skapninger."},
    {name: "Dragon's Lair", description: "Hule der den eldgamle dragen Fyrebreath hviler."}
];

let locationButtons = document.getElementById("location-buttons");
let locationDescription = document.getElementById("location-description");

locations.forEach(location => {
    let button = document.createElement("button");
    button.textContent = location.name;
    button.addEventListener("click", () => {
        locationDescription.textContent = location.description;
    });
    locationButtons.appendChild(button);
});
