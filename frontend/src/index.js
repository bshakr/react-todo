import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './containers/app';

let initialState = { todos: [] }
let store =configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const NextApp = require('./containers/app').default

    render(
      <Provider store={store}>
				<NextApp />
			</Provider>,
      document.getElementById('root')
    )
  })
}

