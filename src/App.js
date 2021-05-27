import './App.css';
import HomeScreen from './screens/homeScreen/homeScreen';
import LoginScreen from './screens/loginScreen/loginScreen';
import NotFoundScreen from './screens/notFoundScreen/notFoundScreen';
import RegisterScreen from './screens/registerScreen/registerScreen';
import InitScreen from './screens/initScreen/initScreen';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomeScreen} />
          <Route exact={true} path="/login" component={LoginScreen} />
          <Route exact={true} path="/register" component={RegisterScreen} />
          <Route exact={true} path="/init" component={InitScreen} />
          <Route path="/*" component={NotFoundScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
