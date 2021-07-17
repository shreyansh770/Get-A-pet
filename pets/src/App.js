import React, { Component } from 'react';
import List from './List';
import Navbar from './navbar';

function App() {
  return (
       <React.Fragment>
         <Navbar/>
         <div className="row m-4">
            <div className="col-8">
              <List/>
            </div>
          </div>
       </React.Fragment>
  );
}

export default App;
