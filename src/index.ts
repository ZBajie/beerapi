interface Exempel {
  age: number
  breed: string
  chipNumber: string
  image_url: string
  name: string
  owner: string
  present: boolean
  sex: string
}

/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

async function getBeer(beerUrl: string) {
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

async function randomBeer() {
  const data = await getBeer("https://api.punkapi.com/v2/beers/random")
  console.log(data[0].name)
  //Hämtar img_url
  const image = document.querySelector(".beer-image") as HTMLImageElement
  //Lägger in bilden i html
 image.src = data[0].image_url;
 //hämtar titel
 const title = document.querySelector(".beer-name") as HTMLElement;
 title.innerHTML = data[0].name;
}
randomBeer()

async function beerInfo(){
  
}
