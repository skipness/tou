import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './page/home/home';
import Preview from './page/preview/preview';

render(
  <div className='container h-screen mx-auto pb-6 px-6'>
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path='/' />
        <Switch>
          <>
            <nav className='flex h-24 items-center'>
              <div className='title select-none text-6xl'>
                <span className='text-gold'>T</span>ou
                <sup className='text-4xl'>4</sup>
              </div>
            </nav>
            <Route component={Preview} exact path='/preview' />
          </>
        </Switch>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
