// src/js/components/List.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, fetchUsers } from "../actions/users";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const mapStateToProps = state => {
  return { users: state.users.users };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: user => dispatch(deleteUser(user)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

class ConnectedList extends Component{
  constructor(){
    super();
    this.deleteThisUser = this.deleteThisUser.bind(this);
  }

  deleteThisUser(user){
    console.log(user);
    this.props.deleteUser(user);
  }

  componentDidMount(){
    //chamada inicial para ir buscar os users
    const users = this.props.users;
    if(users == 0){
      this.props.fetchUsers({ type: "FETCH_USERS" });
    }
  }

  render() {
    console.log(this.props.users);
    const users = this.props.users;
    return (

      <div>
        <div className="row">
          <div className="col-md-10">
            <h1>Lista de utilizadores</h1>
            <ul className="list-group list-group-flush col-md-12">
              {users.map((el, index) => (
                <li className="list-group-item col-md-12" key={index}>
                  <Link to={'/user/'+el.id} ><h2 className="col-md-6">{el.name}</h2></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    )
  }

}

// function deleteThisUser(el){
//     // el.preventDefault();
//     console.log('teste');
//     deleteUser(el);
// };

// const ConnectedList = ({ users }) => (
//   <ul className="list-group list-group-flush">
//     {users.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title} <button className="btn btn-danger btn-lg" onClick={() => deleteThisUser(el)}>Delete</button>
//       </li>
//     ))}
//   </ul>
// );


// const List = connect(mapStateToProps)(ConnectedList);
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
