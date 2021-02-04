import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import { StoreProvider } from './stores/useRootData'

import './index.css'

ReactDom.render(
  <StoreProvider>
    <App/>
  </StoreProvider>,
  document.getElementById('root')
)