import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import '../App.css'
import Originals from '../components/Originals'

function HomeScreen() {
  return (
    <div className="bg-black1">
      <Header />

      {/* Carrousel */}
      <Carrousel />

      {/* Originals */}
      <Originals />
    </div>
  )
}

export default HomeScreen
