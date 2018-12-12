import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userData";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const mapStateToProps = state => {

  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    // deleteUser: user => dispatch(deleteUser(user)),
    fetchUser: user => dispatch(fetchUser(user)),
  };
};

class ConnectedList extends Component{

  // constructor(){
  //   super();
  //   // this.deleteThisUser = this.deleteThisUser.bind(this);
  // }

  // deleteThisUser(user){
  //   console.log(user);
  //   this.props.deleteUser(user);
  // }

  componentDidMount(){
    //chamada inicial para ir buscar o user do ID
    const id = this.props.match.params.id;

    this.props.fetchUser({ type: "FETCH_USER", user: id });

  }

  render(){
    const user = this.props.userInfo.userInfo;
    console.log('user',user);
    const articles = user.article;
    console.log("articles",articles);
    if(user.article)
    {
    return(
      <div>
        <div className="row">
          <h1>Utilizador: {user.name}</h1>
          <h2>E-mail: {user.email}</h2>
          <h3>Utilizador desde: {user.created_at}</h3>
          <div>
          <h3>Artigos:</h3>
            <ul className="list-group list-group-flush col-md-10">
              {articles.map((el, index) => (
                <li className="list-group-item" key={index}>
                  {el.title}

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  else {
    return(
      <div>Loading....</div>
    )
  }
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
