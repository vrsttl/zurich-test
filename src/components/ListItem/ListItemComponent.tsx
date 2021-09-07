import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";

import React, { useState } from "react";

import { useStyles } from "../ChatBox/styles";
import { Props } from "./types";

export default ({
  text,
  buttonOptions,
  handleSelection,
}: Props): React.ReactElement<HTMLLIElement> => {
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
    <ListItem>
      <Grid container>
        <Slide in direction="right">
          <Grid item xs={3}>
            <ListItemText className={classes.messageStyles} primary={text} />
          </Grid>
        </Slide>
        <Grid
          container
          direction="row-reverse"
          className={
            selected ? classes.rightAlignedGrid : classes.leftAlignedGrid
          }
          item
          xs={12}
        >
          {buttonOptions.map(
            ({ nextId, text }, index) =>
              (!selected || selected === text) && (
                <Slide in direction="left">
                  <Button
                    key={String(`${nextId}-${Math.random()}`)}
                    variant="contained"
                    color={persistSelectionDisplay(index)}
                    onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      e.preventDefault();
                      !Boolean(selected)
                        ? clickHandler(nextId, text)
                        : () => null;
                    }}
                    style={{
                      cursor: !Boolean(selected) ? "pointer" : "initial",
                    }}
                  >
                    {text}
                  </Button>
                </Slide>
              )
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};
