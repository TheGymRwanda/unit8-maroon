import React from "react";

export default function Wrapper({ children, styles }) {
  return (
    <div
      className={`px-5   ipad:px-2.25  tablet:px-2.25  desktop:mx-auto desktop:w-83 desktop:px-0 ${styles}`}
    >
      {children}
    </div>
  );
}
