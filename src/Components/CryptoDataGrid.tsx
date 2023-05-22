import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import {Link} from "react-router-dom";
import { DataGridLogics } from "../Utils/DataGridLogics";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";


const CryptoDataGrid = () => {
  const { handleAdd } = DataGridLogics();
  const data = useSelector((state:any)=>state.CartSlice.filteredData)
  const theme = useTheme();
  const columns: GridColDef[] = [
    // { field: "market_cap_rank", headerName: "ID", width: 10 },
    {
      field: "Image",
      headerName: "Coin Image",
      type: "image",
      headerAlign: "left",
      align: "left",
      width: 180,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textAlign: "left",
            }}
          >
            <img style={{ height: 30, width: 30 }} src={params.row.image} />
            <p style={{ textTransform: "uppercase" }}>{params.row.name}</p>
          </div>
        );
      },
    },
    {
      field: "symbol",
      headerName: "Coin-Symbol",
      width: 100,
      editable: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <p style={{ textTransform: "uppercase" }}>{params.row.symbol}</p>
        );
      },
    },
    {
      field: "current_price",
      headerName: "Price",
      type: "number",
      width: 150,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "market_cap",
      headerName: "Current Market",
      type: "number",
      width: 230,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price_change_percentage_24h",
      headerName: "Price Change Percentage",
      type: "number",
      width: 200,
      editable: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        const value = params.value;
        return (
          <h4
            style={{
              color: value > 1 ? "green" : "red",
            }}
          >
            {value}
          </h4>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      filterable: true,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <Button
        component={Link}
        to={"/cart"}
          sx={{
            height: "31px",
            // width: "88px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              scale: "1.1",
            },
            transition: ".5s",
            boxShadow: `0.5px 1.5px 9px 1px rgba(0,0,0,0.2)`,
            // margin: "12px",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontSize: "12px",
            textTransform: "none",
            color: theme.palette.info.main,
            backgroundColor: theme.palette.secondary.main,
          }}
          onClick={()=>handleAdd(params.row)}
        >
          ADD
        </Button>
      ),
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          background: "#ffffff",
          width: "80%",
          margin: "1rem",
          padding: "2rem 5rem 5rem 5rem",
        }}
      >
        <SearchInput />
        <DataGrid
          sx={{
            border: "none",
            "& .MuiDataGrid-cell": {
              borderBottom: 2,
            },
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
              //   borderBottom: 5,
            },
          }}
            rows={data ? data : []}
          columns={columns}
            getRowId={(row: any) => row.market_cap_rank}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection={false}
          disableRowSelectionOnClick
          rowHeight={60}
        />
      </Box>
    </div>
  );
};

export default CryptoDataGrid;
