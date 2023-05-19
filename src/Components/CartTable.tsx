import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
// import { AddOutlinedIcon } from "@mui/icons-material";
import { DataGridLogics } from "../Utils/DataGridLogics";
import QuantityBtn from "./QuantityBtn";
type Props = {};

const CartTable = (props: Props) => {
  const theme = useTheme();
  const columns: GridColDef[] = [
    // { field: "market_cap_rank", headerName: "ID", width: 10 },
    {
      field: "Image",
      headerName: "Coin Image",
      type: "image",
      headerAlign: "left",
      align: "left",
      width: 130,
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
      width: 90,
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
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      editable: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <QuantityBtn />;
      },
    },
  ];
  const datas = [
    {
      Image: "",
      Symbol: 11,
      current_price: 20,
      market_cap: 22,
      price_change_percentage_24h: 20,
    },
    {
      Image: "",
      Symbol: 11,
      current_price: 20,
      market_cap: 2,
      price_change_percentage_24h: -20,
    },
    {
      Image: "",
      Symbol: 11,
      current_price: 20,
      market_cap: 22,
      price_change_percentage_24h: 20,
    },
    {
      Image: "",
      Symbol: 11,
      current_price: 20,
      market_cap: 2,
      price_change_percentage_24h: -20,
    },
  ];
  return (
    <div>
      {" "}
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
        rows={datas ? datas : []}
        //   rows={data ? data : []}
        columns={columns}
        getRowId={(row: any) => row.market_cap}
        //   getRowId={(row: any) => row.market_cap_rank}
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
    </div>
  );
};

export default CartTable;
