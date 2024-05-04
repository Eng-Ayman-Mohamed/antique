import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import image from "./SignIn.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="SignContainer">
      <div className="SignFormContainer">
        <form>
          <h1 className="SignWelcome">Welcome Back</h1>
          <label htmlFor="email">Email address</label>
          <input id="email" placeholder="Enter your email" type="text" />
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            placeholder="Please enter your password"
            type="text"
          />
          <input type="submit" value={"Login"} className="SignSubmit" />
          <div className="SignFormDiv">
            <div className="break" />
            <p>OR</p>
            <div className="break" />
          </div>
          <div className="SignFormDiv">
            <div className="SignDifferent">
              <FcGoogle />
              <p>Sign in with google</p>
            </div>
            <div className="SignDifferent">
              <TfiFacebook color="blue" />
              <p>Sign in with facebook</p>
            </div>
          </div>
          <div className="SignFormFooter">
            <p>Don't have account?</p>
            <Link to={"/antique"}>
              {" "}
              <p style={{ color: "blue" }}>Sign up</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="SignImageContainer">
        <img src={image} alt="Old books"></img>
      </div>
    </div>
  );
};

export default SignIn;