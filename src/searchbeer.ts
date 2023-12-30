import { Exempel } from "./interfaces"

/* let beerUrl: string */
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
//beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

// Funktion för att hämta från apin
async function getBeerSearch(beerUrl: string): Promise<Exempel[]> {
  try {
    const response = await fetch(beerUrl)
    if (response.status === 200) {
      const data: Exempel[] = await response.json()
      return data
    } else {
      throw Error("Något gick fel, försök igen senare")
    }
  } catch (error) {
    console.log(error)
  }
}
// eventlistener för sökrutan
document.addEventListener("DOMContentLoaded", function () {
  const searchBeerButton = document.querySelector(
    "#search-beer-button"
  ) as HTMLInputElement
  searchBeerButton.addEventListener("click", (event) => {
    event.preventDefault()
    doSearchStuff()
  })
  // Utför sökningen
  async function doSearchStuff(): Promise<void> {
    const searchBeerElement = document.querySelector(
      "#beersearch"
    ) as HTMLInputElement
    const searchWord: string = searchBeerElement.value
    const data = await getBeerSearch(
      `https://api.punkapi.com/v2/beers?beer_name=${searchWord}`
    )

    displaySearchResult(data)
  }
})
// Skriver ut sökresultatet
function displaySearchResult(data: Exempel[]) {
  const listItemUl = document.querySelector(
    "#display-search-result"
  ) as HTMLDivElement
  if (data.length > 0) {
    // tar bort tidigare sökning
    while (listItemUl.firstChild) {
      listItemUl.removeChild(listItemUl.firstChild)
    }
    // Skriver ut ny lista
    data.forEach((item) => {
      const listItems: HTMLLIElement = document.createElement("li")
      listItems.innerHTML = item.name
      listItems.setAttribute("beer-id", item.id.toString())
      listItems.setAttribute("class", "beer-in-list")
      listItemUl.appendChild(listItems)

      addclickevent()
    })
  } else {
    console.log("No result found")
  }
}

// Lyssnar på klick i sökresultatlistan och skickar id till beerinfo sidan
function addclickevent(): void {
  const beerInSearchList: NodeListOf<Element> =
    document.querySelectorAll(".beer-in-list")
  beerInSearchList.forEach((item: Element) => {
    item.addEventListener("click", () => {
      const sendId: string = item.getAttribute("beer-id")
      // fixar urlen som sänds
      const url: string = `beerinfo.html?id=${sendId}`
      window.location.href = url
    })
  })
}
