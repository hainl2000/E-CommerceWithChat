import { Provider } from 'react-redux';
import './App.css';
import PageRouter from './Router';
import { CommonReducer } from './Reducer/CommonReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io.connect('/')

function App() {
  const store = createStore(CommonReducer, applyMiddleware(thunk))

  useEffect(() => {
      socket.on('connected', () => console.log('connected'))
      socket.emit('join', {message: "connecteddd"})
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <PageRouter></PageRouter>
      </Provider>
    </div>
  );
}

export default App;
