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

// för att få ut id från urlen
const urlId = new URLSearchParams(window.location.search)
const beerId = urlId.get("id")
console.log("ID from URL:", beerId)

// samma function för att hämta från apin som index.
// Borde gå att lägga separat och importera.
async function getSingleBeer(beerUrl: string): Promise<Exempel[]> {
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

// Funktion för att skriva ut information om ölen.
async function beerInfo(beerId: string): Promise<void> {
  const data = await getSingleBeer(`https://api.punkapi.com/v2/beers/${beerId}`)
  console.log(data[0].name)

  //Hämtar img_url
  const image = document.querySelector("#beer-image-info") as HTMLImageElement
  //Lägger in bilden i html
  image.src = data[0].image_url
  //hämtar titel
  const title = document.querySelector("#beer-name-info") as HTMLElement
  title.innerHTML = data[0].name
}

beerInfo(beerId)
