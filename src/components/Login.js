import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmitHandler = (e) => {
    e.prevetDefault();
    axios.patch({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="col-4 m-auto">
        <div className="card bg-primary text-center card-form mtop">
          <div className="card-body">
            <h4 className="display-4 text-light">Welcome Back!</h4>
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email..."
                  onChange={this.onChangeHandler}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Your Password..."
                  onChange={this.onChangeHandler}
                ></input>
              </div>
              <button type="submit" className="btn btn-outline-light btn-block">
                Login!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
