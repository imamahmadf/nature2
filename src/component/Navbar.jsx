import React from "react";
// import "../style/Navbar.css";
import Logo from "../img/logo.png";
import { Navbar, NavbarBrand } from "reactstrap";
import { connect } from "react-redux";

class NavbarNature extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">
            <img
              alt="logo"
              src={Logo}
              style={{
                height: "50px",
                width: "100%",
              }}
            />
          </NavbarBrand>
          <div>
            <h1 style={{ color: "white" }}>{this.props.userGlobal.email}</h1>
          </div>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(NavbarNature);
