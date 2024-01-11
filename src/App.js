import './App.css'
import MainPage from './pages/MainPage'
import Partners from './components/Partners'
import About from './components/About'
import CircleCountdown from './components/CircleCountdown'
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <About />
      <CircleCountdown />

      {/* <Test /> */}
    </div>
  )
}

export default App
