import React from 'react';
import {
  AlertProviderProps,
  positions,
  Provider as AlertProvider,
  transitions,
} from 'react-alert';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Alert from './component/alert/alert';
import './index.css';
import Home from './page/home/home';
import Preview from './page/preview/preview';
import Provider from './store/provider';

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
            <Switch>
              <>
                <nav className='flex h-24 items-center'>
                  <Link to='/' replace>
                    <div className='title select-none text-6xl'>
                      <span className='text-gold'>T</span>ou
                      <sup className='text-4xl'>4</sup>
                    </div>
                  </Link>
                </nav>
                <Route component={Preview} exact path='/preview' />
              </>
            </Switch>
          </Switch>
        </AlertProvider>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
