import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { Config } from './';

const commentSubmitQuery = gql`
	mutation ($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
		createComment(input: { author: $author, commentOn: $commentOn, content: $content, authorEmail: $authorEmail }) {
			success
		}
	}
`;

const StatusCommentForm = styled.div`
	margin-top: 24px;
	margin-left: 24px;
	margin-bottom: 24px;
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: ${Config.black};
`;
const Form = styled.form`
	@media ${Config.breakpoints.xs} {
		margin: 24px 8px;
	}
	@media ${Config.breakpoints.md} {
		margin: 24px 0;
	}
`;
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const RowForm = styled.div`
	display: grid;
	gap: 12px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	@media ${Config.breakpoints.xs} {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}
	@media ${Config.breakpoints.md} {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}
`;
const Input = styled.input`
	padding: 7px 16px;
	border-radius: 4px;
	border: 1px solid ${Config.black};
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: ${Config.black};
`;
const Textarea = styled.textarea`
	margin-top: 12px;
	padding: 7px 16px;
	border-radius: 4px;
	border: 1px solid ${Config.black};
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: ${Config.black};
`;
const Button = styled.button`
	margin: 0;
	margin-top: 16px;
	padding: 7px 48px;
	background-color: ${Config.darkgrey};
	border: none;
	border-radius: 4px;
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: ${Config.black};
	cursor: pointer;
	@media ${Config.breakpoints.xs} {
		display: flex;
		justify-content: center;
		min-width: 100%;
	}
	@media ${Config.breakpoints.md} {
		display: block;
		min-width: 0;
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
					<Form
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
						<FormContainer>
							<RowForm>
								<Input placeholder="Email" name="email" value={email} onChange={handleInputChange} />
								<Input placeholder="Автор" name="author" value={author} onChange={handleInputChange} />
								<Input placeholder="Веб-сайт" name="url" value={url} onChange={handleInputChange} />
							</RowForm>
							<Textarea placeholder="Комментарий" name="comment" value={comment} onChange={handleInputChange} />
						</FormContainer>
						<Button>Отправить</Button>
					</Form>
				)}
			</Mutation>
		);
	};

	switch (commentStatus) {
		case 'success':
			return <StatusCommentForm>Ваш комментарий был успешно отправлен.</StatusCommentForm>;
		case 'loading':
			return <StatusCommentForm>Пожалуйста подождите. Ваш комментарий отправляется.</StatusCommentForm>;
		case 'error':
			return (
				<StatusCommentForm>
					При отправке комментария возникла ошибка. Пожалуйста, повторите попытку позже.
				</StatusCommentForm>
			);
		default:
			return renderForm();
	}
};

export default CommentForm;
