import './App.css'
import Homepage from './pages/Homepage'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Navigation />
      <div className='main-section'>
      <Homepage />
      </div>
    </>
  )
}

export default App
