import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComment } from "../actions/commentData";
import { deleteComment } from "../actions/comments";

const mapStateToProps = state => {

  return { commentInfo: state.commentInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: comment => dispatch(deleteComment(comment)),
    fetchComment: comment => dispatch(fetchComment(comment)),
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
    //chamada inicial para ir buscar o comentario do ID
    const id = this.props.match.params.id;

    this.props.fetchComment({ type: "FETCH_COMMENT", comment: id });

  }

  render(){
    const comment = this.props.commentInfo.commentInfo;
    console.log('COMMENT',comment.id);
    if(comment.user){
    return(
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>Comentário: {comment.commentText}</h1>
            <h2>Autor do comentário: {comment.user.name}</h2>
          </div>
          <div className="col-md-2"><br/>
            <button className="btn btn-danger btn-lg" onClick={() => this.deleteThisComment(comment)}>Eliminar o comentário</button>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div>Loading....</div>
    )
  }
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
