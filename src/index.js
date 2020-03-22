import * as serviceWorker from './serviceWorker'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const wrapper = document.getElementById('root')
ReactDOM.render(
  <App />,
  wrapper
)

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister()