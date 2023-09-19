import React, {
  CSSProperties,
  FunctionComponent,
  useRef,
  useState,
} from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

type Props = {
  //define your props here
  children?: React.ReactNode[];
  className?: string;
  style?: CSSProperties;
  title?: String;
};

const NaVBar: FunctionComponent<Props> = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const img: React.RefObject<HTMLImageElement> = useRef(null);
  const blocLinks: React.RefObject<HTMLImageElement> = useRef(null);

  const handle = (e: any) => {
    if (blocLinks.current) {
      blocLinks.current.style.display = "none";
      

    }

    e.preventDefault();
    console.log(blocLinks.current?.style.height);

    if (!toggle && img.current && blocLinks.current) {
      blocLinks.current.style.height = "200px";
      setToggle(!toggle);
      return;
    }
    if (img.current && blocLinks.current) {
      setToggle(!toggle);
      blocLinks.current.style.height = "0px";
      return;
    }
  };
  return (
    <div className="nav" ref={blocLinks}>
      <div
        onClick={(e) => {
          handle(e);
        }}
      >
        {" "}
        <button className="f">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      
        <ul>
          <li>
            <NavLink to="/" className="n">
              Home
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/" className="n">
              Cv
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to="/" className="n">
              Contact
            </NavLink>
          </li>{" "}
        </ul>
      
    </div>
  );
};

export default NaVBar;
