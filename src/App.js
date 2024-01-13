import './App.css'
import MainPage from './pages/MainPage'
import Partners from './components/Partners'
import About from './components/About'
import CircleCountdown from './components/CircleCountdown'
import Test from './components/Test'
import HackForm from './components/HackForm'
import HackathonForm from './components/HackathonForm'
import { NextUIProvider } from '@nextui-org/react'
import test1 from './components/test1'
import Test1 from './components/test1'
import HackathonForm2 from './components/HackathonForm2'

function App() {
  return (
    <div className="App overflow-auto h-screen">
      {/* <About />
      <CircleCountdown /> */}
      {/* <HackForm /> */}

      <HackathonForm />
      {/* <Test1 /> */}

      {/* <Test /> */}
    </div>
  )
}

export default App
