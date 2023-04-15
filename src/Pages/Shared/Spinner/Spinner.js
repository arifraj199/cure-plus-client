import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="my-40 ">
      <HashLoader
        color="#36d7b7"
        size={80}
        cssOverride={{ width: "80%", margin: "0 auto" }}
      />
    </div>
  );
};

export default Spinner;
