import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import React, { ReactFragment, ReactElement } from "react";

import { Props } from "./types";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    border: "1px solid dark-gray",
    width: "100%",
    height: "90vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chatbox = ({ flow }: Props): ReactElement<ReactFragment> => {
  const classes = useStyles();
  const leftAlignedMessageStyles = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid gray",
    boxShadow: "1px 1px 0 gray",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
  };
  const rightAlignedMessageStyles = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid gray",
    boxShadow: "1px 1px 0 gray",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
  };

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
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
                container
              >
                <Grid item xs={12}>
                  <ListItemText
                    style={rightAlignedMessageStyles}
                    primary="Chatbot logging in"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={rightAlignedMessageStyles}
                    secondary="09:30"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                container
              >
                <Grid item xs={12}>
                  <ListItemText
                    style={leftAlignedMessageStyles}
                    primary="Persisting selection"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    style={rightAlignedMessageStyles}
                    secondary="09:31"
                  />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
                container
              >
                <Grid item xs={3}>
                  <ListItemText
                    style={rightAlignedMessageStyles}
                    primary="Next option after selection"
                  ></ListItemText>
                </Grid>
                <Grid item xs={1}>
                  <ListItemText
                    style={rightAlignedMessageStyles}
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
