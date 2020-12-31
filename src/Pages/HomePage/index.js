import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import computer_guy from "../../assets/computer_guy.png";

const useHomeStyle = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    marginTop: 70,
  },
  container: {
    width: "70%",
  },
  mainText: {
    // width: "35%",
  },
});

const HomePage = () => {
  const classes = useHomeStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid md={6} xs={12} >
            <h1 className={classes.mainText}>
              Hello, I’m Aadil Ansari
              <br /> and I{" "}
              <FavoriteIcon color="secondary" style={{ fontSize: 30 }} /> to
              build applications
            </h1>
          </Grid>
          <Grid md={6} xs={12} >
            <img src={computer_guy} alt="computer_guy" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
