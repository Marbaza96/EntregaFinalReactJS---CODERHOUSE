import React from "react";
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div>
      <img src="https://i.postimg.cc/7hPw9xtR/Error404-en-1920x1080.png" alt="Error 404" style={{ display: "block", margin: "0 auto" }} />
      <Link className="btn btn-dark" to="/">Volver a la pagina principal</Link>
    </div>
  );
};

export default Error;