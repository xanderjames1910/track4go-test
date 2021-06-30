import React from 'react';
import { connect } from 'react-redux';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Redux Imports
import {
	deleteUser,
	closeShowConfirmationModal,
} from '../../store/actions/userActions';

const ConfirmationModal = (props) => {
	// Props Destructuring
	const {
		userToEdit,
		deleteUser,
		showConfirmationModal,
		closeShowConfirmationModal,
	} = props;

	return (
		<Modal
			show={showConfirmationModal}
			onHide={closeShowConfirmationModal}
			aria-labelledby='add-user-modal'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='add-user-modal'>Eliminar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div style={{ textAlign: 'center' }}>
					<h4>¿Estás seguro que deseas borrar al usuario:</h4>
					<h3>{userToEdit.name}?</h3>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					// style={{ backgroundColor: 'var(--secondary)', border: 'none' }}
					variant='danger'
					onClick={closeShowConfirmationModal}
				>
					Cancelar
				</Button>
				<Button variant='primary' onClick={() => deleteUser(userToEdit._id)}>
					Eliminar Usuario
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

const mapStateToProps = (state) => {
	const { showConfirmationModal, userToEdit } = state.user;

	return {
		showConfirmationModal,
		userToEdit,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteUser: (id) => dispatch(deleteUser(id)),
		closeShowConfirmationModal: () => dispatch(closeShowConfirmationModal()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);
