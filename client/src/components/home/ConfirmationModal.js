import React from 'react';
import axios from 'axios';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Fontawesome Imports
import { faUser } from '@fortawesome/free-solid-svg-icons';

// ToastifyMessage Imports
import ToastifyMessage from '../layout/ToastifyMessage';

const ConfirmationModal = (props) => {
	// Props Destructuring
	const { user, onHide, setUsersChange, show, toast } = props;

	// console.log(user);

	// Component Functions
	const cancelDelte = () => {
		onHide();
	};

	const deleteUser = (id) => {
		console.log('Eliminando Usuario');
		axios
			.delete('/user-delete/' + id)
			.then(() => {
				setUsersChange(true);
				toast(
					<ToastifyMessage
						icon={faUser}
						typeError={true}
						msg='Usuario Eliminado'
					/>
				);
				onHide();
			})
			.then(() => setUsersChange(false))
			.catch((err) => console.log(err));
	};

	console.log(user);

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby='add-user-modal'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='add-user-modal'>Eliminar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div style={{ textAlign: 'center' }}>
					<h4>¿Estás seguro que deseas borrar al usuario:</h4>
					<h3>{user.name}?</h3>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					// style={{ backgroundColor: 'var(--secondary)', border: 'none' }}
					variant='danger'
					onClick={cancelDelte}
				>
					Cancelar
				</Button>
				<Button variant='primary' onClick={() => deleteUser(user._id)}>
					Eliminar Usuario
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmationModal;
