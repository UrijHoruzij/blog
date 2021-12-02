import React from 'react';
import styled from 'styled-components';
import { Profile, LastPosts } from './';

const SidebarWrapper = styled.aside`
	grid-area: sidebar;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Sidebar = ({ data }) => {
	return (
		<SidebarWrapper>
			<Profile data={data} />
			<LastPosts data={data} />
		</SidebarWrapper>
	);
};

export default Sidebar;
