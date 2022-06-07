import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import * as styles from './CommentForm.module.css';

const commentSubmitQuery = gql`
	mutation ($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
		createComment(input: { author: $author, commentOn: $commentOn, content: $content, authorEmail: $authorEmail }) {
			success
		}
	}
`;

const CommentForm = (props) => {
	const { postId } = props;
	const [commentStatus, setCommentStatus] = useState(false);
	const [post, setPost] = useState(postId);
	const [comment, setComment] = useState('');
	const [author, setAuthor] = useState('');
	const [email, setEmail] = useState('');
	const [url, setUrl] = useState('');

	const handleInputChange = (event) => {
		const target = event.target;
		const value = event.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		switch (name) {
			case 'author':
				setAuthor(value);
				break;
			case 'comment':
				setComment(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'url':
				setUrl(value);
				break;
			default:
				break;
		}
	};

	const renderForm = () => {
		return (
			<Mutation
				mutation={commentSubmitQuery}
				onCompleted={() => {
					setCommentStatus('success');
				}}
				onError={(e) => {
					setCommentStatus('error');
				}}>
				{(addComment) => (
					<form
						className={styles.form}
						onSubmit={(event) => {
							event.preventDefault();
							setCommentStatus('loading');
							addComment({
								variables: {
									authorUrl: url,
									author: author,
									commentOn: post,
									content: comment,
									authorEmail: email,
								},
							});
						}}>
						<div className={styles.formContainer}>
							<div className={styles.rowForm}>
								<input
									className={styles.input}
									placeholder="Email"
									name="email"
									value={email}
									onChange={handleInputChange}
								/>
								<input
									className={styles.input}
									placeholder="Автор"
									name="author"
									value={author}
									onChange={handleInputChange}
								/>
								<input
									className={styles.input}
									placeholder="Веб-сайт"
									name="url"
									value={url}
									onChange={handleInputChange}
								/>
							</div>
							<textarea
								className={styles.textarea}
								placeholder="Комментарий"
								name="comment"
								value={comment}
								onChange={handleInputChange}
							/>
						</div>
						<button className={styles.button}>Отправить</button>
					</form>
				)}
			</Mutation>
		);
	};

	switch (commentStatus) {
		case 'success':
			return <div className={styles.statusCommentForm}>Ваш комментарий был успешно отправлен.</div>;
		case 'loading':
			return <div className={styles.statusCommentForm}>Пожалуйста подождите. Ваш комментарий отправляется.</div>;
		case 'error':
			return (
				<div className={styles.statusCommentForm}>
					При отправке комментария возникла ошибка. Пожалуйста, повторите попытку позже.
				</div>
			);
		default:
			return renderForm();
	}
};

export default CommentForm;
