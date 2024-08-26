// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

const AllStarships = () => {
  const [allStarships, setAllStarships] = useState([])
  
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
            <div className="starship-link-container" key={starship.url}> 
              {starship.name}     
            </div>
          )}
      </main>
    </>
  )
}

export default AllStarships