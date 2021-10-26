import React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const commentSubmitQuery = gql`
  mutation (
    $author: String
    $commentOn: Int
    $content: String
    $authorEmail: String
  ) {
    createComment(
      input: {
        author: $author
        commentOn: $commentOn
        content: $content
        authorEmail: $authorEmail
      }
    ) {
      success
    }
  }
`

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentStatus: false,
      post: props.postId,
      comment: "",
      author: "",
      email: "",
      url: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = event.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  renderCommentForm() {
    return (
      <Mutation
        mutation={commentSubmitQuery}
        onCompleted={() => {
          this.setState({ commentStatus: "success" })
        }}
        onError={e => {
          this.setState({ commentStatus: "error" })
        }}
      >
        {addComment => (
          <form
            onSubmit={event => {
              // Prevent default form submit behavior.
              event.preventDefault()
              this.setState({ commentStatus: "loading" })
              addComment({
                variables: {
                  authorUrl: this.state.url,
                  author: this.state.author,
                  commentOn: this.state.post,
                  content: this.state.comment,
                  authorEmail: this.state.email,
                },
              })
            }}
          >
            <label htmlFor="author">Author</label>
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="author">Website</label>
            <input
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={this.handleInputChange}
            />
            <input name="submit" type="submit" value="Post Comment" />
          </form>
        )}
      </Mutation>
    )
  }

  render() {
    // Check comment status from component state and display messages or form.
    switch (this.state.commentStatus) {
      case "success":
        return "Your comment has been successfully submitted."
      case "loading":
        return "Please wait. Your comment is being submitted."
      case "error":
        return "There was an error in your submission. Please try again later."
      default:
        return this.renderCommentForm()
    }
  }
}

export default CommentForm
