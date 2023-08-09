import './App.css'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import NotFound from './pages/common/not-found'
import Main from './pages/main/main'
import Home from './pages/main/home'
import Shop from './pages/main/shop'
import Supplier from './pages/supplier/supplier_items'
import Add_item from './pages/supplier/add_item'
import Update_item from './pages/supplier/update_item'
//import Add_supplier from './pages/admin/add_supplier'
//import Supplier_details from './pages/admin/supplier_details'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/main/:id' element={ <Main/> }>
          <Route index element={ <Home/> }/>
          <Route path='shop' element={ <Shop/> }/>
          <Route path='/main/:id' element={ <Main/> }></Route>  
        </Route>
        {/* <Route path='/add_supplier' element={ <Add_supplier/> }></Route>
        <Route path='supplier_details' element={ <Supplier_details/> }></Route>  */}
        <Route path='/supplier_items/:id' element={ <Supplier/> }></Route>
        <Route path='/add_item/:id' element={ <Add_item/> }></Route>
        <Route path='/update_item/:id/:productId' element={ <Update_item/> }></Route>  
        
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </Router>
  )
}

export default App
