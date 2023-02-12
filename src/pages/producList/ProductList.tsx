import { DeleteOutlined, Edit } from "@mui/icons-material";
import "./productList.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import { rowsProduct } from "../../dummydata";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [data, setData] = useState(rowsProduct);

  const handleDelete = (id: number) => {
    setData(data.filter((d: any) => d.id !== id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "img",
      headerName: "Image",
      width: 80,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <img className="imgPic" src={params.row.img} alt=""></img>;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "Actions Edit and Delete",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <Edit className="icon-edit" />
            </Link>
            <DeleteOutlined
              className="icon-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
        <div className="titleContainer">
        <h1>Products</h1>
        <Link to={"/newProduct"}>
          <button className="createBtn">Create</button>
        </Link>
      </div>
      <div className="dataGrid-container">
        <DataGrid
          className="dataGrid"
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ProductList;
