import React, {Component} from 'react';

class TodoRegister extends Component {
    render() {
        const {onRegister,hataMesaji}=this.props;
        return (
            <div>
                <div className={"row"}>
                  <div className={"card col-4 mx-auto mt-5"}>
                  <div className={"card-body"}>

                      {hataMesaji ? <div className={"alert alert-primary"} role={"alert"}> Şifreler Uyuşmuyor ! Tekrar Deneyiniz </div>: null}
                      <h4 className={"card-title text-center"}>Register</h4>
                      <hr />
                  <form onSubmit={onRegister}>
                      <div className={"form-group"}>
                          <label>Username</label>
                          <input className={"form-control "}id={"emailReg"} placeholder={"username"}/>
                      </div>
                      <div className={"form-group"}>
                          <label>Password</label>
                          <input className={"form-control  "} type={"password"}  id={"sifreReg"} placeholder={"password"}/>

                      </div>
                      <div className={"form-group"}>
                          <label>Password</label>
                          <input className={"form-control "} type={"password"}  id={"sifreTekrarReg"} placeholder={"repeat password"}/>

                      </div>
                      <div className={"form-group"}>
                          <button className={"btn btn-default border-primary btn-block text-capitalize"}>register</button>
                      </div>

                      </form>
                  </div>
              </div>

          </div>

            </div>
        );
    }
}

export default TodoRegister;