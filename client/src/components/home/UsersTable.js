import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Bootstrap Imports
import Table from 'react-bootstrap/Table';

// Local Imports
import TableRow from './TableRow';
import ConfirmatioModal from './ConfirmationModal';

const UsersTable = (props) => {
	// Props Destructuring
	const { setModalShow, setUserToEdit, setUsersChange, toast, usersChange } = props;

	// Component State
	const [users, setUsers] = useState([]);
	const [userToDelete, setUserToDelete] = useState({});
	const [showConfirmationModal, setShowConfimrationModal] = useState(false);

	// Component Hooks
	useEffect(() => {
		axios
			.get('/users')
			.then((res) => setUsers(res.data))
			.catch((err) => console.log(err));
	}, [usersChange]);

	// Component Functions
	const resetUserToDelete = () => {
		setUserToDelete({});
		setShowConfimrationModal(false);
	};

	return (
		<div>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Cédula</th>
						<th>Teléfono</th>
						<th>Email</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users !== null &&
						users.map((user, i) => (
							<TableRow
								key={user._id}
								number={i + 1}
								user={user}
								setModalShow={setModalShow}
								setUserToEdit={setUserToEdit}
								setUserToDelete={setUserToDelete}
								setShowConfimrationModal={setShowConfimrationModal}
							/>
						))}
				</tbody>
			</Table>
			<ConfirmatioModal
				show={showConfirmationModal}
				onHide={resetUserToDelete}
				user={userToDelete}
				setUsersChange={setUsersChange}
				toast={toast}
			/>
		</div>
	);
};

export default UsersTable;
