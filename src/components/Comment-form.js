import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const commentSubmitQuery = gql`
	mutation ($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
		createComment(input: { author: $author, commentOn: $commentOn, content: $content, authorEmail: $authorEmail }) {
			success
		}
	}
`;

// const CommentForm = (props)=>{

// }

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentStatus: false,
			post: props.postId,
			comment: '',
			author: '',
			email: '',
			url: '',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = event.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	renderCommentForm() {
		return (
			<Mutation
				mutation={commentSubmitQuery}
				onCompleted={() => {
					this.setState({ commentStatus: 'success' });
				}}
				onError={(e) => {
					this.setState({ commentStatus: 'error' });
				}}>
				{(addComment) => (
					<form
						onSubmit={(event) => {
							event.preventDefault();
							this.setState({ commentStatus: 'loading' });
							addComment({
								variables: {
									authorUrl: this.state.url,
									author: this.state.author,
									commentOn: this.state.post,
									content: this.state.comment,
									authorEmail: this.state.email,
								},
							});
						}}>
						<label htmlFor="author">Автор</label>
						<input name="author" value={this.state.author} onChange={this.handleInputChange} />
						<label htmlFor="email">Email</label>
						<input name="email" value={this.state.email} onChange={this.handleInputChange} />
						<label htmlFor="author">Веб-сайт</label>
						<input name="url" value={this.state.url} onChange={this.handleInputChange} />
						<label htmlFor="comment">Комментарий</label>
						<textarea name="comment" value={this.state.comment} onChange={this.handleInputChange} />
						<input name="submit" type="submit" value="Отправить" />
					</form>
				)}
			</Mutation>
		);
	}

	render() {
		switch (this.state.commentStatus) {
			case 'success':
				return 'Ваш комментарий был успешно отправлен.';
			case 'loading':
				return 'Пожалуйста подождите. Ваш комментарий отправляется.';
			case 'error':
				return 'При отправке комментария возникла ошибка. Пожалуйста, повторите попытку позже.';
			default:
				return this.renderCommentForm();
		}
	}
}

export default CommentForm;
