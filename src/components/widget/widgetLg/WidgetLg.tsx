import "./widgetlg.scss";
const profilePic = require("../../../asset/ciscoImage.jpeg");
const WidgetLg = () => {
  const Button = ({ type }: any) => {
    return <button className={"widgetButton " + type}> {type}</button>;
  };
  return (
    <div className="widgetsm">
      <h3>Latest Transactions</h3>
      <div className="wrapperTable">
        <table>
          <tr className="tr-field">
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
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
        </table>
      </div>
    </div>
  );
};

export default WidgetLg;
