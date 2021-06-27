import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Impoorts
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Local Imports
import menuOptions from './menuOptions';

const MenuBar = (props) => {
	// Props Destructuring
	const { setSidebarStatus } = props;

	return (
		<Navbar
			fixed='top'
			collapseOnSelect
			expand='lg'
			variant='dark'
			style={{
				boxShadow: '-2px 2px 4px rgba(0,0,0,0.25)',
				padding: 0,
				backgroundColor: '#fff',
			}}
		>
			<Container>
				<LinkContainer to='/home' className='brand-custom-class'>
					<Navbar.Brand className='d-flex'>
						<Image
							src='/img/logo-track4go.png'
							alt='Track 4Go'
							style={{ width: 160, height: 40 }}
						/>
					</Navbar.Brand>
				</LinkContainer>
				<div className='menu-toggle-btn' onClick={() => setSidebarStatus(true)}>
					<FontAwesomeIcon icon={faBars} style={{ fontSize: '1.3rem' }} />
				</div>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='justify-content-center' style={{ width: '100%' }}>
						{menuOptions.map((option, i) => (
							<LinkContainer
								to={option.route}
								key={i}
								className='custom-nav-link'
								activeClassName='active-nav-link'
							>
								<div>{option.title}</div>
							</LinkContainer>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MenuBar;
