import {  useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle, login } from "../../Services/Firebase";
import { UserContext } from "../../Contexts/UserProvider";
import GoogleIcon from "../../Images/google_icon.png";
import UserIcon from "../../Images/user_icon.png";
import AdminIcon from "../../Images/admin_icon.png"
import Button from 'react-bootstrap/Button';

import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { JobsContext } from "../../Contexts/JobsContext";

//import { signInWithGoogle } from "../Services/Firebase";
function HomeLogin() {
    const user = useContext(UserContext);
    const history = useHistory();
    const { setSignUpModal } = useContext(JobsContext);

    useEffect(() => {
        if (user) {
            history.push("/jobs");
        }
    })
    const handleLoginIn = async (e) => {
        e.preventDefault();
        try {
            await login("admin_pma_job_tracker@gmail.com", "admin12345");

        } catch (error) {
            window.alert(error);
            console.log(error);
        }

    };
    const handleGoogle = () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <>




            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>

            </nav>
            <div className="row loginContainer" >
                <div className="col-sm-6">
                    <div className="card">
                        <h5 className="card-header">Login as a user <img alt="User Icon" src={UserIcon} className="UserIcon" /></h5>
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
                            <button className="btn btn-primary" onClick={handleGoogle}><img alt="google icon" className="googleIcon" src={GoogleIcon} />Login</button>

                            <Button variant="primary" className="otherEmail" onClick={() => setSignUpModal(true)}>
                                Sign Up With Different Email
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <h5 className="card-header">Login as the administrator <img alt="Admin Icon" src={AdminIcon} className="AminIcon" /></h5>
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
                            <button className="btn btn-primary" onClick={handleLoginIn}>Administrator Login</button>
                        </div>
                    </div>
                </div>
            </div>


            <SignUpModal

            />
            <LoginModal

            />
        </>
    )
}

export default HomeLogin


