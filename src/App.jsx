import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css'
import './assets/styles/_styles.scss';

const App = () => (
  <Router>
    <div className="main">
              <Header />
              <ToastContainer autoClose={2000} />
              <Switch >
                {routes.map((route) => (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Switch>
            </div>
  </Router>
);

export default App;
