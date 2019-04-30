import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/_styles.scss';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{ enter: 400, exit: 300 }}
          >
            <div className="main">
              <Header />
              <ToastContainer autoClose={2000} />
              <Switch location={location}>
                {routes.map((route, index) => (
                  <Route
                    key={route.name}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default App;
