import React from "react";
import { Button, Container } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <br />
      <br />
      <div style={{ overflow: "hidden", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "500px" }} className="border p-4 shadow-lg">
          <h1 className="text-center">Silahkan Login</h1>
          <form>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="staticEmail" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" />
              </div>
            </div>
            <div style={{ width: "100%", height: "50", display: "flex", justifyContent: "flex-end" }}>
              <Button>Masuk</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
