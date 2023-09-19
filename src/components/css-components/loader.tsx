import React, { FunctionComponent } from "react";
import './loader.scss';

type Props = {
  //define your props here
  className: string;
};

const Loader: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={` loader ${className}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000"
        width="100px"
        height="100px"
      >
        <circle
          cx="100"
          cy="100"
          r="40"
        />
      </svg>
    </div>
  );
};

export default Loader;
