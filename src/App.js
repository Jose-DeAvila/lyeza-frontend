import './App.css';
import HomeScreen from './screens/homeScreen/homeScreen';
import LoginScreen from './screens/loginScreen/loginScreen';
import NotFoundScreen from './screens/notFoundScreen/notFoundScreen';
import RegisterScreen from './screens/registerScreen/registerScreen';
import ConsultScreen from './screens/consultScreen/consultScreen';
import InitScreen from './screens/initScreen/initScreen';
import ResultScreen from './screens/resultScreen/resultScreen';
import MenuScreen from './screens/menuScreen/menuScreen';
import MedicineContext from './context/medicineContext';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [medicine, setMedicine] = useState({});

  return (
    <div className="App">
      <MedicineContext.Provider value={[medicine, setMedicine]}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={HomeScreen} />
            <Route exact={true} path="/login" component={LoginScreen} />
            <Route exact={true} path="/register" component={RegisterScreen} />
            <Route exact={true} path="/init" component={InitScreen} />
            <Route exact={true} path="/consult" component={ConsultScreen} />
            <Route exact={true} path="/result" component={ResultScreen} />
            <Route exact={true} path="/menu" component={MenuScreen} />
            <Route path="/*" component={NotFoundScreen} />
          </Switch>
        </Router>
      </MedicineContext.Provider>
    </div>
  );
}

export default App;
