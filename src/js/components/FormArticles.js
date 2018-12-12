import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { addArticle } from "../actions/articles";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { description } = this.state;
    const id = "";
    this.props.addArticle({ title, description });
    this.setState({ title: "" , description: ""});
  }
  
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titulo do Artigo</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Descrição do Artigo</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Novo Artigo
        </button>
      </form>
    );
  }
}
const FormArticles = connect(null, mapDispatchToProps)(ConnectedForm);
export default FormArticles;
