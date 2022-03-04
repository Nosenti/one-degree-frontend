import {
  BrowserRouter as Switch,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage";


function App() {
  return (
      <Switch>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Switch>
  );
}

export default App;
