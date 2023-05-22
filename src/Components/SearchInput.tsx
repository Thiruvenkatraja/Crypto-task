import { Grid } from "@mui/material";
import { Input } from "antd";
import { DataGridLogics } from "../Utils/DataGridLogics";


const SearchInput = () => {
const {search,handleSearch}=DataGridLogics();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="Search...."
          value={search}
          onChange={handleSearch}
        style={{
          border: "1px solid blue",
          width: "15rem",
          borderRadius: "8px",
          height: "2rem",
          margin: "0 .5rem 1rem .5rem",
        }}
      />
    </Grid>
  );
};

export default SearchInput;
