import React from 'react';
import { Config } from './';
import styled from 'styled-components';

const ContainerBlock = styled.div`
	margin: 0 auto;
	width: 100%;
	@media ${Config.breakpoints.xs} {
		max-width: 100%;
		margin: 0 8px;
	}
	@media ${Config.breakpoints.sm} {
		${Config.container.sm}
		margin: 0 auto;
	}
	@media ${Config.breakpoints.md} {
		${Config.container.md}
	}
	@media ${Config.breakpoints.lg} {
		${Config.container.lg}
	}
	@media ${Config.breakpoints.xl} {
		${Config.container.xl}
	}
	@media ${Config.breakpoints.xxl} {
		${Config.container.xxl}
	} ;
`;

const Container = ({ children }) => {
	return <ContainerBlock>{children}</ContainerBlock>;
};

export default Container;
