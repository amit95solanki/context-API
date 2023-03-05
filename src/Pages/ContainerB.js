import React, { useContext } from "react";
import { DataContext } from "../Contextapi";

const ContainerB = () => {
  const { data, setData } = useContext(DataContext);
  return (
    <>
      <hr />
      <h4>component B</h4>
      <h4>{data}</h4>
      <hr />
    </>
  );
};

export default ContainerB;
