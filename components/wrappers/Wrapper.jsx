import React from "react";

export default function Wrapper({ children, styles }) {
  return (
    <section className="flex justify-center ]">
        <div
        className={`max-w-90 w-10.5/12 tablet:w-11.8/12 desktop:w-11.5/12   ${styles}`}
      >
        {children}
      </div>
    </section>
  );
}
