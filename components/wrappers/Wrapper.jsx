import React from "react";

export default function Wrapper(children, styles) {
  return (
    <div
      className={`pl-1.2813 ipad:pl-2.25 pb-24 ipad:pb-10 desktop-sm:pb-5 ipad:pr-2.4375 desktop:w-83 desktop:mx-auto tablet:px-3.85 desktop:px-0 ${styles}`}
    >
     
      {children}
    </div>
  );
}
