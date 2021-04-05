import { useState } from "react";
import { Link } from "react-router-dom";
import { userLogin } from "../functions/index";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Login = ({ token, setToken, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { customer } = useSelector((state) => ({ ...state }));

  if (customer && customer.token) history.push("/");
  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((res) => {
        if (res.data.success === "0" && res.data.message === "Could not verify")
          toast.error("Incorrect password");
        if (
          res.data.success === "0" &&
          res.data.message === "User not present"
        ) {
          toast.error("You haven't signed up yet. Please sign up to continue.");
          history.push("/signup");
        }
        if (res.data.success === "1") {
          toast.success("Login successful");
          dispatch({
            type: "LOG_IN_CUSTOMER",
            payload: { token: res.data.token },
          });
          setToken(res.data.token);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid login-section">
      <div className="row">
        <div className="col-lg-5 col-xl-4 mx-xl-auto mx-lg-auto col-sm-10 offset-sm-1 mx-md-auto col-md-7 login px-5">
          <h4 className="login-title">Login</h4>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <br />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            ></input>
            <br />
            <label>Password</label>
            <br />
            <input
              required
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <button className="btn my-btn-primary btn-block">Log in</button>
            <br />

            <br />
            <p className="text-center">Not a user?</p>
            <Link to="/signup" className="btn my-btn-secondary btn-block">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
