import React from 'react';

class SessionError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: this.props.errors.filter(error => error.split(" ")[0] === this.props.inputField)[0]
    }
  }

  componentDidMount() {
    if (this.state.error) {
      this.props.setErrorTag(this.props.inputField)
    }
  }

  render() {
    return (
      <div className={ this.state.error ? ("session-form-errors has-error") : ("session-form-errors no-error")}>
        <p>{this.state.error}</p>
      </div>
    )
  }
}

export default SessionError;
