var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// för att få ut id från urlen
const urlId = new URLSearchParams(window.location.search);
const beerId = urlId.get("id");
console.log("ID from URL:", beerId);
// samma function för att hämta från apin som index.
// Borde gå att lägga separat och importera.
function getSingleBeer(beerUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(beerUrl);
            console.log(response);
            if (response.status === 200) {
                const data = yield response.json();
                console.log(data);
                return data;
            }
            else {
                throw Error("Något gick fel, försök igen senare");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
// Funktion för att skriva ut information om ölen.
function beerInfo(beerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getSingleBeer(`https://api.punkapi.com/v2/beers/${beerId}`);
        console.log(data[0].name);
        //Hämtar img_url
        const image = document.querySelector("#beer-image-info");
        //Lägger in bilden i html
        image.src = data[0].image_url;
        //hämtar titel
        const title = document.querySelector("#beer-name-info");
        title.innerHTML = data[0].name;
        //Lägger till ingredients
        const ingredients = document.querySelector("#beeringredients");
        ingredients.innerHTML = data[0].ingredients.hops[0].name;
        //Description
        const description = document.querySelector("#beerdescription");
        description.innerHTML = data[0].description;
        const abv = document.querySelector("#beerabv");
        abv.innerHTML = data[0].abv;
        data[0].ingredients.hops.forEach((element) => {
            const listItemUl = document.querySelector("#beerhops");
            const listItems = document.createElement("li");
            listItems.innerHTML = element.name;
            listItemUl.appendChild(listItems);
        });
        data[0].ingredients.malt.forEach((element) => {
            const listItemUlMalt = document.querySelector("#beerhopsmalt");
            const listItems = document.createElement("li");
            listItems.innerHTML = element.name;
            listItemUlMalt.appendChild(listItems);
            const yeast = document.querySelector("#beeryeast");
            yeast.innerHTML = data[0].ingredients.yeast;
        });
    });
}
beerInfo(beerId);
export {};
