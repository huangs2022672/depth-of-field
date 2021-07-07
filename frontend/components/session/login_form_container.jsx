import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import SessionForm from "./session_form"
import { removeErrors } from '../../actions/session_actions';

const mSTP = ({errors}, ownProps) => {
  return {
    errors: errors.session,
    formType: "Log In"
  }
}

const mDTP = dispatch => {
  return {
    formAction: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mSTP, mDTP)(SessionForm)
