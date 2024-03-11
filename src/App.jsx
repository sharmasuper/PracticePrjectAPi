
import Navbar from './APIcommon/Navbar';

import AddCard from './component/AddCard';
import NextPage from './component/NextPage';
import ShowApiProduct from './component/ShowApiProduct'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        
        <Route exact path="/" element={<ShowApiProduct/>}></Route>
        <Route exact path='/AddTocard' element={<AddCard/>}></Route>
        <Route exact path="/AddProduct/:title" element = {<NextPage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
