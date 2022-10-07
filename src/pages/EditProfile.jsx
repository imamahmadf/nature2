import React from "react";
import "../style/EditProfile.css";
import { Component } from "react";

class EditProfile extends Component {
  // state = {
  //     editId: `${this.props.userGlobal.id}`,
  //     editUsername : `${this.props.userGlobal.username}`,
  //     editFullname : `${this.props.userGlobal.fullName}`,
  //     editFotoProfile : `${this.props.userGlobal.fotoProfile}`,
  //     editBio : `${this.props.userGlobal.bio}`
  // }

  // //utk mengatasi inputan
  // inputHandler = (event) => {
  //     const {name, value} = event.target

  //     this.setState({[name] : value})
  //     // console.log(this.state.editUsername);
  // }

  // SaveBtnHandler = () => {
  //     axios.patch(`${API_URL}/users/${this.state.editId}`, {
  //         username :this.state.editUsername,
  //         fullName: this.state.editFullname,
  //         bio :this.state.editBio,
  //         fotoProfile : this.state.editFotoProfile
  //     })
  //     .then((result) => {
  //         alert("berhasil mengubah data")
  //     })
  //     .catch((err) => {
  //         alert(err)
  //     })
  // }

  // componentDidUpdate() {
  //     this.props.userKeepLogin(this.state.editId)
  // }

  render() {
    return (
      <div>
        {/* diisi oleh navbar jika mau */}
        {/* <MyNavbar/> */}
        <div className="edit-profile">
          <div className="section2 d-flex flex-column">
            <div className="section2-edit-fotoProfile d-flex my-2">
              <div className="section2-edit-image">
                <img src="" alt="" />
              </div>
              <div>
                <div className="section2-edit-fotoProfile-name">username</div>
                <div className="section2-edit-fotoProfile-ubah">
                  Ubah Foto Profile
                </div>
              </div>
            </div>
            <div className="section2-edit-nama d-flex my-2">
              <label htmlFor="name">Nama</label>
              <input
                name="editFullname"
                type="text"
                className="form-control me-2"
                // onChange={this.inputHandler}
                // value={this.state.editFullname}
              />
            </div>
            <div className="section2-edit-username d-flex my-2">
              <label htmlFor="username">UserName</label>
              <input
                name="editUsername"
                type="text"
                className="form-control me-2"
                // onChange={this.inputHandler}
                // value={this.state.editUsername}
              />
            </div>
            <div className="section2-edit-bio d-flex my-2">
              <label htmlFor="Bio">Bio</label>
              <input
                name="editBio"
                type="text"
                className="form-control me-2"
                // onChange={this.inputHandler}
                // value={this.state.editBio}
              />
            </div>
            <div className="section2-edit-bio d-flex my-2">
              <label htmlFor="Bio">Foto Profile</label>
              <input
                name="editFotoProfile"
                type="text"
                className="form-control me-2"
                // onChange={this.inputHandler}
                // value={this.state.editFotoProfile}
              />
            </div>
            <div className="button-edit">
              <button className="btn btn-primary me-5 px-3">Save</button>
              <button className="btn btn-secondary ">cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
