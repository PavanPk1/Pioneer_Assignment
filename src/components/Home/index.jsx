import Graph from "../Graph";
import SideNavBar from "../Navbar";
import CryptoPrice from "../Cryptoprice";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <SideNavBar />
      <div className="home-container">
        <div className="profile-content">
          <div>
            <h1 className="home-title">Hello, Pavan Kumar 👋</h1>
            <p className="home-description">Welcome to Spot Trading</p>
          </div>
          <button type="button" className="trading-btn">
            Start Trading
          </button>
        </div>
        <Graph />
        <CryptoPrice />
      </div>
    </div>
  );
};
export default Home;
