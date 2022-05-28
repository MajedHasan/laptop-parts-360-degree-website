import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import Profile from './Pages/Dashboard/Profile';
import AddAReview from './Pages/Dashboard/AddAReview';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import Users from './Pages/Dashboard/Users';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Purchase from './Pages/Purchase/Purchase';
import Payment from './Pages/Dashboard/Payment';
import ManageProduct from './Pages/Dashboard/ManageProduct';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddAReview></AddAReview>}></Route>
          <Route path='manageAllOrder' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addAProduct' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageProducts/:id' element={<ManageProduct></ManageProduct>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
