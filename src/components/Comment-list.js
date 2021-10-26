import React from "react"
import gql from "graphql-tag"
import parse from "html-react-parser"
import { Query } from "react-apollo"

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
`

const CommentList = props => {
  const { postId } = props
  return (
    <Query query={commentQuery} variables={{ postId }}>
      {({ loading, error, data }) => {
        if (loading) return "Загрузка комментариев..."
        if (error) return "Ошибка загрузки комментариев..."
        if (data.postBy.comments.nodes.length < 1)
          return "Эта запись не имеет комментариев."
        return (
          <div className="comment-list">
            {data.postBy.comments.nodes.map(comment => (
              <div className="comment">
                <div className="comment-author">
                  <a href={comment.author.node.url}>
                    {comment.author.node.name}
                  </a>
                  says:
                </div>
                <div className="comment-content">{parse(comment.content)}</div>
              </div>
            ))}
          </div>
        )
      }}
    </Query>
  )
}

export default CommentList
