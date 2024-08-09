import logo from './logo.svg';
import './App.css';
import { Home } from './navbar/Home';
import { About } from './navbar/About';
import { Product } from './navbar/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Nav/Nav';
import { Error } from './navbar/Error';
// import { Car } from './propsmethod/Car';
import { value } from './propsmethod/Car';



//made change
function App() {
  return (
    <Router>
      <Routes>

        <Route path='*' element={<Error />} />
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />

        </Route>
      </Routes>
    </Router>
  );
}

// export default App;

// export const Myfunction=()=>{
//   return(
//     <>
//     {/* <Car/> */}
//     <value/>
//     </>
//   )
// }


