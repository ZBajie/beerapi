var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"
// Funktion för att hämta från apin
function getBeerSearch(beerUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(beerUrl);
            if (response.status === 200) {
                const data = yield response.json();
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
// eventlistener för sökrutan
document.addEventListener("DOMContentLoaded", function () {
    const searchBeerButton = document.querySelector("#search-beer-button");
    searchBeerButton.addEventListener("click", (event) => {
        event.preventDefault();
        doSearchStuff();
    });
    // Utför sökningen
    function doSearchStuff() {
        return __awaiter(this, void 0, void 0, function* () {
            const searchBeerElement = document.querySelector("#beersearch");
            const searchWord = searchBeerElement.value;
            const data = yield getBeerSearch(`https://api.punkapi.com/v2/beers?beer_name=${searchWord}`);
            displaySearchResult(data);
        });
    }
});
// Skriver ut sökresultatet
function displaySearchResult(data) {
    const listItemUl = document.querySelector("#display-search-result");
    if (data.length > 0) {
        // tar bort tidigare sökning
        while (listItemUl.firstChild) {
            listItemUl.removeChild(listItemUl.firstChild);
        }
        // Skriver ut ny lista
        data.forEach((item) => {
            const listItems = document.createElement("li");
            listItems.innerHTML = item.name;
            listItems.setAttribute("beer-id", item.id.toString());
            listItems.setAttribute("class", "beer-in-list");
            listItemUl.appendChild(listItems);
            addclickevent();
        });
    }
    else {
        console.log("No result found");
    }
}
// Lyssnar på klick i sökresultatlistan och skickar id till beerinfo sidan
function addclickevent() {
    const beerInSearchList = document.querySelectorAll(".beer-in-list");
    beerInSearchList.forEach((item) => {
        item.addEventListener("click", () => {
            const sendId = item.getAttribute("beer-id");
            // fixar urlen som sänds
            const url = `beerinfo.html?id=${sendId}`;
            window.location.href = url;
        });
    });
}
export {};
