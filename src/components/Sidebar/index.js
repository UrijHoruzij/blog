import React from 'react';
import { Profile, LastPosts } from '../';
import * as styles from './Sidebar.module.css';

const Sidebar = ({ data }) => {
	return (
		<aside className={styles.wrapper}>
			<Profile data={data} />
			<LastPosts data={data} />
		</aside>
	);
};

export default Sidebar;
