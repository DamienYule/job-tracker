import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobsProvider from "./Contexts/JobsContext";
import UserProvider from "./Contexts/UserProvider";
// import "./App.css"
//Pages
 import HomeLogin from './Components/HomeLogin'
import FourOFour from './Components/FourOFour'
//Components 

import NavBar from './Components/NavBar'
import JobsList from "./Components/Jobs/JobsList";
import JobDetails from "./Components/Job/JobDetails";
// import PackagesNewForm from "./components/PackagesNewForm";
// import PackagesEditForm from "./components/PackagesEditForm";
// import PackageDetails from "./components/PackageDetails";
// import ReviewNewForm from "./components/ReviewNewForm";

const App = () => {
  return (
    <div>
      <UserProvider>
      <JobsProvider>
      <Router>
        
        <main>
          <Switch>
            <Route exact path="/">
              <HomeLogin />
            </Route>
            <Route exact path="/jobs">
             <NavBar />
              <JobsList />
              <JobDetails/>
            </Route>
            <Route path="*">
              <FourOFour />
            </Route> 
          </Switch>
        </main>
      </Router>
      </JobsProvider>
      </UserProvider>
    </div>
  );
};

export default App;
