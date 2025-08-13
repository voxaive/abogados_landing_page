import React from "react";
import './Box_val.css'
import { Rate } from 'antd';

interface ValS {
  name: string;
  imgIcon?: string;
  opinion: string;
  starNumber: number;
}
interface Box_Vals {
  Val: ValS;
}

const Box_val: React.FC<Box_Vals> = ({ Val }) => {

  return (
    <div className="box-card-Val">
      <img src={Val?.imgIcon} alt={Val?.name} />
      <h3>{Val?.name}</h3>
      <p>{Val?.opinion}</p>
      <Rate allowHalf disabled defaultValue={Val.starNumber} />
    </div>
  );

};


export default Box_val;