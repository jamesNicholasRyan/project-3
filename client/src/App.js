import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//! Import Components here

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import EventsPage from './components/Events'
import SingleEventPage from './components/EventDetails'
import CreateEvent from './components/CreateEvent'
import CreateLocation from './components/CreateLocation'
import SingleLocationPage from './components/SingleLocation'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import LoginAndRegister from './components/LoginAndRegister'
import Location from './components/Location'


// import 'bulma'
import './styles/style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/events" component={EventsPage}/>
      <Route exact path="/event/create" component={CreateEvent}/>
      <Route exact path="/event/:id" component={SingleEventPage}/>
      <Route exact path="/location/create" component={CreateLocation}/>
      <Route exact path="/location/:id" component={SingleLocationPage} />
      <Route exact path="/location" component={Location} />
      <Route exact path="/users" component={Users}/>
      <Route exact path="/user/:id" component={SingleUser}/>
      <Route exact path="/login" component={LoginAndRegister}/>
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App