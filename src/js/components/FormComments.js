import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { addComment } from "../actions/comments";
import { fetchArticle } from "../actions/articleData";

const mapStateToProps = state => {

  return { articleInfo: state.articleInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: article => dispatch(fetchArticle(article)),
    addComment: comment => dispatch(addComment(comment)),
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      commentText: "",
      article_id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { commentText } = this.state;
    const article_id = this.props.articleInfo.articleInfo.id;;
    const id = "";
    this.props.addComment({ commentText, article_id});
    console.log('reere', this.props.articleInfo.articleInfo.id);
    this.setState({ commentText: "", article_id: this.props.articleInfo.articleInfo.id});
  }

  render() {
    const { commentText, article_id } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Comentário</label>
          <input
            type="text"
            className="form-control"
            id="commentText"
            value={commentText}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="hidden"
            className="form-control"
            id="article_id"
            value={this.props.articleInfo.articleInfo.id}
            onChange={this.handleChange}
          />
        </div>
          <button type="submit" className="btn btn-success btn-lg">
            Novo Comentário
          </button>

      </form>
    );
  }
}
const FormComments = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default FormComments;
