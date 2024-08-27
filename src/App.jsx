// npm modules
import { Route, Routes } from 'react-router-dom'

// pages
import AllStarships from './pages/StarshipsList/AllStarships'
import StarshipDetails from "./pages/StarshipDetails/StarshipDetails"

// css
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllStarships />} />
        <Route path="/:starshipId" element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
