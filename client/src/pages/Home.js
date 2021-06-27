import React, { useState } from 'react';

// Local Imports
import ActionsBar from '../components/home/ActionsBar';
import UsersTable from '../components/home/UsersTable';
import UserModal from '../components/home/UserModal';

// Toastify Notifications
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
	// Component useState
	const [modalShow, setModalShow] = useState(false);
	const [userToEdit, setUserToEdit] = useState({
		name: '',
		cedula: '',
		phone: '',
		email: '',
	});

	// Component Functions
	const resetUserToEdit = () => {
		setUserToEdit({
			name: '',
			cedula: '',
			phone: '',
			email: '',
		});
		setModalShow(false);
	};

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
			<ActionsBar setModalShow={setModalShow} />
			<UsersTable setModalShow={setModalShow} setUserToEdit={setUserToEdit} />
			<UserModal
				currentUser={userToEdit}
				show={modalShow}
				onHide={resetUserToEdit}
				toast={toast}
			/>
		</div>
	);
};

export default Home;
