import React from "react";
import styles from "./Preview.module.scss";

interface Props {
  src: string;
  altAttr: string;
}

export const Preview: React.FC<Props> = ({ src, altAttr }) => {
  return (
    <div className={styles.root}>
      {src ? (
        <img className={styles.image} src={src} alt={altAttr} />
      ) : (
        <svg viewBox="0 0 71 41" version="1.1">
          <defs>
            <rect
              id="path-1"
              x="460"
              y="332"
              width="71"
              height="41"
              rx="4"
            ></rect>
            <mask
              id="mask-2"
              maskContentUnits="userSpaceOnUse"
              maskUnits="objectBoundingBox"
              x="0"
              y="0"
              width="71"
              height="41"
              fill="white"
            ></mask>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Desktop-Copy"
              transform="translate(-460.000000, -332.000000)"
            >
              <circle
                id="Oval-Copy-4"
                fill="#D8D8D8"
                cx="479"
                cy="348.05047"
                r="2"
              ></circle>
              <circle
                id="Oval-Copy-5"
                fill="#FFEFEF"
                cx="474"
                cy="359"
                r="5"
              ></circle>
              <circle
                id="Oval-Copy-6"
                fill="#FFEFEF"
                cx="519"
                cy="360"
                r="5"
              ></circle>
              <circle
                id="Oval-Copy-7"
                fill="#D8D8D8"
                cx="513"
                cy="347.854561"
                r="2"
              ></circle>

              <path
                d="M489.981887,359.330539 C489.981887,359.330539 494.341332,355.084731 501.26172,356.5"
                id="Path-Copy"
                stroke="#979797"
                stroke-width="2"
                stroke-linecap="round"
                transform="translate(495.621803, 357.770854) rotate(-345.000000) translate(-495.621803, -357.770854) "
              ></path>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};
