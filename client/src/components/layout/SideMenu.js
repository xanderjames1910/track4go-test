import React from 'react';

// Local Imports
import SideMenuOptions from './SideMenuOptions';

const SideMenu = (props) => {
	// Props Destructuring
	const { sidebarStatus, setSidebarStatus } = props;

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				right: 0,
				width: sidebarStatus ? '100vw' : '0vw',
				zIndex: 9999,
				transition: '0.2s ease',
			}}
		>
			<div className='d-flex'>
				<div
					style={{
						width: '20vw',
						height: '100vh',
					}}
					onClick={() => setSidebarStatus(false)}
				/>
				<div
					style={{
						width: '80vw',
						backgroundColor: '#fff',
						boxShadow: sidebarStatus
							? '-3px 4px 8px rgba(0, 0, 0, 0.2),  -4px -4px 15px rgba(0, 0, 0, 0.15)'
							: '',
					}}
				>
					<SideMenuOptions setSidebarStatus={setSidebarStatus} />
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
