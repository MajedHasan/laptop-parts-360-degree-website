import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route to='/' element={<Home></Home>}></Route>
        <Route to='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <h2 className='text-purple-500 text-center font-bold text-8xl'>Test</h2>
    </>
  );
}

export default App;
