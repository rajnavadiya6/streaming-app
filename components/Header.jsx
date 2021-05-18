import React from "react";
import { Toolbar, InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "90%",
    marginLeft: theme.spacing(3),
    color: "white",
    fontSize: "30px",
    // [theme.breakpoints.between("sm")]: {
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
}));

const Header = ({ SearchMovie, search, setsearch }) => {
  const classes = useStyles();
  return (
    <Toolbar>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ color: "#FFFFFF" }} />
        </div>
        <InputBase
          placeholder="Search…"
          fullWidth
          onKeyDown={(e) => e.keyCode == 13 && SearchMovie(search)}
          onChange={(e) => setsearch(e.target.value)}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Toolbar>
  );
};

export default Header;
