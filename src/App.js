import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Eligibility from './components/Eligibility';
import NavHeader from './components/NavHeader';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Sites from './components/Sites';
import Faq from './components/Faq';

function App() {
  return (
    <div className="container">
      <NavHeader />
      <div className="main-content">
        <Switch>
          <Route path="/eligibility" component={Eligibility}/>
          <Route path="/sites" component={Sites}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
