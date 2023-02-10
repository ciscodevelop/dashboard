import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredinfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featuredinfo">
      <div className="wrapper">
        <div className="info-items">
          <div className="item">
            <h1>Revanue</h1>
            <div className="item-stats">
              <h2>$2,415</h2>
              <span>
                <h4>
                  -11.4
                  <ArrowDownward className="icon" />
                </h4>
              </span>
            </div>
            <h3>Compared to last month</h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="info-items">
          <div className="item">
            <h1>Revanue</h1>
            <div className="item-stats">
              <h2>$2,415</h2>
              <span>
                <h4>
                  -11.4
                  <ArrowDownward className="icon" />
                </h4>
              </span>
            </div>
            <h3>Compared to last month</h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="info-items">
          <div className="item">
            <h1>Revanue</h1>
            <div className="item-stats">
              <h2>$2,415</h2>
              <span>
                <h4>
                  -11.4
                  <ArrowUpward className="icon arrowUp" />
                </h4>
              </span>
            </div>
            <h3>Compared to last month</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
