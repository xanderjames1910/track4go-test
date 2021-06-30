import React from 'react';

// Local Imports
import ActionsBar from '../components/home/ActionsBar';
import UsersTable from '../components/home/UsersTable';
import UserModal from '../components/home/UserModal';

// Toastify Notifications
import { ToastContainer } from 'react-toastify';

const Home = () => {
	return (
		<div className='home-container'>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				closeButton={false}
				rtl
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<ActionsBar />
			<UsersTable />
			<UserModal />
		</div>
	);
};

export default Home;
