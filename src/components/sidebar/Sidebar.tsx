import { Email, Feedback, Forum, Group, LineStyle, LiveTv, ManageAccounts, Report, Slideshow, Timeline, TrendingUp } from "@mui/icons-material";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-items">
        <h3>Dashboard</h3>
        <div className="item">
          <ul>
            <Link to={'/'}>              
            <li className="list-item active">
              <LineStyle className="icon" />
              Home
            </li>
          </Link>
            <li className="list-item">
              <Timeline className="icon"/>
              Analitics
            </li>
            <li className="list-item">
              <TrendingUp className="icon"/>
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-items">
        <h3>Quick Menu</h3>
        <div className="item">
          <ul>
            <Link to={'/users'}>
            <li className="list-item">
              <Group className="icon" />
              Users
            </li>
            </Link>
            <Link to={'/products'}>
            <li className="list-item">
              <Slideshow className="icon"/>
              Products
            </li>
            </Link>
            <li className="list-item">
              <LiveTv className="icon"/>
              Series
            </li>
            <li className="list-item">
              <TrendingUp className="icon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-items">
        <h3>Notification</h3>
        <div className="item">
          <ul>
            <li className="list-item">
              <Email className="icon" />
              Mail
            </li>
            <li className="list-item">
              <Feedback className="icon"/>
              Feedback
            </li>
            <li className="list-item">
              <Forum className="icon"/>
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-items">
        <h3>Staff</h3>
        <div className="item">
          <ul>
            <li className="list-item">
              <ManageAccounts className="icon" />
              Manage
            </li>
            <li className="list-item">
              <Timeline className="icon"/>
              Analitics
            </li>
            <li className="list-item">
              <Report className="icon"/>
              Report
            </li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;
