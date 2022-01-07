import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../Services/Firebase";
import { UserContext } from "../../Contexts/UserProvider";
import GoogleIcon from "../../Images/google_icon.png";
import UserIcon from "../../Images/user_icon.png";
import AdminIcon from "../../Images/admin_icon.png"
import Button from 'react-bootstrap/Button';

import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";
import { JobsContext } from "../../Contexts/JobsContext";

//import { signInWithGoogle } from "../Services/Firebase";
function HomeLogin() {
    const [initials, setInitials] = useState("")
    const user = useContext(UserContext);
    const [show, setShow] = useState(false);
    const history = useHistory();
    const { loginModal , setLoginModal } = useContext(JobsContext);
  const { signInModal, setSignInModal } = useContext(JobsContext);

    useEffect(() => {
        if (user) {
            history.push("/jobs");
        }
    })

    //modal
    



    const handleGoogle = () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };


    // const handleLoginIn = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await login(input.email, input.password);
    //     } catch (error) {
    //       if (
    //         String(error).includes(
    //           "The password is invalid or the user does not have a password."
    //         )
    //       ) {
    //         setError(
    //           "The password is invalid or the user does not have a password."
    //         );
    //       } else if (
    //         String(error).includes(
    //           "Access to this account has been temporarily disabled due to many failed login attempts."
    //         )
    //       ) {
    //         setError(
    //           "Access to this account has been temporarily disabled due to many failed login attempts."
    //         );
    //       } else {
    //         window.alert(error);
    //         console.log(error);
    //       }
    //     }
    //   };
    //   const handleSignUp = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await signup(signUpInput.newEmail, signUpInput.newPassword);
    //     } catch (error) {
    //       if (String(error).includes("The email address is badly formatted.")) {
    //         setError("The email address is badly formatted.");
    //       } else if (
    //         String(error).includes(
    //           "The email address is already in use by another account"
    //         )
    //       ) {
    //         setError("The email address is already in use by another account.");
    //       } else {
    //         window.alert(error);
    //         console.log(error);
    //       }
    //     }
    //   };
    //   const handleChange = (e) => {
    //     setInput({ ...input, [e.target.id]: e.target.value });
    //     setError("");
    //   };
    //   const handleSignUpChange = (e) => {
    //     setSignUpInput({ ...signUpInput, [e.target.id]: e.target.value });
    //     setError("");
    //   };

    return (
        <>




            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <Link className="initials" to={`/`}>

                </Link>
            </nav>
            <div className="row loginContainer" >
                <div className="col-sm-6">
                    <div className="card">
                        <h5 className="card-header">Login as a user <img src={UserIcon} className="UserIcon" /></h5>
                        <div className="card-body">
                            <h5 className="card-title">As a user you are able to</h5>
                            <div className="card-text">
                                <ul>
                                    <li>See all jobs and who they are assigned to.</li>
                                    <li>Make, edit, and delete comments on all jobs.</li>
                                    <li>Claim a job as yours.</li>
                                    <li>Set status to any job that is yours.</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-success">Feel free to make comments. Please no profanity, but we do enjoy a good joke.</div>
                            <a className="btn btn-primary" onClick={handleGoogle}><img className="googleIcon" src={GoogleIcon} />Login</a>
                          
                            <Button variant="primary" className="otherEmail" onClick={() => setLoginModal(true)}>
                                Sign Up With Different Email
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <h5 className="card-header">Login as the administrator <img src={AdminIcon} className="AminIcon" /></h5>
                        <div className="card-body">
                            <h5 className="card-title">As the administrator you are able to</h5>
                            <div className="card-text">
                                <ul>
                                    <li>Do everything that a user can do.</li>
                                    <li>Create jobs for the users.</li>
                                    <li>Delete and edit jobs.</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-success">Anybody can sign in as the admin because this is not the production repository. Feel free to make some jobs.</div>
                            <a className="btn btn-primary">Administrator Login</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card text-center loginContainer">
                <h5 className="card-header">Welcome to our Job Tracker</h5>
                <div className="card-body">
                    <h5 className="card-title">Sign in with gmail</h5>
                    <p className="card-text">If you do not have a google account please create one.</p>
                    <a className="btn btn-primary" onClick={handleGoogle}>Sign in with Gmail</a>
                </div>
            </div> */}

            <SignInModal
             
                />
            <LoginModal 
            
            />
        </>
    )
}

export default HomeLogin


