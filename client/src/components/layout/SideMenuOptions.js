import React from 'react';
// import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Local Imports
import menuOptions from './menuOptions';

const SideMenu = (props) => {
	// Props Destructuring
	const { setSidebarStatus } = props;

	// Component Functions
	const redirectLink = () => {
		setSidebarStatus(false);
	};

	return (
		<div style={{ height: '100vh' }}>
			<Navbar
				className='header d-flex justify-content-between'
				variant='dark'
				style={{
					zIndex: 5000,
					height: 65,
					backgroundColor: '#fff',
				}}
			>
				<Navbar.Brand
					href='#home'
					className='noselect ml-2'
					style={{ fontWeight: 500, color: 'var(--primary)' }}
				>
					Opciones
				</Navbar.Brand>
				<Nav>
					<Button
						className='d-flex'
						onClick={() => setSidebarStatus(false)}
						style={{ backgroundColor: 'var(--primary)', border: 'none' }}
					>
						<FontAwesomeIcon icon={faTimes} style={{ fontSize: '1rem' }} />
					</Button>
				</Nav>
			</Navbar>
			<div
				className='d-flex flex-column justify-content-between'
				style={{ height: 'calc(100% - 65px)' }}
			>
				<ListGroup
					style={{
						borderRadius: 0,
						borderLeft: 'none',
						borderRight: 'none',
					}}
				>
					{menuOptions.map((menu, i) => (
						<LinkContainer
							key={i}
							to={menu.route}
							activeClassName='side-menu-option-active'
							onClick={redirectLink}
						>
							<div className='side-menu-option text-center item-list d-flex'>
								<div style={{ width: 35 }} className='mr-2'>
									<FontAwesomeIcon
										icon={menu.icon}
										style={{ fontSize: '1.3rem' }}
									/>
								</div>
								{menu.title}
							</div>
						</LinkContainer>
					))}
				</ListGroup>
			</div>
		</div>
	);
};

export default SideMenu;
