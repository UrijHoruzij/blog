import * as React from 'react';
import { Layout, Seo } from '../components/';
import * as styles from './404.module.css'

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Страница не найдена" />
		<h1 className={styles.title}>404: Страница не найдена</h1>
	</Layout>
);

export default NotFoundPage;
