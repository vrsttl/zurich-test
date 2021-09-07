import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";

import React, { useState } from "react";

import { useStyles } from "../ChatBox/styles";
import { Props } from "./types";

export default ({
  id,
  text,
  buttonOptions,
  handleSelection,
}: Props): React.ReactElement<HTMLLIElement> => {
  const classes = useStyles();
  const [selected, setSelected] = useState<string | number | boolean>("");

  const clickHandler = (
    currentId: number | false,
    nextId: number | false,
    selection: string | number | boolean
  ) => {
    handleSelection(currentId, nextId, selection);
    setSelected(selection);
  };

  const persistSelectionDisplay = (index: number): "primary" | "default" => {
    if (selected === "") {
      return !index ? "primary" : "default";
    }
    return "primary";
  };

  return (
    <ListItem>
      <Grid container>
        <Slide in direction="right">
          <Grid item xs={4}>
            <ListItemText className={classes.messageStyles} primary={text} />
          </Grid>
        </Slide>
        <Grid
          container
          direction="row-reverse"
          className={
            selected !== "" ? classes.rightAlignedGrid : classes.leftAlignedGrid
          }
          item
          xs={12}
        >
          {buttonOptions.map(
            ({ nextId, text: label, value }, index) =>
              (selected === "" || selected === value) && (
                <Slide
                  in
                  direction="left"
                  key={String(`${nextId}-${Math.random()}`)}
                >
                  <Button
                    variant="contained"
                    className={classes.buttonStyles}
                    color={persistSelectionDisplay(index)}
                    onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      e.preventDefault();
                      selected === ""
                        ? clickHandler(id, nextId, value)
                        : () => null;
                    }}
                    style={{
                      cursor: selected === "" ? "pointer" : "initial",
                    }}
                  >
                    {label}
                  </Button>
                </Slide>
              )
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};
