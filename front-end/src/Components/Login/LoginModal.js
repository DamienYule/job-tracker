import { useContext,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import { JobsContext } from "../../Contexts/JobsContext";
import { login } from "../../Services/Firebase";

function LoginModal(props) {
    const { loginModal, setLoginModal } = useContext(JobsContext);
    const { setSignUpModal } = useContext(JobsContext);
    const [error, setError] = useState("");
    const [input, setInput] = useState({
        email: "",
        password: "",
      });

    const handleToggle = () => {
        setSignUpModal(true);
        setLoginModal(false);
    }
    const handleClose = () => {
        setLoginModal(false);
        setSignUpModal(false)
    }


    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        // setError("");
      };
    const handleLoginIn = async (e) => {
            e.preventDefault();
            try {
              await login(input.email, input.password);
              handleClose()
            } catch (error) {
              if (
                String(error).includes(
                  "The password is invalid or the user does not have a password."
                )
              ) {
                setError(
                  "The password is invalid or the user does not have a password."
                );
              } else if (
                String(error).includes(
                  "Access to this account has been temporarily disabled due to many failed login attempts."
                )
              ) {
                setError(
                  "Access to this account has been temporarily disabled due to many failed login attempts."
                );
              } else {
                window.alert(error);
                console.log(error);
              }
            }
          };
    return (
        <>
       
        
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
                <Button variant="primary" onClick={handleLoginIn}>Login</Button>
            </Modal.Body>
            <Modal.Footer>
            {error !== "" && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
                <Button variant="outline-success" onClick={handleToggle}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
        </>
    )


}

export default LoginModal
