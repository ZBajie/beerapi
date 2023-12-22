import { Exempel } from "./interfaces"

/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

// Funktion för att hämta från apin
async function getBeerSearch(beerUrl: string): Promise<Exempel[]> {
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
document.addEventListener("DOMContentLoaded", function () {
  const searchBeerButton = document.querySelector(
    "#search-beer-button"
  ) as HTMLInputElement
  searchBeerButton.addEventListener("click", (event) => {
    event.preventDefault()
    doSearchStuff()
  })

  async function doSearchStuff(): Promise<void> {
    const searchBeerElement = document.querySelector(
      "#beersearch"
    ) as HTMLInputElement
    const searchWord: string = searchBeerElement.value
    console.log("search word", searchWord)
    const data = await getBeerSearch(
      `https://api.punkapi.com/v2/beers?beer_name=${searchWord}`
    )

    displaySearchResult(data)
  }
})

function displaySearchResult(data: Exempel[]) {
  const searchResultDiv = document.querySelector(
    "#display-search-result"
  ) as HTMLDivElement
  if (data.length > 0) {
    console.log("true")
  } else {
    console.log("false")
  }
}
