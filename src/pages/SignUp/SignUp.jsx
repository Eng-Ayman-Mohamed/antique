import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import image from "./SignUp.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="SignContainer">
      <div className="SignFormContainer">
        <form>
          <h1 className="SignWelcome">Get started now</h1>
          <label htmlFor="email">Name</label>
          <input id="email" placeholder="Enter your Name" type="text" />
          <label htmlFor="email">Email address</label>
          <input id="email" placeholder="Enter your email" type="text" />
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            placeholder="Please enter your password"
            type="text"
          />
          <input type="submit" value={"Sign up"} className="SignSubmit" />
          <div className="SignFormDiv">
            <div className="break" />
            <p>OR</p>
            <div className="break" />
          </div>
          <div className="SignFormDiv">
            <div className="SignDifferent">
              <FcGoogle />
              <p>Sign up with google</p>
            </div>
            <div className="SignDifferent">
              <TfiFacebook color="blue" />
              <p>Sign up with facebook</p>
            </div>
          </div>
          <div className="SignFormFooter">
            <p> have an account?</p>
            <Link to={"/antique/SignIn"}>
              <p style={{ color: "blue" }}>Sign in</p>
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

export default SignUp;
