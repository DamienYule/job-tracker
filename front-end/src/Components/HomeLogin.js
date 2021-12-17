import { useState, useContext, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import { signInWithGoogle } from "../Services/Firebase";
import { UserContext } from "../Contexts/UserProvider";
//import { signInWithGoogle } from "../Services/Firebase";
function HomeLogin() {
    const [initials, setInitials] = useState("")
    const user = useContext(UserContext);
    const history = useHistory();
    const handleGoogle = () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
      if (user) {
            history.push("/jobs");
          }
    })
    return (
        <>

            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <Link className="initials" to={`/`}>
                    
                </Link>
            </nav>
            <div class="card text-center loginContainer">
                <h5 className="card-header">Welcome to our Job Tracker</h5>
                <div className="card-body">
                    <h5 className="card-title">Sign in with gmail</h5>
                    <p className="card-text">If you do not have a google account please create one.</p>
                    <a className="btn btn-primary" onClick={handleGoogle}>Sign in</a>
                </div>
            </div>
        </>
    )
}

export default HomeLogin
