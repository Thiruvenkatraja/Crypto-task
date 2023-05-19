import React from 'react';
import axios from 'axios';

export const DataGridLogics = () =>{
    const [data, setData] = React.useState<any>();
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
  
//   console.log(data);
  return{
    data
  }
  
}