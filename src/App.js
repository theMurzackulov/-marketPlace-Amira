import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/> 
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
