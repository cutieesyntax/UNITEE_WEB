import './App.css'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import NotFound from './pages/common/not-found'
import Main from './pages/main/main'
import Home from './pages/main/home'
import Shop from './pages/main/shop'
import Cart from './pages/main/cart'
import User_Profile from './pages/main/user_profile'
import Supplier from './pages/supplier/supplier_items'
import Add_item from './pages/supplier/add_item'
import Update_item from './pages/supplier/update_item'
import Admin_Dashboard from './pages/admin/admin-dashboard'
import Add_supplier from './pages/admin/add_supplier'
import View_Customers from './pages/admin/view_customers'
import Admin_Main from './pages/admin/admin_main'
import Orders from './pages/admin/orders'
import Purchase_History from './pages/main/purchase_history'
import Notif from './pages/main/notif'


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/main' element={ <Main/> }>
          <Route index element={ <Home/> }/>
          <Route path='shop' element={ <Shop/> }/>
          <Route path='cart' element={ <Cart/> }/>
          <Route path='user_profile' element={ <User_Profile/> }></Route>
          <Route path='notif' element={ <Notif/> }></Route>
          <Route path='purchase_history' element={ <Purchase_History/> }></Route>
          <Route path='/main' element={ <Main/> }></Route>  
        </Route>
        
        <Route path="/admin_main" element={ <Admin_Main/> }>
          <Route index element={ <Admin_Dashboard /> } />
          <Route path='view_customers' element={ <View_Customers/> }/>
          <Route path='add_supplier' element={ <Add_supplier/> }/>
          <Route path='orders' element={ <Orders/> }></Route>
        </Route>

        <Route path='supplier_items' element={ <Supplier/> }></Route>

        <Route path='/update_item' element={ <Update_item/> }></Route>

        <Route path='/add_item' element={ <Add_item/> }></Route>

        
        
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </Router>
  )
}

export default App
