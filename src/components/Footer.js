import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Config } from './';

const FooterWrapper = styled.footer`
	width: 100%;
	height: 62px;
	background-color: ${Config.grey};
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FooterRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FooterDate = styled.span`
	font-family: ${Config.fontSans};
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
`;
const FooterLogo = styled.span`
	margin-left: 16px;
	font-family: ${Config.fontLogo};
	font-size: 24px;
	font-weight: 400;
	line-height: 30px;
`;

const Footer = ({ siteTitle }) => {
	return (
		<FooterWrapper>
			<FooterRow>
				<FooterDate>© {new Date().getFullYear()}</FooterDate>
				<FooterLogo>{siteTitle}</FooterLogo>
			</FooterRow>
		</FooterWrapper>
	);
};

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};

export default Footer;
