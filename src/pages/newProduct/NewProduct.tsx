import './newProduct.scss'

const newProduct = () => {
  return (
    <div className="newProduct">
    <h1>New Product</h1>
    <div className="container">
      <form className="form-inputs">
        <div className="input-item">
          <label  htmlFor="">Image</label>
          <input type="file" />
        </div>
        <div className="input-item">
          <label  htmlFor="">Name</label>
          <input type="text" placeholder="Apple Watch"/>
        </div>
        <div className="input-item">
          <label  htmlFor="">Stock</label>
          <input type="text" placeholder="245"/>
        </div>
        
        <div className="input-item">
          <label>Active</label>
          <select name="active" id="active" className="select-item">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type='button'>Create</button>
      </form>
    </div>
  </div>
  )
}

export default newProduct