import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import QuantityBtn from "./QuantityBtn";
import { useSelector } from "react-redux";

const CartTable = () => {
  const [rowId, setRowId] = React.useState<number>(0);
  const cartData = useSelector((state: any) => state.CartSlice.cart);
  const counterValue = useSelector((state: any) => state.CartSlice.counter);
  const columns: GridColDef[] = [
    // { field: "market_cap_rank", headerName: "ID", width: 10 },
    {
      field: "image",
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
      headerAlign: "center",
      align: "center",
      valueGetter: (params: any) =>
        rowId !== 0 && rowId === params.id
          ? `${params.row.current_price} X ${counterValue}`
          : `${params.row.current_price} X 1 `,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => {
        return <QuantityBtn setRowId={setRowId} id={params.id} />;
      },
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
        rows={cartData ? cartData : []}
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
    </div>
  );
};

export default CartTable;
