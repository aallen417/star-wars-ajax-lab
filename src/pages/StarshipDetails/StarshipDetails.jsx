// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"

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
        <div>
          <p>NAME:</p>
          <p>Model:</p>
        </div>
      </main>
    </>
  )
}

export default StarshipDetails
