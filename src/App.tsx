import './App.css'

import Router from "./Router/routes"
import store from './redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
