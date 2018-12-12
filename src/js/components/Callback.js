import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchToken, fetchUserSuccess} from "../actions/auth"
import store from "../store";
import {USER_ENDPOINT} from "../constants/services";

const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        fetchToken: code => dispatch(fetchToken(code)),
        fetchUser: userAuth => dispatch(fetchUserSuccess(userAuth)),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return {
        token: state.auth,
        userAuth: state.userAuth,
    };
};

class ConnectedCallback extends Component{

    constructor(match) {
        super(match);
        this.checkToken = this.checkToken.bind(this);
    }

    componentDidMount()
    {
        if(!this.props.token.length > 0)
        {
            // obter o code a partir do URL
            let code = this.props.location.search.substr(6);

            // invocar o pedido para pedir o novo token a partir do code obtido
            this.props.fetchToken(code);
        }

        // verificar alterações à store
        store.subscribe(this.checkToken);
    }


    checkToken()
    {
        // verificar se o access_token no state existe
        if(store.getState().auth[0].access_token)
        {

            if(store.getState().userAuth.length < 1)
            {// chamada  para ir buscar o utilizador autenticado
              //  this.props.fetchUser(store.getState().auth[0].access_token);
              console.log('TESTE',this.props);
               fetch(USER_ENDPOINT+'/1' , {
                    headers: new Headers({'Authorization': 'Bearer ' + store.getState().auth[0].access_token})
               }).then(response => response.json(), ).then((responseData) => {
                   console.log('responseData',responseData);
                    this.props.fetchUser(responseData);
               });
            }
        }
    }

    render() {
        console.log('THIS OTHER SHIT', this.props);

        if(this.props.userAuth[0]){
          console.log('PLEASE', this.props.userAuth[0].name);
          if (this.props.userAuth[0].name.length > 0)
          {
              return (
                  <div>
                      <p>{this.props.userAuth[0].name}</p>
                  </div>
              );
          }
          else
          {
              return (
                  <div>
                      <p>Not logged in</p>
                  </div>
              );
          }
        } else {
          return (<div>Loading...</div>)
        }
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const Callback = connect(mapStateToProps, mapDispatchToProps)(ConnectedCallback);

export default Callback;
