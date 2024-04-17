import {Component} from 'react'
import './index.css'
import {FcGoogle} from 'react-icons/fc'
import {GrApple} from 'react-icons/gr'

class LoginForm extends Component {
  render() {
    return (
      <div className="login_container">
        <div id="card-1">
          <h1>
            Board <span>.</span>
          </h1>
        </div>
        <div id="card-2">
          <div className="inside-container">
            <h1 className="heading">Sign In</h1>
            <p className="description">Sign in to your account</p>
            <div className="button-group">
              <button type="button" className="googlebutton">
                <FcGoogle /> Sign with Google
              </button>
              <button type="button">
                <GrApple /> Sign with Apple
              </button>
            </div>
            <form>
              <div className="input_container">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value="johndeo@gmail.com"
                />
              </div>
              <div className="input_container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value="123456"
                />
              </div>
              <p className="forgetPassword">Forgot Password?</p>
              <button type="button" className="signIn-button">
                Sign In
              </button>
            </form>
            <p className="register">
              Dont have an account? <span className="here">Register here</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
