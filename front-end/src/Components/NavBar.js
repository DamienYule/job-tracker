import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { JobsContext } from "../Contexts/JobsContext";
import { UserContext } from "../Contexts/UserProvider";
import { signOut } from "../Services/Firebase";
const NavBar = () => {
    let history = useHistory();
    const [initials, setInitials] = useState("")
    const user = useContext(UserContext);
    const { setDisplayNav } = useContext(JobsContext);
    const handleClick = (e) => {
        setDisplayNav(e.target.innerHTML)
    }
    const writeInitials = (str) => {
        let arr = str.split(" ")
        let letters = ""
        arr.forEach(el => {
            letters += el[0].toUpperCase()
        });
        setInitials(letters)
    }
    const handleLogout = async () => {
        try {
            await signOut();
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (!user) {
            history.push("/");
        }
        user && writeInitials(user.displayName)
    }, [user])
    return (
        <>
            <nav className="navTop">
                <Link className="logoPMA" to="/jobs">Publish Me ASAP</Link>
                <div className="initials" onClick={handleLogout}>
                    {initials}
                </div>
            </nav>
            <nav className="navSide">
                <div className="list-group">
                    <button onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">All Jobs</button>
                    <button onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">In progress</button>
                    <button onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Completed</button>
                    <button onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Assigned to me</button>
                    {(user?.uid === "Cf0scKx42QQVUgGn42co4hGfG7H3") && <button onClick={handleClick} className="list-group-item list-group-item-action list-group-item-light">Create Job</button>}
                    <button onClick={handleLogout} className="list-group-item list-group-item-action list-group-item-light">Log Out</button>
                </div>
            </nav>
        </>

    );
};

export default NavBar;
