const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  const allShips = await res.json()  
  return allShips.results
}