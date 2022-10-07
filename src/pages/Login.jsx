import React from "react";
import "../style/Login.css";
import { FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { loginUser } from "../redux/action/user";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  inputHandler = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    //   // if (this.props.userGlobal.id) {
    //     // untuk home ("/")
    //     // return <Redirect to="/" />;
    //   }

    return (
      <div className="pt-5 background-login">
        {/* <nav className="nav-container">
          <div className="nav-nature"> */}
        {/* <img
              src="./foto/na-removebg-preview.png"
              style="width:300px; height:300px;"
            /> */}
        {/* </div>

          <div className="nav-login">
            <input
              type="search"
              name="txtLocation"
              id="idLocation"
              className="nav-location"
              placeholder="Location"
            /> */}

        {/* <input
              className="btn-border"
              style="margin-right: 30px"
              value="SIGN UP"
        //     /> */}
        {/* //   </div> */}
        {/* // </nav> */}

        <div className="page-title pt-5">
          <h2
            className="title-heading pt-5"
            style={{ color: "rgb(31, 95, 31)" }}
          >
            CAPTURE OF INDONESIA
          </h2>
          <p className="title-content">
            "Look deep into nature, and then you will understand everything
            better."-Albert Einstein
          </p>
          <div>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={this.inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={this.inputHandler}
              />
            </FormGroup>
          </div>
          <button
            onClick={() => this.props.loginUser(this.state)}
            className="try-free"
          >
            LOGIN
          </button>
          <p className="beautiful-place">Beautiful Places In Indonesia</p>
        </div>
        <div>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

// untuk kirim function (dalam action)
const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
