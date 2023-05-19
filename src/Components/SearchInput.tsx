import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Input } from "antd";
const { Search } = Input;
type Props = {};

const SearchInput = (props: Props) => {
  //   const dispatch = useDispatch();
  //   const tabitems = useSelector((state: any) => state.ProductSlice.productData);
  //   useEffect(() => {
  //     dispatch<any>(fetchProductData());
  //   }, []);

  //   const [filter, setFilter] = useState("");
  //   const searchItem = useMemo(() => {
  //     return tabitems.filter((item: any) => {
  //       return item.ProductName.toLowerCase().includes(filter.toLowerCase());
  //     });
  //   }, [tabitems, filter]);

  //   const handeleSearch = (e: any) => {
  //     setFilter(e.target.value);
  //   };
  // const handleSearch = () => {
  //   if (search === "") {
  //     setDatas(data);
  //   } else {
  //     const filteredData = data.filter((course) => {
  //       return course.coursename.toLowerCase().includes(search.toLowerCase());
  //     });
  //     return setDatas(filteredData);
  //   }
  // };
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
        //   value={filter}
        //   onChange={handeleSearch}
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
