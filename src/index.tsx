import React from 'react';
import {
  AlertProviderProps,
  positions,
  Provider as AlertProvider,
  transitions,
} from 'react-alert';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Alert from './component/alert/alert';
import './index.css';
import NotFound from './page/404/404';
import Home from './page/home/home';
import Preview from './page/preview/preview';
import Provider from './store/provider';
import NavBar from './component/nav-bar/nav-bar';

const alertOptions: Partial<AlertProviderProps> = {
  offset: '1rem',
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.FADE,
};

render(
  <Provider>
    <div className='container mx-auto pb-6 px-6'>
      <BrowserRouter>
        <AlertProvider template={Alert} {...alertOptions}>
          <Switch>
            <Route component={Home} exact path='/' />
            <>
              <NavBar />
              <Switch>
                <Route component={Preview} exact path='/preview' />
                <Route component={NotFound} />
              </Switch>
            </>
          </Switch>
        </AlertProvider>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
