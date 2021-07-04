import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import SessionForm from "./session_form"

const mSTP = ({errors}, ownProps) => {
  return {
    errors: errors.session.errors,
    formType: "Log In"
  }
}

const mDTP = dispatch => {
  return {
    formAction: (user) => dispatch(login(user))
  }
}

export default connect(mSTP, mDTP)(SessionForm)