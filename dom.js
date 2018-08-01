const databaseString = localStorage.getItem("HomeInventory")
const homeData = JSON.parse(databaseString)
console.log(homeData);

let homeCrafts = homeData.crafts
let homeFurniture = homeData.furniture
let homeElectronics = homeData.electronics


let fragment = document.createDocumentFragment();
document.body.appendChild(fragment);

let articleTag = document.createElement("article");
articleTag.id = "myStuff";
articleTag.style.backgroundcolor = "yellow";
fragment.appendChild(articleTag);

// var title = document.createElement("h2");
// title.classList = "craftsTitle", "electronicsTitle", "furnitureTitle";


let addInventory = function (homeCrafts) {
    let Section = document.createElement("section");
    Section.id = "inventorySection";
    articleTag.appendChild(Section);
    let inventoryInfo =  document.getElementById("inventorySection");

//    ----------------pTag for NAME------------

    // let itemName = document.createElement("p");
    // itemName.id = "nameID"
    // itemName.innerText = "NAME";
    // Section.appendChild(itemName);

// ----------------------pTag for LOCATION----------
    // let itemLocation = document.createElement("p");
    // itemLocation.id = "locationID"
    // itemLocation.innerText = "LOCATION";
    // Section.appendChild(itemLocation);

// ----------------------pTag for DESCRIPTION----------
    // let itemDescription = document.createElement("p");
    // itemDescription.id = "descriptionID"
    // itemDescription.innerText = "DESCRIPTION";
    // Section.appendChild(itemDescription);

    for (let i = 0; i < homeCrafts.length; i++) {
        const currentItem = homeCrafts[i];
        inventoryInfo.innerHTML += `<p> <b> NAME ${currentItem}.crafts["name"]</b></p>
        <p> <b> LOCATION ${currentItem}</b></p>
        <p> <b> DESCRIPTION ${currentItem}</b></p>`
    }

}
addInventory(homeCrafts)
console.log(addInventory);

