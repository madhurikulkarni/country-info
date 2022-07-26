import { Routes, Route } from 'react-router-dom'
import { CountryDetail } from './pages/detail'
import { CountryList } from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />}></Route>
      <Route path="/details" element={<CountryDetail />} />
    </Routes>
  )
}

export default App
