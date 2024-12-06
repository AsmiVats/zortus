import About from '@/components/About/About'
import Details from '@/components/Details/Details'
import Header from '@/components/Header/Header'
import Services from '@/components/Services/Services'
import Navbar from '@/components/Header/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Details/>
      <Services/>
      <About/>
      </div>
  )
}

export default Home