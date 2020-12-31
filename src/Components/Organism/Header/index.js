import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core";
import BorderedButton from "../../Atom/BorderedButton";
import OutlinedButton from "../../Atom/OutlinedButton";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color:'#212121'
    },
    appBar:{
      backgroundColor:'#eeeeee',
      borderShadow:'none'
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const history = useHistory()

  function handleClick(path) {
    history.push(path);
  }

  return (
    <AppBar elevation={0} position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} onClick={()=>{
            handleClick('/')
        }}>
          Aadil Ansari
        </Typography>
        <BorderedButton label={'Projects'} onClick={()=>{
            handleClick('/projects')
        }}/>
        <BorderedButton color="inherit" label='Blogs' onClick={()=>{
            handleClick('/blogs')
        }}/>
        <BorderedButton color="inherit" label='About' onClick={()=>{
            handleClick('/about')
        }}/>
        <OutlinedButton color="inherit" label='Get In Touch' onClick={()=>{
            handleClick('/contact')
        }}/>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
