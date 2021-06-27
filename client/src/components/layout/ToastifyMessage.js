import React from 'react';

// FontAwesome Importss
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToastifyMessage = (props) => {
	// Props Destructuring
	const { icon, msg, typeError } = props;

	return (
		<div
			className='d-flex align-items-center justify-content-end'
			style={{
				color: typeError ? 'var(--danger)' : 'var(--primary)',
			}}
		>
			<p className='mb-0'>{msg}</p>
			<FontAwesomeIcon className='mr-3' icon={icon} style={{ fontSize: 35 }} />
		</div>
	);
};

export default ToastifyMessage;
