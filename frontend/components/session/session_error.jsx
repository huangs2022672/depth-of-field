import React from 'react';

const SessionError = (props) => {
  const { errors, inputField, setErrorTag } = props
  let thisError = "";

  if (errors) {
    thisError = errors.filter(error => {
      return error.split(" ")[0] === inputField
    })[0]
  }

  if (thisError) {
    setErrorTag(inputField)
  }

  return (
    <div className={ thisError ? ("session-form-errors has-error") : ("session-form-errors no-error")}>
      <p>{thisError}</p>
    </div>
  )
}

export default SessionError;
