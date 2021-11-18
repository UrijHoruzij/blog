import React from 'react';
import gql from 'graphql-tag';
import parse from 'html-react-parser';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Config } from './';

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
const StatusComments = styled.span`
	padding-left: 24px;
	margin-top: 24px;
	display: flex;
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: ${Config.black};
`;

const CommentsTitle = styled.span`
	margin-top: 24px;
	font-family: ${Config.fontSerif};
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	color: ${Config.black};
	@media ${Config.breakpoints.xs} {
		margin: 0 8px;
	}
	@media ${Config.breakpoints.md} {
		margin: 0;
		margin-left: 24px;
	}
`;
const CommentsList = styled.div`
	@media ${Config.breakpoints.xs} {
		margin: 0 8px;
	}
	@media ${Config.breakpoints.md} {
		margin: 0;
	}
`;
const Comment = styled.div`
	margin-top: 16px;
`;
const CommentAuthor = styled.span`
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 700;
	line-height: 18px;
	color: ${Config.black};
	@media ${Config.breakpoints.xs} {
		margin: 0;
	}
	@media ${Config.breakpoints.md} {
		margin-left: 24px;
	}
`;
const CommentContent = styled.span`
	margin-top: 8px;
	font-family: ${Config.fontSans};
	font-size: 14px;
	font-weight: 400;
	color: ${Config.black};
	line-height: 18px;
	text-indent: 24px;
`;

const CommentList = (props) => {
	const { postId } = props;
	return (
		<Query query={commentQuery} variables={{ postId }}>
			{({ loading, error, data }) => {
				if (loading) return <StatusComments>Загрузка комментариев.</StatusComments>;
				if (error) return <StatusComments>Ошибка загрузки комментариев.</StatusComments>;
				if (data.postBy.comments.nodes.length < 1)
					return <StatusComments>Эта запись не имеет комментариев.</StatusComments>;
				return (
					<>
						<CommentsTitle>Комментарии:</CommentsTitle>
						<CommentsList>
							{data.postBy.comments.nodes.map((comment) => (
								<Comment>
									<CommentAuthor>{comment.author.node.name}</CommentAuthor>
									<CommentContent>{parse(comment.content)}</CommentContent>
								</Comment>
							))}
						</CommentsList>
					</>
				);
			}}
		</Query>
	);
};

export default CommentList;
