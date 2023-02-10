 
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/Home'

const App = () => {
  return (
      <div className='app'>
          <Navbar />
          <div className="container">        
          <Sidebar />
          <Home/>
          </div>    
    </div>
  )
}

export default App