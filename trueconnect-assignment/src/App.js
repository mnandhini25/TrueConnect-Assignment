import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./contexts/userContext";
import RegistrationComponent from "./components/registrationComponent";
import UserListComponent from "./components/userListComponent";
import ViewUserComponent from "./components/viewUserComponent";

function App() {
  return (
    <div className="">
      <UserProvider>
        <Router>
          <div>
            <HeaderComponent />
          </div>
          <Switch>
            <Route exact exact path="/">
              <RegistrationComponent />
            </Route>
            <Route exact path="/show-all">
              <UserListComponent />
            </Route>
            <Route exact path="/view/:id" component={ViewUserComponent}/>
  
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
