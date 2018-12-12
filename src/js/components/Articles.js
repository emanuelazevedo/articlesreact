// src/js/components/List.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles } from "../actions/articles";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import FormArticles from "./FormArticles";

const mapStateToProps = state => {
  return { articles: state.articles.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article)),
    fetchArticles: () => dispatch(fetchArticles()),
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
    //chamada inicial para ir buscar os artigos
    const articles = this.props.articles;
    if(articles == 0){
      this.props.fetchArticles({ type: "FETCH_ARTICLES" });
    }
  }

  render() {
    console.log(this.props.articles);
    const articles = this.props.articles;
    console.log(articles);
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h1>Lista de artigos</h1>
            <ul className="list-group list-group-flush col-md-12">
              {articles.map((el, index) => (
                <li className="list-group-item col-md-12" key={index}>
                  <Link to={'/article/'+el.id} ><h2 className="col-md-6">{el.title}</h2></Link>
                  <button className="btn btn-danger btn-lg col-md-offset-4" onClick={() => this.deleteThisArticle(el)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"> <FormArticles /> </div>
        </div>
      </div>

    )
  }

}

// function deleteThisArticle(el){
//     // el.preventDefault();
//     console.log('teste');
//     deleteArticle(el);
// };

// const ConnectedList = ({ articles }) => (
//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title} <button className="btn btn-danger btn-lg" onClick={() => deleteThisArticle(el)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );


// const List = connect(mapStateToProps)(ConnectedList);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
