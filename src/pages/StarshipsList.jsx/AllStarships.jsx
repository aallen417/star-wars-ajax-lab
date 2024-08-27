// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

const AllStarships = () => {
  const [allStarships, setAllStarships] = useState([])

const starshipKey = function (url) {
  const urls = url.split("/")
  return urls[5]  
}
  
  useEffect(() => {    
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData)
      
    }
    fetchAllStarships()
  }, [])

  return (
    <>
      <main className="all-starships">
        <h1>STAR WARS STARSHIPS</h1>
          {allStarships.map(starship =>
            <Link to={`/${starshipKey(starship.url)}`} className="starship-link-container" key={starshipKey(starship.url)}> 
              {starship.name}
            </Link>
          )}
      </main>
    </>
  )
}

export default AllStarships