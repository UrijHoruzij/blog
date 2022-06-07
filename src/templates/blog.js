import * as React from 'react';
import { Layout, Seo, Cards, Pagination } from '../components/';

const IndexPage = ({ pageContext }) => {
	const { posts, currentPage, totalCount, pageSize } = pageContext;
	return (
		<Layout>
			<Seo title="Главная" />
			<Cards posts={posts} />
			<Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} />
		</Layout>
	);
};

export default IndexPage;
