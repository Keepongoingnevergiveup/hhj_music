import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'

import './assets/css/index.less'

import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import theme from './assets/theme'
import { ThemeProvider } from 'styled-components'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
            <App/>
        </HashRouter>
      </ThemeProvider>
    </Provider>
)
