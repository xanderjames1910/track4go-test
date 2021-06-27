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
	const [usersChange, setUsersChange] = useState(false);

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
			<UsersTable
				usersChange={usersChange}
				setModalShow={setModalShow}
				setUserToEdit={setUserToEdit}
				setUsersChange={setUsersChange}
				toast={toast}
			/>
			<UserModal
				currentUser={userToEdit}
				show={modalShow}
				onHide={resetUserToEdit}
				setUsersChange={setUsersChange}
				toast={toast}
			/>
		</div>
	);
};

export default Home;
