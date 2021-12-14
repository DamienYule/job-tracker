import { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import { signInWithGoogle } from "../Services/Firebase";
function HomeLogin() {
    const [initials, setInitials] = useState("")
    const [user, setUser] = useState({ userId: 1 })
    return (
        <>

            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <Link className="initials" to={`/users/${user.userId}`}>
                    {initials}
                </Link>
            </nav>
            <div class="card text-center loginContainer">
                <h5 className="card-header">Welcome to our Job Tracker</h5>
                <div className="card-body">
                    <h5 className="card-title">Sign in with gmail</h5>
                    <p className="card-text">If you do not have a google account please create one.</p>
                    <a className="btn btn-primary">Sign in</a>
                </div>
            </div>
        </>
    )
}

export default HomeLogin
