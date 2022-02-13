import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobsProvider from "./Contexts/JobsContext";
import UserProvider from "./Contexts/UserProvider";
import HomeLogin from './Components/Login/HomeLogin'
import FourOFour from './Components/FourOFour'
//Components 

import NavBar from './Components/NavBar'
import JobsList from "./Components/Jobs/JobsList";
import JobDetails from "./Components/Job/JobDetails";

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
                <>
                  <Switch>
                    <Route exact path="/jobs">
                      <NavBar />
                      <JobsList />
                      <JobDetails />
                    </Route>
                    <Route exact path="/users">
                      <NavBar />
                      {/* < />
                      < /> */}
                    </Route>
                    <Route path="*">
                      <FourOFour />
                    </Route>
                  </Switch>
                </>
                </Switch>
            </main>
          </Router>
        </JobsProvider>
      </UserProvider>
    </div>
  );
};

export default App;
