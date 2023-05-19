import { useEffect } from "react";
import { Button, Input } from "antd";

const QuantityBtn = ({}: any) => {
 

//   const handleIncrement = () => {
//     setCount(count + 1);
//     setRowId(id ? id : 0);
//   };

//   const handleDecrement = () => {
//     if (count !== 0) {
//       setCount(count - 1);
//       setRowId(id ? id : 0);
//     } else {
//       setCount(0);
//     }
//   };

  return (
      <div style={{
          display: "flex", gap: "0.5rem",alignItems:"center",justifyContent:"center"}}>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          borderRadius: "5px",
          width: "7rem",
          height: "2rem",
        }}
      >
        <Button
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px 0 0 5px",
            marginRight: "-1px",
            borderRight: "none",
            background: "none",
          }}
        //   onClick={handleDecrement}
        >
          -
        </Button>
        <Input
          name="count"
        //   value={count}
          min={0}
          max={10}
        //   onChange={(e) => setCount(e.target.value)}
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "0px",
            textAlign: "center",
            borderLeft: "none",
            borderRight: "none",
            outline: "none",
            background: "none",
          }}
        />

        <Button
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "0 5px 5px 0",
            marginLeft: "-1px",
            borderLeft: "none",
            background: "none",
          }}
        //   onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default QuantityBtn;
