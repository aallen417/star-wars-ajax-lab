const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  const allShips = await res.json()  
  return allShips.results
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}