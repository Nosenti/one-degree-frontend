import {
  BrowserRouter as Switch,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';


function App() {
  return (
      <Switch>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Switch>
  );
}

export default App;
