import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Fontawesome Imports
import { faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons';

// ToastifyMessage Imports
import ToastifyMessage from '../layout/ToastifyMessage';

const UserModal = (props) => {
	// Props Destructuring
	const { currentUser, onHide, setUsersChange, show, toast } = props;

	// Component State
	const [user, setUser] = useState({
		id: '',
		name: '',
		cedula: '',
		phone: '',
		email: '',
	});

	// Component Hooks
	useEffect(() => {
		setUser({
			id: currentUser._id || '',
			name: currentUser.name,
			cedula: currentUser.cedula,
			phone: currentUser.phone,
			email: currentUser.email,
		});
	}, [currentUser]);

	// Component Functions
	const handleOnChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const createNewUser = () => {
		axios
			.post('/new-user', user)
			.then((res) => {
				setUsersChange(true);
				toast(<ToastifyMessage icon={faUser} msg='Usuario Creado' />);
			})
			.then(() => {
				setUsersChange(false);
				onHide();
			})
			.catch((err) => console.log(err));
	};

	const updateUser = (id) => {
		axios
			.put('/edit-user/' + id, user)
			.then((res) => {
				setUsersChange(true);
				toast(<ToastifyMessage icon={faUserEdit} msg='Usuario Actualizado' />);
			})
			.then(() => {
				setUsersChange(false);
				onHide();
			})
			.catch((err) => console.log(err));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (user.id !== '') {
			console.log('Actualizando Usuario');
			updateUser(user.id);
		} else {
			createNewUser();
		}
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
						{user._id !== '' ? 'Actualizar Usuario' : 'Crear Usuario'}
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default UserModal;
