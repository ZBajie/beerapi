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
function getBeer(beerUrl) {
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
function randomBeer() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getBeer("https://api.punkapi.com/v2/beers/random");
        console.log(data[0].name);
        //Hämtar img_url
        const image = document.querySelector(".beer-image");
        //Lägger in bilden i html
        image.src = data[0].image_url;
        //hämtar titel
        const title = document.querySelector(".beer-name");
        title.innerHTML = data[0].name;
    });
}
randomBeer();
function beerInfo() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
