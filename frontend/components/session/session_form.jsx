import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../global_nav/logo'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    const { errors, formType} = this.props
    return (
      <div className="session-form-main">
        <header className="session-form">
          <Logo/>
          <Link to={
            formType === "Sign Up" ? "/login" : "/signup"
          }>{
            formType === "Sign Up" ? "Log In" : "Sign Up"
          }</Link>
        </header>
        <main className="session-form">
          <form className="session-form"
            onSubmit={this.handleSubmit}>
            <div id="session-form-header">
              <h2>{formType} {formType === "Sign Up" ? "for" : "in to"} Depth of Field</h2>
            </div>
            {
              errors ? (
                errors.map(error => (
                  <p>{error}</p>
                ))
              ) : null 
            }
            {
              formType === "Sign Up" ? (
                <>
                  <div className="session-form">
                    <label htmlFor="firstName">First name</label>
                    <input
                    id="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                    />
                  </div>
                  <div className="session-form">
                    <label htmlFor="lastName">Last name</label>
                    <input
                    id="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.update("lastName")}
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
              type="email"
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
              <button>{formType}</button>
            </div>
            <div id="session-form-links">
              <span>{formType === "Sign Up" ? "Already a member?" : "Not a member?"}</span>
              <Link to={
                formType === "Sign Up" ? "/login" : "/signup"
              }>{
                formType === "Sign Up" ? "Log in here." : "Sign up here."
              }</Link>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

export default SessionForm;