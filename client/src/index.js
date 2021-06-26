import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducer Imports
import rootReducer from './store/reducers/rootReducer';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const reduxDevTools =
	typeof window === 'object' &&
	typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f;

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, reduxDevTools);

const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
