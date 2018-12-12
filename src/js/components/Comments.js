// src/js/components/List.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment, fetchComments } from "../actions/comments";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const mapStateToProps = state => {
  return { comments: state.comments.comments };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: comment => dispatch(deleteComment(comment)),
    fetchComments: () => dispatch(fetchComments()),
  };
};

class ConnectedList extends Component{
  constructor(){
    super();
    this.deleteThisComment = this.deleteThisComment.bind(this);
  }

  deleteThisComment(comment){
    console.log(comment);
    this.props.deleteComment(comment);
  }

  componentDidMount(){
    //chamada inicial para ir buscar os comentarios
    const comments = this.props.comments;
    if(comments == 0){
      this.props.fetchComments({ type: "FETCH_COMMENTS" });
    }
  }

  render() {
    const comments = this.props.comments;
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <h1>Lista de comentarios</h1>
            <ul className="list-group list-group-flush col-md-12">
              {comments.map((el, index) => (
                <li className="list-group-item col-md-12" key={index}>
                  <Link to={'/comment/'+el.id} ><h2 className="col-md-6">{el.commentText}</h2></Link>
                  <button className="btn btn-danger btn-lg col-md-offset-4" onClick={() => this.deleteThisComment(el)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    )
  }

}


// const List = connect(mapStateToProps)(ConnectedList);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
