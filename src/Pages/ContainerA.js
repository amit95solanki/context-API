import React, { useContext } from "react";
import { DataContext } from "../Contextapi";
import ContainerB from "./ContainerB";

const ContainerA = () => {
  const { setData } = useContext(DataContext);
  function nameChange() {
    setData("context data compontent A");
  }

  return (
    <>
      <h2>Component A</h2>
      <button onClick={() => nameChange()}>UPDATE</button>
      <ContainerB />
    </>
  );
};

export default ContainerA;
