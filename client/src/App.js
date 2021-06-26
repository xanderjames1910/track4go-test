import React, { useState } from 'react';
import { Switch } from 'react-router-dom';

// Routes Imports
import Routes from './routes/Routes';

// CSS Imports
import './App.css';
import './App-desktop.css';
import './App-mobile.css';

// Local Imports
import MenuBar from './components/layout/MenuBar';
import SideMenu from './components/layout/SideMenu';

const App = () => {
	// Component State
	const [sidebarStatus, setSidebarStatus] = useState(false);

	// Component Functions
	return (
		<>
			<MenuBar setSidebarStatus={setSidebarStatus} />
			<SideMenu
				sidebarStatus={sidebarStatus}
				setSidebarStatus={setSidebarStatus}
			/>
			<div className='App'>
				<Switch>
					<Routes />
				</Switch>
			</div>
		</>
	);
};

export default App;