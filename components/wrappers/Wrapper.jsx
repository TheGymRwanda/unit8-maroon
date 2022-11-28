import React from "react";

export default function Wrapper({ children, styles }) {
  return (
    <div
      className={`px-5 pl-1.2813  pb-24 ipad:pl-2.25 ipad:pb-10 ipad:pr-2.4375 tablet:px-3.85 desktop-sm:pb-5 desktop:mx-auto desktop:w-83 desktop:px-0 ${styles}`}
    >
      {children}
    </div>
  );
}
