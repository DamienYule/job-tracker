import { Link,useHistory } from "react-router-dom";
import { useState, useContext,useEffect} from "react";
import { JobsContext } from "../Contexts/JobsContext";
import { UserContext } from "../Contexts/UserProvider";
import { signOut } from "../Services/Firebase";
const NavBar = () => {
    let history = useHistory();
    const [initials, setInitials] = useState("TK")
    const user = useContext(UserContext);
    const { displayNav, setDisplayNav } = useContext(JobsContext);
    const handleClick = (e) => {
        setDisplayNav(e.target.innerHTML)
    }
    const handleLogout = async () => {
        try {
          await signOut();
        //   history.push("/");
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        if (!user) {
            history.push("/");
        }
      }, [user])
    return (
        <>
            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <Link className="initials" onClick={handleLogout}>
                    {initials}
                </Link>
            </nav>
            <nav className="navSide">
                <div className="list-group">
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">All Jobs</a>
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Create Job</a>
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Assigned to me</a>
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">In Progress</a>
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Completed</a>
                    <a onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Notes</a>
                </div>
            </nav>
        </>

    );
};

export default NavBar;
