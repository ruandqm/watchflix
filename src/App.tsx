import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="heroSection">
          <Navbar />
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default App