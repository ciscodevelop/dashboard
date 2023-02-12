import {
  DateRange,
  EditLocation,
  Email,
  FileUpload,
  Person,
  PhoneAndroid,
} from "@mui/icons-material";
import "./user.scss";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const userId: any = useParams();
  console.log(userId);

  return (
    <div className="user">
      <div className="header-title-button">
        <h1>Edit User</h1>
        <Link to={'/newUser'}>
        <button>Create</button>
        </Link>
      </div>
      <div className="container">
        <div className="left">
          <div className="info-user">
            <img
              src="https://images.freeimages.com/images/large-previews/b72/hush-1245708.jpg"
              alt=""
            />
            <div className="info-name">
              <h4>Anna Becker</h4>
              <h5>Software Engineer</h5>
            </div>
          </div>
          <div className="info account">
            <h4>Account Details</h4>
            <span>
              <Person /> <span>Annabeck99</span>
            </span>
            <span>
              <DateRange /> <span>10.12.1999</span>
            </span>
          </div>
          <div className="info details">
            <h4>Contact Details</h4>
            <span>
              <PhoneAndroid /> <span>+1 123 546 55</span>
            </span>
            <span>
              <Email /> <span>annabeck@gmail.com</span>
            </span>
            <span>
              <EditLocation /> <span>New York | USA</span>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="edit-left">
            <h2>Edit</h2>
            <div className="inputs">
              <div className="item">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" />
              </div>
              <div className="item">
                <label>Full Name</label>
                <input type="text" placeholder="Anna Beck" />
              </div>
              <div className="item">
                <label>Email</label>
                <input type="Email" placeholder="annabeck99@gmail.com" />
              </div>
              <div className="item">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 546 55" />
              </div>
              <div className="item">
                <label>Address</label>
                <input type="text" placeholder="New York | USA" />
              </div>
               
            </div>
          </div>
          <div className="upload-rigt">
            <div className="img-upload">
              <img src="https://images.freeimages.com/images/large-previews/b72/hush-1245708.jpg" alt="" />
            
              <label htmlFor="file">  <FileUpload  className="upload-icon"/></label>
              <input type="file"  id="file" style={{display:'none'}}/>
            </div>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
