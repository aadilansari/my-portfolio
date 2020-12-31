import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useButtonStyle = makeStyles({
    label:{
        color:'#212121',
        border:'2px solid #212121',
        borderRadius:20
    }
})

const OutlinedButton = (props) => {
    const classes = useButtonStyle()
  return <Button className={classes.label} variant='outlined' onClick={props.onClick}>{props.label}</Button>;
};

export default OutlinedButton;
