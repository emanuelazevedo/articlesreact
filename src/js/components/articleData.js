import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/articles";
import { fetchArticle } from "../actions/articleData";

import FormComments from './FormComments';
const mapStateToProps = state => {

  return { articleInfo: state.articleInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article)),
    fetchArticle: article => dispatch(fetchArticle(article)),
  };
};

class ConnectedList extends Component{

  constructor(){
    super();
    this.deleteThisArticle = this.deleteThisArticle.bind(this);
  }

  deleteThisArticle(article){
    console.log(article);
    this.props.deleteArticle(article);
  }

  componentDidMount(){
    //chamada inicial para ir buscar o artigo do ID
    const id = this.props.match.params.id;

    this.props.fetchArticle({ type: "FETCH_USER", article: id });

  }

  render(){
    const article = this.props.articleInfo.articleInfo;
    const comments = article.comments;
    console.log(article);
    if(article.comments && article.user)
    {
    return(
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>Titulo: {article.title}</h1>
            <h2>Descrição: {article.description}</h2>
            <h3>Autor do artigo: {article.user.name}</h3>
            <div>
            <h3>Comentários:</h3>
              <ul className="list-group list-group-flush">
                {comments.map((el, index) => (
                  <li className="list-group-item" key={index}>
                    {el.commentText}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4"><br/>
            <button className="btn btn-danger btn-lg" onClick={() => this.deleteThisArticle(article)}>Eliminar o artigo</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6"><FormComments /></div>
        </div>
      </div>
    )
  } else {
    return(
      <div>Loading....</div>
    )
  }
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
