import { useContext,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import { JobsContext } from "../../Contexts/JobsContext";


function SignInModal() {
  const [input , setInput]= useState("")
  const { loginModal, setLoginModal } = useContext(JobsContext);
  const { signInModal, setSignInModal } = useContext(JobsContext);
  const handleToggle = () => {
    setLoginModal(true);
    setSignInModal(false);
  }
  const handleClose = () => {
    setLoginModal(false);
    setSignInModal(false)
  }
  return (

    <Modal
      show={signInModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
        <CloseButton  onClick={handleClose}/>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>
      </Modal.Body>
      <Modal.Footer>
      If you have signed up before with email and password then

        <Button variant="primary" className="otherEmail" onClick={handleToggle}>
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SignInModal
