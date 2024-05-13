import React from "react";

export default function Footer() {
  return (
    <div className=" flex container justify-center border-t shadow-md border-purple-500 md:justify-between mx-auto p-3 text-xs text-white/60">
      <div className="  hidden md:flex gap-3">
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div>
        <p>Code devX @2024. All rights reserved </p>
      </div>

      <div className=" hidden md:block">
        <p>Code with clarity, create with purpose.</p>
      </div>
    </div>
  );
}
