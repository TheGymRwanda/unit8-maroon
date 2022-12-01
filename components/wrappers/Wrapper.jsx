import React from "react";

export default function Wrapper({ children, styles }) {
  return (
    <section className="] flex justify-center">
      <div
        className={`w-10.5/12 max-w-90 md:w-11.5/12 lg:w-11.8/12 xl:w-11.6/12 ${styles}`}
      >
        {children}
      </div>
    </section>
  );
}
