"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import {getPeople} from './actions/peopleActions';

import {bindActionCreators} from 'redux';
const middleware =applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import PeopleList from './components/pages/peopleList';

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PeopleList />
      </Provider>
    )
  }
}

export default App
