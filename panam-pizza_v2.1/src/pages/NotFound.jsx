import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <center>Error 404</center>
      <Link to={"/"}>
        <div className="btnw btn_bg_none">
          <p>Вернуться назад</p>
        </div>
      </Link>
    </>
  );
};

export default NotFound;
