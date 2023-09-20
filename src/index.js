
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { DataProvider } from './components/DataContext';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
				<DataProvider>
					<Provider store={store}>
						<App />
					</Provider>
				</DataProvider>
		</BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);