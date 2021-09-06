import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import React from "react";

import { Props } from "./types";
import { useStyles } from "../ChatBox/styles";

export default ({ key, text, align, time, buttonOptions, handleSelection }: Props) => {
  const classes = useStyles();
  return (
    <ListItem key={key}>
      <Grid
        className={align === "end" ? classes.rightAlignedGrid : classes.leftAlignedGrid}
        container
      >
        <Grid item xs={12}>
          <ListItemText
            className={classes.messageStyles}
            primary={text}
          />
        </Grid>
        <Grid item xs={12}>
        {
        buttonOptions.map(({ nextId, text }, index) => (
          <Button
            variant="contained"
            color={index ? "primary" : "default"}
            onClick={() => handleSelection(nextId)}
          >
            {text}
          </Button>
          )
        )}  
        </Grid>
        <Grid item xs={12}>
          <ListItemText
            className={classes.messageStyles}
            secondary={time}
          />
        </Grid>
      </Grid>
    </ListItem>
  )
};
