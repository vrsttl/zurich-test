import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import React, { ReactFragment } from "react";

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

const Chatbox = (): React.ReactElement<ReactFragment> => {
  const classes = useStyles();
  const leftAlignedStyles = { display: "flex", justifyContent: "flex-start" };
  const rightAlignedStyles = { display: "flex", justifyContent: "flex-end" };

  return (
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
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={rightAlignedStyles}
                    primary="Chatbot logging in"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText style={rightAlignedStyles} secondary="09:30" />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={leftAlignedStyles}
                    primary="Persisting selection"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ListItemText style={rightAlignedStyles} secondary="09:31" />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    style={rightAlignedStyles}
                    primary="Next option after selection"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText style={rightAlignedStyles} secondary="10:30" />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Chatbox;
