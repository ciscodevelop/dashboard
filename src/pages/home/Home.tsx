import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.scss";
import { usersData } from "../../dummydata";
import WidgetSm from "../../components/widget/widgetSm/WidgetSm";
import WidgetLg from "../../components/widget/widgetLg/WidgetLg";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title={"Users Analitics"}
        datakey={"ActiveUser"}
        data={usersData}
        grid={true}
          />
          <div className="widgets">
              <WidgetSm />
              <WidgetLg/>
          </div>
    </div>
  );
};

export default Home;
