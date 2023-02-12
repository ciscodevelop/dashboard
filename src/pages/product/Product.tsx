import { Link } from "react-router-dom";
import "./product.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="titleContainer">
        <h1>Product</h1>
        <Link to={"/newProduct"}>
          <button className="createBtn">Create</button>
        </Link>
      </div>
      <div className="top">
        <div className="topLeft">
          <Chart
            data={productData}
            datakey="sales"
            title="Sale Perfomance"
            grid={false}
          />
        </div>
        <div className="topRight">
          <div className="infoTop">
            <div className="infoImage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64XrhRwI67lrzBMp9c4-wlH2xMFW2x-k7uA&usqp=CAU"
                alt=""
              />
              <span> Appale Whatch</span>
            </div>
          </div>
          <div className="infoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">234</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">sales:</span>
              <span className="infoValue">2343</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">active:</span>
              <span className="infoValue">Yes</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">in Stock:</span>
              <span className="infoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form className="productForm">
          <div className="productFormLeft">
            
          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="Apple Watch" />
          <label htmlFor="">In Stock</label>
          <select name="inStock" id="inStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
          <div className="productFormRight">
            <div className="upLoad">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64XrhRwI67lrzBMp9c4-wlH2xMFW2x-k7uA&usqp=CAU" alt="" />
              <label htmlFor="file">
                <Publish className="icon"/>
                <input type="file" id="file" style={{display:'none'}} />
            </label>
            </div>
            <button type="button">Update</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Product;
