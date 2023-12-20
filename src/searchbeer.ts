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
