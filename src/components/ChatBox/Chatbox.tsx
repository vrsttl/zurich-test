import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import React, { ReactFragment, ReactElement, useState, useEffect } from "react";

import { InteractionType } from "../../types";

import ListItemComponent from "../ListItem";

import { useStyles } from "./styles";

import { Props } from "./types";

const Chatbox = ({ flow }: Props): ReactElement<ReactFragment> => {
  const [nextId, setNextId] = useState<number | false>(100);
  const [itemsToDisplay, setItemsToDisplay] = useState<InteractionType[]>([]);
  const classes = useStyles();

  const handleSelection = (selection: number | false) => {
    setNextId(selection);
  };

  useEffect(() => {
    const nextItem = flow?.find((el: InteractionType) => el.id === nextId);
    nextItem &&
      setItemsToDisplay((prev: InteractionType[]) => [...prev, nextItem]);
  }, [nextId, flow]);

  return flow ? (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Unser Chatbot hilft Ihnen mit der Auswahl Ihrer Versicherung:
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {itemsToDisplay.map(({ id, text, valueOptions }) => (
              <ListItemComponent
                key={id}
                text={text}
                buttonOptions={valueOptions}
                handleSelection={handleSelection}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  ) : (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      component={Paper}
      className={classes.chatSection}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Chatbox;
