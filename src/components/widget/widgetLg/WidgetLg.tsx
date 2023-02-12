import "./widgetlg.scss";
const profilePic = require("../../../asset/ciscoImage.jpeg");
const WidgetLg = () => {
  const Button = ({ type }: any) => {
    return <button className={"widgetButton " + type}> {type}</button>;
  };
  return (
    <div className="widgetsm">
      <h1>Latest Transactions</h1>
      <div className="wrapperTable">
        <table>
          <thead>
            <tr className="tr-field">
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="info-profile">
                <img src={profilePic} alt="" />
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2023</td>
              <td>$122.00</td>
              <td>
                <Button type={"Approved"} />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="info-profile">
                <img src={profilePic} alt="" />
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2023</td>
              <td>$122.00</td>
              <td>
                <Button type={"Declined"} />{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="info-profile">
                <img src={profilePic} alt="" />
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2023</td>
              <td>$122.00</td>
              <td>
                <Button type={"Pending"} />{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="info-profile">
                <img src={profilePic} alt="" />
                <span>Susan Carol</span>
              </td>
              <td>2 Jun 2023</td>
              <td>$122.00</td>
              <td>
                <Button type={"Approved"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WidgetLg;
