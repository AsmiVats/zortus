import About from '@/components/About/About'
import Details from '@/components/Details/Details'
import { Faq } from '@/components/FAQ/Faq'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Services from '@/components/Services/Services'
import BlogSection from '@/components/Blogs/Blogs'
import Card2 from '@/components/Services/Card'
import CTASection from '@/components/Common/CtaSection'
function Home() {
  return (
    <div className='p-2'>

      <Header/>
      <Details/>
      <Services/>
      <div className='bg-x[#FAFAFA]'>
         <About/>
      <Faq/>
      <BlogSection/>
      <CTASection/>
      <Footer/>
      <Card2 />
      
      </div>
     
      </div>
  )
}

export default Home