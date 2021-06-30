import React from 'react';
import { connect } from 'react-redux';

// Bootstrap Imports
import Dropdown from 'react-bootstrap/Dropdown';

// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisH,
	faTrash,
	faUserEdit,
} from '@fortawesome/free-solid-svg-icons';

// Redux Imports
import {
	setUserToEdit,
	setShowConfirmationModal,
	showUserModal,
} from '../../store/actions/userActions';

const TableRow = (props) => {
	// Props Destructuring
	const {
		number,
		user,
		setUserToEdit,
		setShowConfirmationModal,
		showUserModal,
	} = props;

	// Component Functions
	const userToEdit = (user) => {
		showUserModal();
		setUserToEdit(user);
	};

	const setDeleteUser = (user) => {
		setUserToEdit(user);
		setShowConfirmationModal();
	};

	return (
		<tr>
			<td>{number}</td>
			<td>{user.name}</td>
			<td>{user.cedula}</td>
			<td>{user.phone}</td>
			<td>{user.email}</td>
			<td align='center' style={{ overflow: 'inherit' }}>
				<Dropdown>
					<Dropdown.Toggle variant='primary' id='dropdown-basic' size='sm'>
						<FontAwesomeIcon icon={faEllipsisH} className='mr-2' />
					</Dropdown.Toggle>

					<Dropdown.Menu size='sm'>
						<Dropdown.Item
							className='d-flex'
							style={{ color: 'var(--primary)' }}
							onClick={() => userToEdit(user)}
						>
							<div style={{ width: 30 }} className='mr-1'>
								<FontAwesomeIcon icon={faUserEdit} />
							</div>
							Editar Usuario
						</Dropdown.Item>
						<Dropdown.Item
							className='d-flex'
							style={{ color: 'var(--danger)' }}
							onClick={() => setDeleteUser(user)}
						>
							<div style={{ width: 30 }} className='mr-1'>
								<FontAwesomeIcon icon={faTrash} className='mr-2' />
							</div>
							Eliminar Usuario
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserToEdit: (user) => dispatch(setUserToEdit(user)),
		showUserModal: () => dispatch(showUserModal()),
		setShowConfirmationModal: () => dispatch(setShowConfirmationModal()),
	};
};

export default connect(null, mapDispatchToProps)(TableRow);
