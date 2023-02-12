import "./newUser.scss";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1>New User</h1>
      <div className="container">
        <form className="form-inputs">
          <div className="input-item">
            <label  htmlFor="">Username</label>
            <input type="text" placeholder="annabeck99"/>
          </div>
          <div className="input-item">
            <label  htmlFor="">Full Name</label>
            <input type="text" placeholder="Anna Beck"/>
          </div>
          <div className="input-item">
            <label  htmlFor="">Email</label>
            <input type="text" placeholder="annabeck@gmail.com"/>
          </div>
          <div className="input-item">
            <label  htmlFor="">Password</label>
            <input type="password" placeholder="password"/>
          </div>
          <div className="input-item">
            <label  htmlFor="">Phone</label>
            <input type="text" placeholder="+1 123 546 55"/>
          </div>
          <div className="input-item">
            <label  htmlFor="">Address</label>
            <input type="text" placeholder="New York | USA"/>
          </div>
          <div className="input-item">
            <label>Gender</label>
            <div className="item-gender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="input-item">
            <label>Active</label>
            <select name="active" id="active" className="select-item">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="button">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
