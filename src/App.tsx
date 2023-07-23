import React from 'react';
import Layout from "./UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./conatiners/Home/Home";

function App() {
  return (
    <>
       <Layout>
           <Routes>
               <Route path="/" element={(
                   <Home/>
               )}/>

               {/*<Route path="/new-dish" element={(<NewContact />)}/>*/}
           </Routes>
       </Layout>
    </>
  );
}

export default App;
