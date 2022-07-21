import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./common/auth/Login";
import Signup from "./common/auth/Signup";
import Home from "./common/home/index";

import Dashboard from "./pages/admin/dashboard";
import AdminHome from "./pages/admin/home";
import { AddAirline } from "./pages/admin/add";
import { CompanyProfile } from "./pages/admin/profile";
import { UserProfile } from "./pages/user/profile";
import { UserHome } from "./pages/user";
import { AirlinesData } from "./pages/user/showAirlines";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/admin" component={AdminHome} />
					<Route path="/add" component={AddAirline} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/profile" component={CompanyProfile} />
					<Route path="/userprofile" component={UserProfile} />
					<Route path="/user" component={UserHome} />
					<Route path="/airlines" component={AirlinesData} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
