import React from 'react';
import { navigate } from 'gatsby';
import PaginationComponent from './Pagination/';
import * as styles from './Pagination.module.css';

const Pagination = ({ currentPage, pageSize, totalCount }) => {
	const checkPage = (page) => {
		if (page === currentPage) return;
		if (page === 1) {
			navigate('/');
		} else {
			navigate(`/page/${page}`);
		}
	};
	return (
		<div className={styles.wrapper}>
			<PaginationComponent
				currentPage={currentPage}
				totalCount={totalCount}
				pageSize={pageSize}
				arrowShow
				onPageChange={(page) => checkPage(page)}
			/>
		</div>
	);
};

export default Pagination;
