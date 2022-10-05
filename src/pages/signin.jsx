import React from "react";
// import "../style/Signin.css";
// import "../img/logo.png";

class Signin extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <div className="nav-nature">
            {/* <img
              src="./foto/na-removebg-preview.png"
              style="width: 300px; height: 300px"
            /> */}
          </div>
        </nav>

        <div className="card">
          <h5>SIGN IN</h5>
          <p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {/* <button className="sign-in" type="submit">
                Sign In
              </button> */}
              <p></p>
              <div>Don't have an account? </div>
              <div className="register">Register now</div>
            </form>
          </p>
        </div>

        <div>
          <div className="pulau-container">
            <div className="pulau">
              <h6>Sumatera</h6>
            </div>

            <div className="pulau">
              <h6>Jawa</h6>
            </div>

            <div className="pulau">
              <h6>Bali</h6>
            </div>

            <div className="pulau">
              <h6>Kalimantan</h6>
            </div>

            <div className="pulau">
              <h6>Sulawesi</h6>
            </div>

            <div className="pulau">
              <h6>Papua</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
