import React, { lazy, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

// Scroll To Top Import
import ScrollToTopRoute from '../ScrollToTopRoute';

// Local Imports
import PageLoading from '../components/layout/PageLoading';

// Pages Imports
import Home from '../pages/Home';

// Lazy Imports
const UserView = lazy(() => import('../pages/UserView'));

const Routes = () => {
	return (
		<>
			<Route exact path='/'>
				<Redirect to='/home' />
			</Route>
			<ScrollToTopRoute exact path='/home' component={Home} />
			<Suspense fallback={<PageLoading />}>
				<ScrollToTopRoute
					exact
					path='/user/:id'
					component={UserView}
				/>
			</Suspense>
		</>
	);
};

export default Routes;