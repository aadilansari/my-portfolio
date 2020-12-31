import { makeStyles } from "@material-ui/core";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useHomeStyle = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "70%",
  },
  mainText:{
    width:'30%'
  }
});

const HomePage = () => {
  const classes = useHomeStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.mainText}>
          Hello, I’m Aadil Ansari and I <FavoriteIcon color='secondary' style={{ fontSize: 30 }}/> to build applications
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
