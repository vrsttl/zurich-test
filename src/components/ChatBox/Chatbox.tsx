import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import React, { ReactFragment, ReactElement, useState, useEffect } from "react";

import { InteractionOptionType, InteractionType } from "../../types";

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
    console.log("flow", flow);
    console.log("nextId", nextId);
    const nextItem = flow?.find((el: InteractionType) => el.id === nextId);
    nextItem &&
      setItemsToDisplay((prev: InteractionType[]) => [...prev, nextItem]);
  }, [nextId, flow]);

  useEffect(() => {
    console.log("itemsToDisplay", itemsToDisplay);
  }, [itemsToDisplay]);

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
            <ListItem key="1">
              <Grid className={classes.rightAlignedGrid} container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.messageStyles}
                    primary="Chatbot logging in"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.messageStyles}
                    secondary="09:30"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid className={classes.leftAlignedGrid} container>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.messageStyles}
                    primary="Persisting selection"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    className={classes.messageStyles}
                    secondary="09:31"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid className={classes.rightAlignedGrid} container>
                <Grid item xs={3}>
                  <ListItemText
                    className={classes.messageStyles}
                    primary="Next option after selection"
                  ></ListItemText>
                </Grid>
                <Grid item xs={1}>
                  <ListItemText
                    className={classes.messageStyles}
                    secondary="10:30"
                  />
                </Grid>
              </Grid>
            </ListItem>
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
