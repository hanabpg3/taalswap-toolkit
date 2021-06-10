import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" {...props}>
    <g id="그룹_851" data-name="그룹 851" transform="translate(-202 -148)">
      <g id="사각형_92" data-name="사각형 92" transform="translate(204 148)" fill="#fff" stroke="#00ab55" stroke-width="1">
        <rect width="11" height="13" rx="1" stroke="none"/>
        <rect x="0.5" y="0.5" width="10" height="12" rx="0.5" fill="none"/>
      </g>
      <g id="사각형_93" data-name="사각형 93" transform="translate(202 150)" fill="#fff" stroke="#00ab55" stroke-width="1">
        <rect width="11" height="13" rx="1" stroke="none"/>
        <rect x="0.5" y="0.5" width="10" height="12" rx="0.5" fill="none"/>
      </g>
      <line id="선_16" data-name="선 16" x2="6" transform="translate(204.5 153.5)" fill="none" stroke="#00ab55" stroke-width="1"/>
      <line id="선_17" data-name="선 17" x2="6" transform="translate(204.5 155.5)" fill="none" stroke="#00ab55" stroke-width="1"/>
    </g>
  </svg>
  
  );
};

export default Icon;
