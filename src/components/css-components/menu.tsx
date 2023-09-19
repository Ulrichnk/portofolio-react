import React, { CSSProperties, FunctionComponent, useRef, useState } from "react";
import "./menu.scss";
import { styled } from "styled-components";

type Props = {
  //define your props here
  children: React.ReactNode[];
  className?: string;
  style?:CSSProperties;
  title: String;
};
const Dropdown=styled.div`

`;


const DropdownMenu: FunctionComponent<Props> = ({
  children,
  title,
  className,
  style,
}) => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const img: React.RefObject<HTMLImageElement> = useRef(null);
  const blocLinks: React.RefObject<HTMLImageElement> = useRef(null);
  const mappedChildren = React.Children.map(children, (child, index) => (
    <li
      key={index}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {child}
    </li>
  ));

  const handleClick = (e: any) => {
    e.preventDefault();
    if (!toggle && img.current && blocLinks.current) {
      blocLinks.current.style.height = `${blocLinks.current.scrollHeight}px`;
      setToggle(!toggle);
      img.current.src = "images/closed-chevron.svg";
      return;
    }
    if (img.current && blocLinks.current) {
      setToggle(!toggle);
      img.current.src = "images/chevron.svg";
      blocLinks.current.style.height = "0px";
      return;
    }
  };

  return (
    <div className={`dropdown ${className}`} style={style}>
      <button
        className="btn-top"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <span>{title}</span>
        <img
          ref={img}
          className="dropdown-img"
          src="images/chevron.svg"
          alt="croix"
        />
      </button>
      <div ref={blocLinks} className="bloc-links">
        <ul>{mappedChildren}</ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
