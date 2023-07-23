
import './App.css';
import {Routes , Route} from "react-router-dom";
import {MYNAV} from './components/MYNAV';
import {About} from "./components/aboutPage/about";
import {Home} from "./components/home/home";
import MyFooter from "./components/myFooter";
import {Contact} from "./components/contactPage/ContactUs";
import Products from "./components/products/products";
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  let [contryData , setContryData] = useState([]);
useEffect(() => {
    axios.get("https://api.instantwebtools.net/v1/airlines").then((response) => {
      setContryData(response.data);
     
    }).catch((error) => {
      console.log(error);
    })
} ,[])
  return (
    <div className="App">
    <MYNAV />
    <Routes>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contactUS' element={<Contact />} />
      <Route path='countries' element={<Products data = {contryData}/>} />
    </Routes>
    <MyFooter />
    </div>
  );
}

export default App;
