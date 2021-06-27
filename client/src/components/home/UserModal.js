import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Fontawesome Imports
import { faUser } from '@fortawesome/free-solid-svg-icons';

// ToastifyMessage Imports
import ToastifyMessage from '../layout/ToastifyMessage';

const UserModal = (props) => {
	// Props Destructuring
	const { currentUser, onHide, show, toast } = props;

	// Component State
	const [user, setUser] = useState({
		name: '',
		cedula: '',
		phone: '',
		email: '',
	});

	// Component Hooks
	useEffect(() => {
		setUser({
			name: currentUser.name,
			cedula: currentUser.cedula,
			phone: currentUser.phone,
			email: currentUser.email,
		});
	}, [currentUser]);

	console.log(user);

	// Component Functions
	const handleOnChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log('Prueba de On Submit');
		console.log(user);

		axios.post('/new-user', user);
		toast(<ToastifyMessage icon={faUser} msg='Usuario Creado' />);

		onHide();
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby='add-user-modal'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='add-user-modal'>Agregar Usuario</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit} noValidate>
				<Modal.Body>
					<Form.Group controlId='name'>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type='text'
							name='name'
							value={user.name}
							placeholder='Ingrese el nombre del usuario'
							onChange={handleOnChange}
						/>
					</Form.Group>

					<Form.Group controlId='cedula'>
						<Form.Label>Cédula</Form.Label>
						<Form.Control
							type='text'
							name='cedula'
							value={user.cedula}
							placeholder='Cédula'
							onChange={handleOnChange}
						/>
					</Form.Group>

					<Form.Group controlId='phone'>
						<Form.Label>Teléfono</Form.Label>
						<Form.Control
							type='number'
							name='phone'
							value={user.phone}
							placeholder='Teléfono'
							onChange={handleOnChange}
						/>
					</Form.Group>

					<Form.Group controlId='email'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							name='email'
							value={user.email}
							placeholder='Email'
							onChange={handleOnChange}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' type='submit'>
						{user._id !== undefined ? 'Actualizar Usuario' : 'Crear Usuario'}
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default UserModal;
