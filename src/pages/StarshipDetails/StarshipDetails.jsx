// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"

// css
import "./StarshipDetails.css"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])
  
  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <main>
        <div className="starship-details-container">
          <p>NAME: {starshipDetails.name}</p>
          <p>Model: {starshipDetails.model}</p>
          <Link to="/">RETURN</Link>
        </div>
      </main>
    </>
  )
}

export default StarshipDetails
