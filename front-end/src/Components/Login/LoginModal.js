import {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import { JobsContext } from "../../Contexts/JobsContext";

function LoginModal(props) {
    const { loginModal , setLoginModal } = useContext(JobsContext);
    const { signInModal, setSignInModal } = useContext(JobsContext);
    const handleToggle =()=>{
        setSignInModal(true);
        setLoginModal(false);
       }
       const handleClose = () => {
        setLoginModal(false);
        setSignInModal(false)
      }
    return (
        <Modal
            show={loginModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Login 
                </Modal.Title>
                <CloseButton  onClick={handleClose}/>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleToggle}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
    )


}

export default LoginModal
