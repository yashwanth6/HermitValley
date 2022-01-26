import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";

const NotFound = () => {
  const reload = () =>{
    window.location.reload(false);
  }
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>If Page doesn't load click this</Typography>
      <button onClick={reload}>Reload</button>
    </div>
  );
};

export default NotFound;
