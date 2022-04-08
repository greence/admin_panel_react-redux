// import React from 'react'
// import ReactDOM from 'react-dom'
// import store from './store/store'
// import { Provider } from 'react-redux'
// import App from './App'
// import './index.css'

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react'
//import ReactDOM from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// )


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App tab="home" /> */}
      <App />
    </React.StrictMode>
  </Provider>,
)