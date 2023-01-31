import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import signinScreen from './screen/signinscreen.js';

function App() {
  return (
    <BrowserRouter>
    <main>
    <Route path="/signin" component={signinScreen}></Route>
    </main>
    </BrowserRouter>
  )
}

export default App
