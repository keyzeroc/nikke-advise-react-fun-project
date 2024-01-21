import React from "react";
import wallpaper from "../../img/bg/bg3_gaussian_6.png";

export default function Background(props) {
  return (
    <div
      className="min-h-[100svh] bg-no-repeat bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {props.children}
    </div>
  );
}
