import React, { useEffect, useState } from 'react';

// Bootstrap Imports
import Table from 'react-bootstrap/Table';

// Local Imports
import TableRow from './TableRow';

const UsersTable = (props) => {
	// Props Destructuring
	const { setModalShow, setUserToEdit } = props;

	// Component State
	const [users, setUsers] = useState([
		{ name: '', cedula: '', phone: '', email: '' },
	]);

	// Component Hooks
	useEffect(() => {
		fetch('/users')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => setUsers(jsonRes))
			.catch((err) => console.log(err));
	}, [users]);

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
					{users.map((user, i) => (
						<TableRow
							key={user._id}
							number={i + 1}
							user={user}
							setModalShow={setModalShow}
							setUserToEdit={setUserToEdit}
						/>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default UsersTable;
