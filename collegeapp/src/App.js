import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import LoginRoute from './Utils/Routes/LoginRoute';
import DashboardRoute from './Utils/Routes/DashboardRoute';

function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route path = "/signin" element = {<LoginRoute><SignIn/></LoginRoute>}/>
        <Route path = "/signup" element = {<LoginRoute><SignUp/></LoginRoute>}/>
        <Route path = "/" exact element = {<DashboardRoute><Dashboard/></DashboardRoute>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
