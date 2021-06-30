/* eslint-disable consistent-return */
const initState = {
	showCreateUpdateModal: false,
	showConfirmationModal: false,
	usersUpdated: false,
	allUsers: [],
	userToEdit: {
		_id: '',
		name: '',
		cedula: '',
		phone: '',
		email: '',
	},
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SHOW_USER_MODAL':
			return {
				...state,
				showCreateUpdateModal: true,
			};
		case 'SHOW_CONFIRMATION_MODAL':
			return {
				...state,
				showConfirmationModal: true,
			};
		case 'CLOSE_CONFIRMATION_MODAL':
			return {
				...state,
				showConfirmationModal: false,
				userToEdit: initState.userToEdit,
			};
		case 'CLOSE_USER_MODAL':
		case 'RESET_MODAL_STATE':
			return {
				...state,
				showCreateUpdateModal: false,
				userToEdit: initState.userToEdit,
			};
		case 'CREATED_USER':
		case 'UPDATED_USER':
			return {
				...state,
				usersUpdated: true,
				showCreateUpdateModal: false,
			};
		case 'All_USERS_UPDATED':
			return {
				...state,
				allUsers: action.payload,
				usersUpdated: false,
			};
		case 'CREATE_USER_ERROR':
		case 'UPDATE_USER_ERROR':
			return {
				...state,
				showCreateUpdateModal: false,
			};
		case 'SET_USER_TO_EDIT':
			return {
				...state,
				userToEdit: action.payload,
			};
		case 'DELETED_USER':
			return {
				...state,
				usersUpdated: true,
			};
		default:
			return state;
	}
};

export default userReducer;
