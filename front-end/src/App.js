import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobsProvider from "./Contexts/JobsContext";
// import "./App.css"
//Pages
 import HomeLogin from './Components/HomeLogin'
import FourOFour from './Components/FourOFour'
//Components 

import NavBar from './Components/NavBar'
import JobsList from "./Components/JobsList";
import JobDetails from "./Components/JobDetails";
import CreateJob from "./Components/CreateJob";
// import PackagesNewForm from "./components/PackagesNewForm";
// import PackagesEditForm from "./components/PackagesEditForm";
// import PackageDetails from "./components/PackageDetails";
// import ReviewNewForm from "./components/ReviewNewForm";

const App = () => {
  return (
    <div>
      <JobsProvider>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <HomeLogin />
            </Route>
            <Route exact path="/jobs">
              <JobsList />
              <JobDetails/>
            </Route>
            <Route path="/jobs/new">
              < CreateJob/>
            </Route>
            {/* <Route exact path="/travelpackages/:id">
              <PackageDetails />
            </Route>
            <Route exact path="/travelpackages/:id/edit">
              <PackagesEditForm />
            </Route>
            <Route exact path="/travelpackages/:id/travelreview/new">
              <ReviewNewForm/>
            </Route> */}
            <Route path="*">
              <FourOFour />
            </Route> 
          </Switch>
        </main>
      </Router>
      </JobsProvider>
    </div>
  );
};

export default App;
