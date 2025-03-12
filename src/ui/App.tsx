// import BreakingContent from '@/_components/breakingContent'
// import Content from '@/_components/content'
import Footer from '@/_components/footer'
import Navbar from '@/_components/navbar'
import TimeSelectContent from '@/_components/timeSelectContent'

function App() {

  return (
    <div className='w-screen h-screen bg-[#efefef]'>
      <div>
        <Navbar />
      </div>


      <div className="flex items-center justify-center">
        {/* <Content /> */}
        <TimeSelectContent />
        {/* <BreakingContent /> */}
      </div>

      <div className="flex items-center justify-center">
        <Footer />
      </div>

    </div>
  )
}

export default App
