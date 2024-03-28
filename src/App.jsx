import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Page from "./components/Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/create" exact element={<Page />} />
        {/* <Route path="*" element={<Navigate to="/create" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
