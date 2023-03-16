import Hero from '../Heropage/Heropage';
import Listen from '../Listentoearn/Listen';
import Uses from '../Uses/Uses';
import Song from '../Song/Song';
import Carousel from '../Artists/Artists';
import Partner from '../Partner/Partner';
import Download from '../Download/Download';
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Listen />
      <Uses />
      <Song />
      <Carousel/>
      <Partner />
      <Download/>
    </div>
  )
}

export default Home
