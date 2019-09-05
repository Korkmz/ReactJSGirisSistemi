import React, {Component} from 'react';

class TodoLogin extends Component {
    render() {
        const {onLogin,hataMesaji}=this.props;
        return (
            <div>
                <div className={"row"}>

                  <div className={"card col-4 mx-auto mt-5"}>
                  <div className={"card-body"}>
                      {hataMesaji ? <div className={"alert alert-primary"} role={"alert"}> Hatalı Tekrar Deneyiniz ! </div>:null}
                      <h4 className={"card-title text-center"}>Login</h4>
                      <hr />
                  <form onSubmit={onLogin}>
                      <div className={"form-group"}>
                          <label>Username</label>
                          <input className={"form-control "} id={"emailLogin"} placeholder={"username"}/>
                      </div>
                      <div className={"form-group"}>
                          <label>Password</label>
                          <input className={"form-control  "} type={"password"}  id={"sifreLogin"} placeholder={"password"}/>

                      </div>
                      <div className={"form-group"}>
                          <button className={"btn btn-default border-primary btn-block text-capitalize"}>login</button>
                      </div>

                      </form>
                  </div>
              </div>

          </div>
            </div>
        );
    }
}

export default TodoLogin;