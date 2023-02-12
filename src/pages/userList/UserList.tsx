import { DeleteOutlined, Edit } from "@mui/icons-material";
import "./userList.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import { rowsUser } from "../../dummydata";
import { Link } from "react-router-dom";
const UserList = () => {
  const [data, setData] = useState(rowsUser);

  const handleDelete = (id: number) => {
    setData(data.filter((d: any) => d.id !== id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width:50 },
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
      field: "firstName",
      headerName: "First name",
      width: 130,
      headerAlign: "center",
      align: "center"
    },

    { field: "lastName", headerName: "Last name", width: 130 , headerAlign: "center",    align: "center",},

    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerAlign: "center",
      align: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    }, { field: "email", headerName: "Email", width: 200 , headerAlign: "center",    align: "center",},
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
            <Link to={'/user/'+params.row.id}>
            <Edit  className="icon-edit"/>
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
    <div className="userList">
      <div className="titleContainer">
        <h1>Users</h1>
        <Link to={"/newUser"}>
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

export default UserList;
