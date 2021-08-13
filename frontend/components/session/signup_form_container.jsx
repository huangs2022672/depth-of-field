import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SessionForm from "./session_form"
import { removeSessionErrors } from '../../actions/session_actions';

const mSTP = ({errors}, ownProps) => {
  return {
    errors: errors.session,
    formType: "Sign Up"
  }
}

const mDTP = dispatch => {
  return {
    formAction: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  }
}

export default connect(mSTP, mDTP)(SessionForm)
