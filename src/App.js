import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)

export default App
