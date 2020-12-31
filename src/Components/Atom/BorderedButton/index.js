import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useButtonStyle = makeStyles({
    label:{
      color:'#212121'
    }
})

const BorderedButton = (props) => {
  const classes = useButtonStyle()
  return <Button className={classes.label} color="inherit" onClick={props.onClick}>{props.label}</Button>;
};

export default BorderedButton;
