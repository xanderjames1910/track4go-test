import React from 'react';

// Bootstrap Imports
import Spinner from 'react-bootstrap/Spinner';

const PageLoading = () => {
	return (
		<div className='loading-container'>
			<Spinner
				animation='grow'
				className='mb-3'
				style={{ backgroundColor: 'var(--secondary-accent)' }}
			/>
			<p className='mb-0'>Cargando...</p>
		</div>
	);
};

export default PageLoading;