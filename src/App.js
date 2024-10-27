import './App.css';
import Layout from './components/common/Layout/Layout';
import Home from './components/Pages/Home/Home';
import {  Routes, Route,  BrowserRouter } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
