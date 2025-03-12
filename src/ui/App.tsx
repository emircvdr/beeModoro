import BreakingContent from '@/_components/breakingContent'
import Content from '@/_components/content'
import Footer from '@/_components/footer'
import Navbar from '@/_components/navbar'
import TimeSelectContent from '@/_components/timeSelectContent'
import { useState } from 'react'

function App() {
  const [selectedTime, setSelectedTime] = useState<number | null>(null)
  const [isTimerFinished, setIsTimerFinished] = useState(false)
  const [stopTime, setStopTime] = useState(true)
  return (
    <div className='w-screen h-screen bg-[#efefef]'>
      <div>
        <Navbar />
      </div>

      <div className="flex items-center justify-center">
        {selectedTime ? (
          isTimerFinished ? (
            <BreakingContent
              setStopTime={setStopTime}
              setIsTimerFinished={setIsTimerFinished}
              setSelectedTime={setSelectedTime}
            />
          ) : (
            <Content
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              setIsTimerFinished={setIsTimerFinished}
            />
          )
        ) : (
          <TimeSelectContent
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}
      </div>

      <div className="flex items-center justify-center">
        <Footer setSelectedTime={setSelectedTime} />
      </div>
    </div>
  )
}

export default App
