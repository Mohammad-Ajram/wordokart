import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userRegistration } from "../functions/index";
const Signup = ({ token, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (token) history.push("/");

  const handleSignup = (e) => {
    e.preventDefault();
    userRegistration(name, email, password).then((res) => {
      if (
        res.data.success === "0" &&
        res.data.message === "Customer Already exist"
      ) {
        toast.error("You have already signed up. Please log in to continue");
        history.push("/login");
      }
      console.log(res.data);
      if (res.data.success === "1") {
        toast.success("Registration successfull! Please log in to continue.");
        history.push("/login");
      }
    });
  };
  return (
    <div className="container-fluid login-section">
      <div className="row">
        <div className="col-lg-5 col-xl-4 mx-xl-auto mx-lg-auto col-sm-10 offset-sm-1 mx-md-auto col-md-7 login px-5">
          <h4 className="login-title">Sign up</h4>
          <form onSubmit={handleSignup}>
            <label>Name</label>
            <br />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            ></input>
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            ></input>
            <br />
            <label>Create Password</label>
            <br />
            <input
              type="password"
              required
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button className="btn my-btn-primary btn-block">Sign up</button>
          </form>

          <br />

          <p className="text-center">Already a user?</p>
          <Link to="/login" className="btn my-btn-secondary btn-block">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
