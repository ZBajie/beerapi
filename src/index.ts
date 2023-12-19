interface Exempel {
  age: number
  breed: string
  chipNumber: string
  image_url: string
  name: string
  owner: string
  present: boolean
  sex: string
  id: number
}

/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

async function getBeer(beerUrl: string): Promise<Exempel[]> {
  try {
    const response = await fetch(beerUrl)
    console.log(response)
    if (response.status === 200) {
      const data: Exempel[] = await response.json()
      console.log(data);
      return data
    } else {
      throw Error("Något gick fel, försök igen senare")
    }
  } catch (error) {
    console.log(error)
  }
}

let beerId: number


getBeer().then
/* async function randomBeer() {
  const data = await getBeer("https://api.punkapi.com/v2/beers/random")
  console.log(data[0].name)
  //Hämtar img_url
  const image = document.querySelector("#beer-image") as HTMLImageElement
  //Lägger in bilden i html
 image.src = data[0].image_url;
 //hämtar titel
 const title = document.querySelector("#beer-name") as HTMLElement;
 title.innerHTML = data[0].name;
const infoButton = document.querySelector("#infoButton") as HTMLElement
infoButton.addEventListener("click", (data) => beerInfo(data))
} */

async function randomBeer() {
  const data = await getBeer("https://api.punkapi.com/v2/beers/random")
  console.log(data[0].name)
  //Hämtar img_url
  const image = document.querySelector("#beer-image") as HTMLImageElement
  //Lägger in bilden i html
 image.src = data[0].image_url;
 //hämtar titel
 const title = document.querySelector("#beer-name") as HTMLElement;
 title.innerHTML = data[0].name;
const infoButton = document.querySelector("#infoButton") as HTMLElement
infoButton.addEventListener("click", (data) => beerInfo(data))
}


randomBeer() 

async function beerInfo(data){
 console.log("det fungerar");
 window.location.href = "beerInfo.html";
 console.log(data)
}

