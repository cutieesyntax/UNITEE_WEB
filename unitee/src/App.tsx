import './App.css'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import NotFound from './pages/common/not-found'
import Main from './pages/main/main'
import Home from './pages/main/home'
import Shop from './pages/main/shop'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/main' element={ <Main/> }>
          <Route index element={ <Home/> }/>
          <Route path='shop' element={ <Shop/> }/>
        </Route>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </Router>
  )
}

export default App
