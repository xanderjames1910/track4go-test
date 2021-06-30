import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// Forms Imports
import { Formik } from 'formik';
import * as Yup from 'yup';

// Redux Imports
import {
	closeUserModal,
	createNewUser,
	updateUser,
} from '../../store/actions/userActions';

// Validation Schema
const UserValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(6, 'El nombre es demasiado corto')
		.required('El nombre es requerido'),
	cedula: Yup.string()
		.min(6, 'La cédula es demasiado corta')
		.required('La cédula es requerida'),
	phone: Yup.number()
		.min(9, 'El teléfono es demasiado corto')
		.required('El teléfono es requerida'),
	email: Yup.string()
		.email('El email debe ser válido')
		.required('El email es requerido'),
});

const UserModal = (props) => {
	// Props Destructuring
	const {
		closeUserModal,
		createNewUser,
		showCreateUpdateModal,
		updateUser,
		userToEdit,
	} = props;

	// Component State
	const [user, setUser] = useState({
		_id: '',
		name: '',
		cedula: '',
		phone: '',
		email: '',
	});

	useEffect(() => {
		if (userToEdit._id !== '') {
			setUser({
				id: userToEdit._id,
				name: userToEdit.name,
				cedula: userToEdit.cedula,
				phone: userToEdit.phone,
				email: userToEdit.email,
			});
		} else {
			setUser({
				_id: '',
				name: '',
				cedula: '',
				phone: '',
				email: '',
			});
		}
	}, [userToEdit]);

	return (
		<Formik
			initialValues={user}
			enableReinitialize
			validationSchema={UserValidationSchema}
			onSubmit={async (values, actions) => {
				if (user._id !== '') {
					await updateUser(user.id, values);
					actions.resetForm({ values: user });
				} else {
					await createNewUser(values);
					actions.resetForm({ values: user });
				}
			}}
		>
			{({
				handleSubmit,
				handleChange,
				handleReset,
				values,
				touched,
				errors,
			}) => (
				<Modal
					show={showCreateUpdateModal}
					onHide={() => {
						closeUserModal();
						handleReset();
					}}
					aria-labelledby='add-user-modal'
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id='add-user-modal'>Agregar Usuario</Modal.Title>
					</Modal.Header>
					{/* <Form onSubmit={onSubmit} noValidate> */}
					<Form onSubmit={handleSubmit} noValidate>
						<Modal.Body>
							<Form.Group
								controlId='name'
								className={touched.name && !!errors.name ? 'mb-1' : 'mb-3'}
							>
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									type='text'
									name='name'
									value={values.name}
									placeholder='Ingrese el nombre del usuario'
									// onChange={handleOnChange}
									onChange={handleChange}
									isInvalid={touched.name && !!errors.name}
								/>
								<Form.Control.Feedback
									type='invalid'
									style={{ paddingLeft: 10 }}
								>
									{touched.name && !!errors.name && errors.name}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group
								controlId='cedula'
								className={touched.cedula && !!errors.cedula ? 'mb-1' : 'mb-3'}
							>
								<Form.Label>Cédula</Form.Label>
								<Form.Control
									type='text'
									name='cedula'
									value={values.cedula}
									placeholder='Cédula'
									// onChange={handleOnChange}
									onChange={handleChange}
									isInvalid={touched.cedula && !!errors.cedula}
								/>
								<Form.Control.Feedback
									type='invalid'
									style={{ paddingLeft: 10 }}
								>
									{touched.cedula && !!errors.cedula && errors.cedula}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group
								controlId='phone'
								className={touched.phone && !!errors.phone ? 'mb-1' : 'mb-3'}
							>
								<Form.Label>Teléfono</Form.Label>
								<Form.Control
									type='number'
									name='phone'
									value={values.phone}
									placeholder='Teléfono'
									// onChange={handleOnChange}
									onChange={handleChange}
									isInvalid={touched.phone && !!errors.phone}
								/>
								<Form.Control.Feedback
									type='invalid'
									style={{ paddingLeft: 10 }}
								>
									{touched.phone && !!errors.phone && errors.phone}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group
								controlId='email'
								className={touched.email && !!errors.email ? 'mb-1' : 'mb-3'}
							>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									name='email'
									value={values.email}
									placeholder='Email'
									// onChange={handleOnChange}
									onChange={handleChange}
									isInvalid={touched.email && !!errors.email}
								/>
								<Form.Control.Feedback
									type='invalid'
									style={{ paddingLeft: 10 }}
								>
									{touched.email && !!errors.email && errors.email}
								</Form.Control.Feedback>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='primary' type='submit'>
								{user._id !== '' ? 'Actualizar Usuario' : 'Crear Usuario'}
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => {
	const { showCreateUpdateModal, userToEdit } = state.user;

	return {
		showCreateUpdateModal,
		userToEdit,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		closeUserModal: () => dispatch(closeUserModal()),
		createNewUser: (user) => dispatch(createNewUser(user)),
		updateUser: (id, user) => dispatch(updateUser(id, user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
