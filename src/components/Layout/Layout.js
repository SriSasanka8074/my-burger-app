import React from 'react';
import classess from '../Layout/Layout.module.css';
import Aux from '../../hoc/Auxilary';

const Layout = (props) => (

	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classess.Content}>
			{props.children}
		</main>
	</Aux>
);

export default Layout;