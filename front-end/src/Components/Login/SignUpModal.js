import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import { JobsContext } from "../../Contexts/JobsContext";
import { signup } from "../../Services/Firebase";

function SignUpModal() {
  const {  setLoginModal } = useContext(JobsContext);
  const { signUpModal, setSignUpModal } = useContext(JobsContext);
  const [ error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleToggle = () => {
    setLoginModal(true);
    setSignUpModal(false);
  }
  const handleClose = () => {
    setLoginModal(false);
    setSignUpModal(false)
  }
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    setError("");
  };
  const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          await signup(input.email, input.password);
          handleClose()
        } catch (error) {
          if (String(error).includes("The email address is badly formatted.")) {
            setError("The email address is badly formatted.");
          } else if (
            String(error).includes(
              "The email address is already in use by another account"
            )
          ) {
            setError("The email address is already in use by another account.");
          } else {
            window.alert(error);
            console.log(error);
          }
        }
      };
  return (
    <>
    
    <Modal
      show={signUpModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      
        <CloseButton onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>

        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
               type="text"
               aria-readonly
               className="form-control-plaintext"
               id="email"
               value={input.email}
               onChange={handleChange}
               placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
            onChange={handleChange}
            value={input.password}
            type="password"
            className="form-control"
            id="password"
            minLength="6"
            required
            />
          </div>
        </div>
        <Button variant="primary" onClick={handleSignUp}>Create</Button>
      </Modal.Body>
      <Modal.Footer>
      {error !== "" && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
        If you have signed up before with email and password then

        <Button variant="outline-success" className="otherEmail" onClick={handleToggle}>
          log back in
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default SignUpModal
