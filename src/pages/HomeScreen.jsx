import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import '../App.css'
import Originals from '../components/Originals'
import requests from '../requests'
import Row from './Row'

function HomeScreen() {
  return (
    <div className="bg-black1">
      <Header />

      {/* Carrousel */}
      <Carrousel />

      {/* Originals */}
      {/* <Originals /> */}

      <Row
        title='ORIGINAIS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title='MELHORES AVALIAÇÕES'
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />

      <Row
        title='ROMANCE'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

      <Row
        title='AÇÃO'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />

      <Row
        title='COMÉDIA'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />

      <Row
        title='TERROR'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      
      <Row
        title='DOCUMENTÁRIOS'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  )
}

export default HomeScreen
