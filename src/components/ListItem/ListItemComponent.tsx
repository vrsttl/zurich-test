import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import React, { useState } from "react";

import { useStyles } from "../ChatBox/styles";
import { Props } from "./types";

export default ({
  key,
  text,
  align,
  buttonOptions,
  handleSelection,
}: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState("");

  const clickHandler = (nextId: number | false, selection: string) => {
    handleSelection(nextId);
    setSelected(selection);
  };

  const persistSelectionDisplay = (index: number): "primary" | "default" => {
    if (!selected) {
      return !index ? "primary" : "default";
    }
    return "primary";
  };
  return (
    <ListItem key={key}>
      <Grid
        className={
          align === "end" ? classes.rightAlignedGrid : classes.leftAlignedGrid
        }
        container
      >
        <Grid item xs={12}>
          <ListItemText className={classes.messageStyles} primary={text} />
        </Grid>
        <Grid item xs={12}>
          {buttonOptions.map(
            ({ nextId, text }, index) =>
              (!selected || selected === text) && (
                <Button
                  key={String(`${nextId}-${Math.random()}`)}
                  variant="contained"
                  color={persistSelectionDisplay(index)}
                  onClick={(e: React.SyntheticEvent<any>) => {
                    e.stopPropagation();
                    e.preventDefault();
                    !Boolean(selected)
                      ? clickHandler(nextId, text)
                      : () => null;
                  }}
                  style={{ cursor: !Boolean(selected) ? "pointer" : "initial" }}
                >
                  {text}
                </Button>
              )
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};
