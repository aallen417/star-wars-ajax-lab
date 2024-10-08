// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

// css
import "./AllStarships.css"

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
      <h1>STAR WARS STARSHIPS</h1>
      <main>
        {allStarships.map(starship =>                     
          <Link className="starship-link" to={`/${starshipKey(starship.url)}`} key={starshipKey(starship.url)}> 
            {starship.name}
          </Link>          
        )}
      </main>
    </>
  )
}

export default AllStarships