import React from 'react';

// Bootstrap Imports
import Dropdown from 'react-bootstrap/Dropdown';

// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisH,
	faTrash,
	faUserEdit,
} from '@fortawesome/free-solid-svg-icons';

const TableRow = (props) => {
	// Props Destructuring
	const {
		number,
		user,
		setModalShow,
		setUserToEdit,
		setUserToDelete,
		setShowConfimrationModal,
	} = props;

	// Component functions
	const userToEdit = () => {
		setUserToEdit({
			_id: user._id,
			name: user.name,
			cedula: user.cedula,
			phone: user.phone,
			email: user.email,
		});
		setModalShow(true);
	};

	const setDeleteUser = (id) => {
		setUserToDelete({
			_id: id,
			name: user.name,
		});
		setShowConfimrationModal(true);
	};

	return (
		<tr>
			<td>{number}</td>
			<td>{user.name}</td>
			<td>{user.cedula}</td>
			<td>{user.phone}</td>
			<td>{user.email}</td>
			<td align='center'>
				<Dropdown>
					<Dropdown.Toggle variant='primary' id='dropdown-basic' size='sm'>
						<FontAwesomeIcon icon={faEllipsisH} className='mr-2' />
					</Dropdown.Toggle>

					<Dropdown.Menu size='sm'>
						<Dropdown.Item
							className='d-flex'
							style={{ color: 'var(--primary)' }}
							onClick={userToEdit}
						>
							<div style={{ width: 30 }} className='mr-1'>
								<FontAwesomeIcon icon={faUserEdit} />
							</div>
							Editar Usuario
						</Dropdown.Item>
						<Dropdown.Item
							className='d-flex'
							style={{ color: 'var(--danger)' }}
							onClick={() => setDeleteUser(user._id)}
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

export default TableRow;
