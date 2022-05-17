import React from 'react';
import ReactDOM from 'react-dom';


import Footer  from './components/shared/footer/footer';
import {Header } from './components/shared/header/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
  
<Header/>


<Footer/>
</React.StrictMode>,
  document.getElementById("root")
 
  );