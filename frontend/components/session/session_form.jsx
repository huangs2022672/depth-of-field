import React from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom'
import Logo from '../global_nav/logo'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      age: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user)
      .then(()=> this.props.history.push("/explore"))
  }

  handleDemo(e) {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })

    let email = "demouser@gmail.com".split('');
    let password = "1234567".split('');

    const demoLogin = setInterval(() => {
      if (email.length > 0) {
        this.setState({ email: this.state.email + email.shift() })
      } else if (password.length > 0) {
        this.setState({ password: this.state.password + password.shift() })
      } else {
        // debugger
        clearInterval(demoLogin);
        this.props.formAction(this.state)
          .then(()=> this.props.history.push("/explore"))
      }
    }, 50);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    const { errors, formType } = this.props
    if (this.state.redirect) { return <Redirect to="/explore"/>}
    return (
      <div className="session-form-main">
        <header className="session-form">
          <Logo />
          <Link to={
            formType === "Sign Up" ? "/login" : "/signup"
          }>{
              formType === "Sign Up" ? "Log In" : "Sign Up"
            }</Link>
        </header>
        <main className="session-form">
          <form
            className="session-form"
            onSubmit={this.handleSubmit}
          >
            <div id="session-form-header">
              <h2>{formType === "Sign Up" ? "Sign up for" : "Log in to"} </h2>
              <Logo />
            </div>
            <div className="session-form-errors">
              {
                errors ? (
                  errors.map(error => (
                    <p key={error}>{error}</p>
                  ))
                ) : null
              }
            </div>
            {
              formType === "Sign Up" ? (
                <>
                  <div className="session-form">
                    <label htmlFor="first_name">First name</label>
                    <input
                      id="first_name"
                      type="text"
                      value={this.state.first_name}
                      onChange={this.update("first_name")}
                    />
                  </div>
                  <div className="session-form">
                    <label htmlFor="last_name">Last name</label>
                    <input
                      id="last_name"
                      type="text"
                      value={this.state.last_name}
                      onChange={this.update("last_name")}
                    />
                  </div>
                  <div className="session-form">
                    <label htmlFor="age">Your age</label>
                    <input
                      id="age"
                      type="number"
                      value={this.state.age}
                      onChange={this.update("age")}
                    />
                  </div>
                </>
              ) : null
            }
            <div className="session-form">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
            <div className="session-form">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <div id="session-form-button">
              <button>{formType === "Sign Up" ? "Sign up" : "Log in"}</button>
            </div>
          </form>
          {
            formType === "Log In" ? (
              <>
                <form
                  className="demo-user"
                  onSubmit={this.handleDemo}
                >
                  <div className="demo-user">
                    <button>Demo User</button>
                  </div>
                </form>
              </>
            ) : null
          }
          <div id="session-form-links">
            {formType === "Sign Up" ? <p>Already a member? </p> : <p>Not a member? </p>}
            <Link to={
              formType === "Sign Up" ? "/login" : "/signup"
            }>{
                formType === "Sign Up" ? <span> Log in here.</span> : <span> Sign up here.</span>
              }</Link>
          </div>
        </main>
        <div className="session-bg-img"
        alt="session bg image"
        style={{
          backgroundImage: `url(${session})`
        }}
        />
      </div>
    )
  }
}

export default withRouter(SessionForm);
