// Fontawesome Imports
import { faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';

// Toastify Notifications
import { toast } from 'react-toastify';

// Axios Client Imports
import clientAxios from '../../config/axios';

// ToastifyMessage Imports
import ToastifyMessage from '../../components/layout/ToastifyMessage';

// Close UserModal
export const closeUserModal = () => {
	return (dispatch) => {
		dispatch({ type: 'CLOSE_USER_MODAL' });
	};
};

export const showUserModal = () => {
	return (dispatch) => {
		dispatch({ type: 'SHOW_USER_MODAL' });
	};
};

export const setShowConfirmationModal = () => {
	return (dispatch) => {
		dispatch({ type: 'SHOW_CONFIRMATION_MODAL' });
	};
};

export const closeShowConfirmationModal = () => {
	return (dispatch) => {
		dispatch({ type: 'CLOSE_CONFIRMATION_MODAL' });
	};
};

// Fetch Users
export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const allUsers = await clientAxios.get('/users');

			dispatch({ type: 'All_USERS_UPDATED', payload: allUsers.data });
		} catch (err) {
			toast(
				<ToastifyMessage icon={faUser} typeError msg='Ha ocurrido un error' />
			);
		}

		return 'done';
	};
};

// Create New User
export const createNewUser = (user) => {
	return async (dispatch) => {
		try {
			await clientAxios.post('/new-user', user);
			toast(<ToastifyMessage icon={faUser} msg='Usuario Creado' />);
			dispatch({ type: 'CREATED_USER' });

			fetchUsers();
		} catch (err) {
			toast(
				<ToastifyMessage icon={faUser} typeError msg='Ha ocurrido un error' />
			);

			dispatch({ type: 'CREATE_USER_ERROR' });
			console.log(err);
		}

		return dispatch({ type: 'RESET_MODAL_STATE' });
	};
};

export const setUserToEdit = (user) => {
	return (dispatch) => {
		dispatch({ type: 'SET_USER_TO_EDIT', payload: user });
	};
};

// Update User
export const updateUser = (id, user) => {
	return async (dispatch) => {
		try {
			await clientAxios.put('/edit-user/' + id, user);
			toast(<ToastifyMessage icon={faUser} msg='Usuario Actualizado' />);
			dispatch({ type: 'UPDATED_USER' });

			fetchUsers();
		} catch (err) {
			toast(
				<ToastifyMessage
					icon={faUserEdit}
					typeError
					msg='Ha ocurrido un error'
				/>
			);

			dispatch({ type: 'UPDATE_USER_ERROR' });
			console.log(err);
		}

		return dispatch({ type: 'RESET_MODAL_STATE' });
	};
};

// Delete User
export const deleteUser = (id) => {
	return async (dispatch) => {
		try {
			await clientAxios.delete('/user-delete/' + id);

			toast(
				<ToastifyMessage icon={faUser} typeError msg='Usuario Eliminado' />
			);

			dispatch({ type: 'DELETED_USER' });

			fetchUsers();
		} catch (err) {
			toast(
				<ToastifyMessage icon={faUser} typeError msg='Ha ocurrido un error' />
			);

			dispatch({ type: 'UPDATE_USER_ERROR' });
			console.log(err);
		}

		return dispatch({ type: 'CLOSE_CONFIRMATION_MODAL' });
	};
};
