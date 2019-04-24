import React from 'react';
import './App.css';

import { ApolloProvider} from "react-apollo"
import apolloClient from "./apolloclient"
import { BrowserRouter as Router, Route } from "react-router-dom";


import Items from "./components/Items"
import Users from "./components/Users"
import LandingPage from "./components/LandingPage"
import SignupForm from "./components/SignupForm"
import LoginForm from "./components/LoginForm"



              // <Route path="/about/" component={About} />
              // <Route path="/Contact/" component={Contact} />


function App() {

  return (

    <ApolloProvider client={apolloClient}>
    <div className = "App">
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/signup" exact component={SignupForm} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/items" exact component = {Items} />
      <Route path="/users" exact component = {Users} />
    </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
