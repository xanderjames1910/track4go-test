import React from 'react';

// Redux
import { connect } from 'react-redux';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';

// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Redux Imports
import { showUserModal } from '../../store/actions/userActions';

const ActionsBar = (props) => {
	// Props Destructuring
	const { showUserModal } = props;

	return (
		<div className='actions-bar'>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					color: 'var(--primary)',
					fontSize: 18,
					fontWeight: 500,
				}}
			>
				Lista de Usuarios
			</div>
			<Button
				style={{ display: 'flex', borderRadius: 5 }}
				// onClick={() => setModalShow(true)}
				onClick={showUserModal}
			>
				<div style={{ width: 30 }} className='mr-md-2 mr-sm-0'>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				Agregar Usuario
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		showUserModal: () => dispatch(showUserModal()),
	};
};

export default connect(null, mapDispatchToProps)(ActionsBar);
