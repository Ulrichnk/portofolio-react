import React, {
  CSSProperties,
  FunctionComponent,
  useRef,
  useState,
} from "react";
import "./nav.scss";

type Props = {
  //define your props here
  children?: React.ReactNode[];
  className?: string;
  style?: CSSProperties;
  title?: String;
};

const NaVBar: FunctionComponent<Props> = () => {
  const [hrefggle, sethrefggle] = useState<Boolean>(false);
  const img: React.RefObject<HTMLImageElement> = useRef(null);
  const blocLinks: React.RefObject<HTMLImageElement> = useRef(null);

  const handle = (e: any) => {
    if (blocLinks.current) {
      blocLinks.current.style.display = "none";
    }

    e.preventDefault();
    console.log(blocLinks.current?.style.height);

    if (!hrefggle && img.current && blocLinks.current) {
      blocLinks.current.style.height = "200px";
      sethrefggle(!hrefggle);
      return;
    }
    if (img.current && blocLinks.current) {
      sethrefggle(!hrefggle);
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
          <a href="/" className="n">
            Home
          </a>
        </li>{" "}
        <li>
          <a href="/" className="n">
            Cv
          </a>
        </li>{" "}
        <li>
          <a href="/" className="n">
            Contact
          </a>
        </li>{" "}
      </ul>
    </div>
  );
};

export default NaVBar;
