import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");

  return (
    <div className="col-4 m-auto">
      <div className="card bg-info text-center card-form mtop">
        <div className="card-body">
          <h4 className="display-4 text-light">Join Us Now</h4>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Username..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Confirm Password"
                value={confimPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-outline-light btn-block"
              onClick={() => alert("Congratulation!")}
            >
              Register Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
