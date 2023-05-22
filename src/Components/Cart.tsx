import Box from "@mui/material/Box";
import CartTable from "./CartTable";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";

const Cart = () => {
    const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <Box
        sx={{
          background: "#ffffff",
          borderRadius: "12px",
          //   width: "30%",
          padding: "2rem 5rem 5rem 5rem",
        }}
      >
        <h1>Cart</h1>
        <CartTable />
        <Button
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
          //   startIcon={<AddOutlinedIcon />}
        >
          Buy
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
