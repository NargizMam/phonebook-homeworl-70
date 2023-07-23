import React from 'react';
import Layout from "./UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AddContact from "./containers/AddContacts/AddContacts";

function App() {
  return (
    <>
       <Layout>
           <Routes>
               <Route path="/" element={(
                   <Home/>
               )}/>

               <Route path="/new-contact" element={(<AddContact />)}/>
           </Routes>
       </Layout>
    </>
  );
}

export default App;
