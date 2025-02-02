import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/" component={Home} />
    <Redirect to="/not-found" />
    <Route component={NotFound} />
  </Switch>
)

export default App
