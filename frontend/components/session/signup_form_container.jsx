import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SessionForm from "./session_form"

const mSTP = ({errors}, ownProps) => {
  return {
    errors: errors.session.errors,
    formType: "Sign Up"
  }
}

const mDTP = dispatch => {
  return {
    formAction: (user) => dispatch(signup(user))
  }
}

export default connect(mSTP, mDTP)(SessionForm)