import { Exempel } from "./interfaces"

/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

// Funktion för att hämta från apin
async function getBeer(beerUrl: string): Promise<Exempel[]> {
  try {
    const response = await fetch(beerUrl)
    console.log(response)
    if (response.status === 200) {
      const data: Exempel[] = await response.json()
      console.log(data)
      return data
    } else {
      throw Error("Något gick fel, försök igen senare")
    }
  } catch (error) {
    console.log(error)
  }
}

// Funktion för att visa på ölen första sidan
async function randomBeer() {
  const data = await getBeer("https://api.punkapi.com/v2/beers/random")
  console.log(data[0].name)
  //Hämtar img_url
  const image = document.querySelector("#beer-image") as HTMLImageElement
  //Lägger in bilden i html
  image.src = data[0].image_url
  //hämtar titel
  const title = document.querySelector("#beer-name") as HTMLElement
  title.innerHTML = data[0].name

  // Skickar beer id till beerinfo sida.
  const infoButton = document.querySelector("#beer-info-link") as HTMLElement
  infoButton.onclick = function () {
    const sendId: number = data[0].id
    console.log("sendId", sendId)

    // fixar urlen som sänds
    const url: string = `beerinfo.html?id=${sendId}`
    window.location.href = url
  }
}

randomBeer()
