import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "./iMovie.css";
import Imovie from './components/Imovie';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';



const App = () => {
  
      
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="imovie" element={<Imovie />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<PrivateRoute>
            <Route path="imovie" element={<Imovie />} />
          </PrivateRoute>} />
          
      </Routes> 
        
    </BrowserRouter>     
  );
}

export default App;
