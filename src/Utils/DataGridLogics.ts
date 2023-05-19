import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartData, filterDatas } from "../Redux/CartSlice";

export const DataGridLogics = () => {
  const [data, setData] = React.useState<any>([]);
  const [search, setSearch] = React.useState<any>();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        )
        .then((res: any) => {
          setData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const handleAdd = (params: any) => {
    dispatch<any>(cartData<any>(params));
  };
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredList = React.useMemo(() => {
    let filtered = data.filter(
      (coins: any) =>
        coins.name.toLowerCase().includes(search.toLowerCase()) ||
        coins.symbol.toLowerCase().includes(search.toLowerCase())
    );
    return filtered;
  }, [search, data]);

  React.useEffect(() => {
    dispatch<any>(filterDatas<any>(filteredList));
  }, [filteredList]);

  return {
    data,
    handleAdd,
    search,
    handleSearch,
  };
};
