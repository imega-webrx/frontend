import {Alert} from "react-bootstrap";

const AlertMessage = props => (
  <>
    {
      props.show
        ? <Alert variant={props.variant}>{props.label}</Alert>
        : null
    }
  </>
)

export default AlertMessage;