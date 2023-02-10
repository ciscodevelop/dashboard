import "./navbar.scss";
import { ArrowDropDownOutlined, NotificationsNone } from "@mui/icons-material";
const logo = require("../../asset/ciscoImage.jpeg");
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Cisco Dashbord</h1>
      </div>
      <div className="right">
        <div className="icons-container">
          <div className="notification">
            <NotificationsNone />
            <span>2</span>
          </div>
        </div>
        <div className="profilePic">
          <img src={logo} alt="" />
          <ArrowDropDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
