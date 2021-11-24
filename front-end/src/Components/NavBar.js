import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { JobsContext } from "../Contexts/JobsContext";

const NavBar = () => {
    const [initials, setInitials] = useState("TK")
    const [user, setUser] = useState({ userId: 1 })
    const { displayNav, setDisplayNav } = useContext(JobsContext);
    const handleClick = (e) => {
        setDisplayNav(e.target.innerHTML)
    }
    return (
        <>
            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <Link className="initials" to={`/users/${user.userId}`}>
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
