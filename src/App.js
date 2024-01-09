import './App.css';
import MainPage from './pages/MainPage';
import Partners from './components/Partners'
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
      <MainPage/>
      <Partners/>
      <Gallery />
    </div>
  );
}

export default App;