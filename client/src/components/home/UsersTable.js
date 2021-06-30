import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Bootstrap Imports
import Table from 'react-bootstrap/Table';

// Redux Imports
import { fetchUsers } from '../../store/actions/userActions';

// Local Imports
import TableRow from './TableRow';
import ConfirmationModal from './ConfirmationModal';

const UsersTable = (props) => {
	// Props Destructuring
	const { allUsers, fetchUsers, usersUpdated } = props;

	useEffect(() => {
		fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [usersUpdated]);

	return (
		<div className='table-container mx-3'>
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
					{allUsers !== null &&
						allUsers.map((user, i) => (
							<TableRow key={user._id} number={i + 1} user={user} />
						))}
				</tbody>
			</Table>
			{allUsers.length === 0 && (
				<div className='text-center' style={{ colose: 'var(--secondary)' }}>
					No existen registros
				</div>
			)}
			<ConfirmationModal />
		</div>
	);
};

const mapStateToProps = (state) => {
	const { allUsers, usersUpdated } = state.user;

	return {
		allUsers,
		usersUpdated,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
