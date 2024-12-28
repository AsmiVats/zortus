import About from '@/components/About/About'
import Details from '@/components/Details/Details'
import { Faq } from '@/components/FAQ/Faq'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BlogSection from '@/components/Blogs/Blogs'
import Service from '@/components/Services/Service'
function Home() {
  return (
    <div className='p-2'>

      <Header/>
      <Details/>
      <Service />
      <div className='bg-x[#FAFAFA]'>
         <About/>
      <Faq/>
      <BlogSection/>
      <Footer/>     
      </div>
     
      </div>
  )
}

export default Home