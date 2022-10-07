import React from "react";
// import "../style/Navbar.css";
import Logo from "../img/logo.png";
import { Navbar, NavbarBrand } from "reactstrap";
import { connect } from "react-redux";

class NavbarNature extends React.Component {
  render() {
    return (
      <div className="p-0 m-0">
        <Navbar className="" color="dark" dark>
          <NavbarBrand>
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
