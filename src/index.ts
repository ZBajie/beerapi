interface Exempel {
  age: number
  breed: string
  chipNumber: string
  img: string
  name: string
  //owner: Owner
  present: boolean
  sex: string
}
let beerUrl: string
//beerUrl = "https://api.punkapi.com/v2/beers/random"
//beerUrl = "https://api.punkapi.com/v2/beers"
beerUrl = "https://api.punkapi.com/v2/beers?beer_name=Buzz"

async function getBeer() {
  try {
    const response = await fetch(beerUrl)
    console.log(response)
    if (response.status === 200) {
      const data: Exempel[] = await response.json()
      console.log(data)
    } else {
      throw Error("Något gick fel, försök igen senare")
    }
  } catch (error) {
    console.log(error)
  }
}

getBeer()
