import React, { Component } from "react";
import { connect } from "react-redux";
import {AUTH_ENDPOINT} from "../constants/services";
import { deleteUser, fetchUsers } from "../actions/users";

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return {
        token: state.auth,
        userAuth: state.userAuth
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

class ConnectedUser extends Component{

  constructor(){
      super();
      this.state = {
        email: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      const { email } = this.state;
      this.props.userAuth({ email });
      this.setState({ email: "" });
    }


  render()
  {
      const { email } = this.state;
      console.log('EMAIL', this.state);
      if(this.props.userAuth > 0)
      {
          return (

              <li>
                  { this.props.userAuth[0].name }
              </li>

          );
      }
      else
      {
          return (


                  <form className="col-md-4" onSubmit={this.handleSubmit}>
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <button type="submit"><a href={ AUTH_ENDPOINT }>Login</a></button>
                  </form>


          );
      }
    }
}

const User = connect(mapStateToProps)(ConnectedUser);

export default User;
