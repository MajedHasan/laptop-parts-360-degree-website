import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route to='/' element={<Home></Home>}></Route>
        <Route to='/blogs' element={<Blogs></Blogs>}></Route>
        <Route to='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route to='/dashboard' element={<Dashboard></Dashboard>}></Route>

        <Route to='/login' element={<Login></Login>}></Route>
        <Route to='/register' element={<Register></Register>}></Route>

        <Route to='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <h2 className='text-purple-500 text-center font-bold text-8xl'>Test</h2>
    </>
  );
}

export default App;
