import React from 'react';
import gql from 'graphql-tag';
import parse from 'html-react-parser';
import { Query } from 'react-apollo';
import * as styles from './CommentsList.module.css'

const commentQuery = gql`
	query ($postId: Int) {
		postBy(postId: $postId) {
			comments(where: { contentStatus: PUBLISH }) {
				nodes {
					id
					content
					author {
						node {
							name
							url
						}
					}
				}
			}
		}
	}
`;

const CommentList = (props) => {
	const { postId } = props;
	return (
		<Query query={commentQuery} variables={{ postId }}>
			{({ loading, error, data }) => {
				if (loading) return <span className={styles.statusComments}>Загрузка комментариев.</span>;
				if (error) return <span className={styles.statusComments}>Ошибка загрузки комментариев.</span>;
				if (data.postBy.comments.nodes.length < 1)
					return <span className={styles.statusComments}>Эта запись не имеет комментариев.</span>;
				return (
					<>
						<span className={styles.title}>Комментарии:</span>
						<div className={styles.list}>
							{data.postBy.comments.nodes.map((comment) => (
								<div className={styles.comment}>
									<span className={styles.author}>{comment.author.node.name}</span>
									<span className={styles.content}>{parse(comment.content)}</span>
								</div>
							))}
						</div>
					</>
				);
			}}
		</Query>
	);
};

export default CommentList;
