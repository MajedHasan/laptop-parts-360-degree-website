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
import RequireUser from './Pages/Login/RequireUser';
import RequireAdmin from './Pages/Login/RequireAdmin';

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

          <Route path='myorders' element={
            <RequireUser>
              <MyOrders></MyOrders>
            </RequireUser>
          }></Route>
          <Route path='addreview' element={
            <RequireUser>
              <AddAReview></AddAReview>
            </RequireUser>
          }></Route>

          <Route path='manageAllOrder' element={
            <RequireAdmin>
              <ManageAllOrders></ManageAllOrders>
            </RequireAdmin>
          }></Route>
          <Route path='addAProduct' element={
            <RequireAdmin>
              <AddAProduct></AddAProduct>
            </RequireAdmin>
          }></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path='manageProducts' element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>

          <Route path='payment/:id' element={
            <RequireUser>
              <Payment></Payment>
            </RequireUser>
          }></Route>

          <Route path='manageProducts/:id' element={
            <RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>
          }></Route>
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
