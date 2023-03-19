 
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import {Route, BrowserRouter as Router ,Switch } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/producList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';
const App = () => {
  return (
    <Router>
     
      <div className='app'>
          <Navbar />
      <div className="container">  
          <Sidebar />
          <Switch>
          <Route exact path='/dashboard'>
          <Home/>
          </Route>
          <Route path='/users'>
          <UserList/>
          </Route>
          <Route path='/user/:id'>
          <User/>
          </Route>
          <Route path='/newUser'>
          <NewUser/>
          </Route>
          <Route path='/products'>
          <ProductList/>
          </Route>
          <Route path='/product/:id'>
          <Product/>
          </Route>
          <Route path='/newProduct'>
          <NewProduct/>
          </Route>
          </Switch>      
          </div>    
      </div>
     
    </Router>
  )
}

export default App