import React from "react";
import Contoh from "../img/background.jpg";
import "../style/Post.css";
import { Button } from "reactstrap";

class Post extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgba(85, 85, 85, 1)" }}
        >
          <div className="post-photo container">
            <img src={Contoh} alt="" />
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-6 ">
              <div className="d-flex border-bottom border-2 mb-3">
                <div className="photo-profile rounded-circle ">
                  <img
                    src="https://images.unsplash.com/photo-1665054983503-a8395f102989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="  username-post ms-3">
                  <h3>username disini</h3>
                  <h6>32 Oktober 2025</h6>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                fuga.(caption)
              </p>
            </div>
            <div className="col-6">
              <div className=" mx-3 my-0">
                <div className="komentar-content d-flex justify-content-start my-1 mx-0">
                  <div className="photo-profile-comment rounded-circle my-0">
                    <img
                      src="https://images.unsplash.com/photo-1665054983503-a8395f102989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="ms-4">
                    <h5 className="my-0">username</h5>
                    <p>isi komntar</p>
                  </div>
                </div>
                <div class="form-floating mb-3 ">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label for="floatingTextarea2">Comments</label>
                </div>
                <Button color="primary" size="sm">
                  comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
