import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

import React, { ReactFragment, ReactElement, useState, useEffect } from "react";

import ListItemComponent from "components/ListItem";

import { DBItemType, InteractionType } from "types";

import { PUT_RECORDS_URL } from "../../constants";

import { useStyles } from "./styles";

import { Props } from "./types";

const Chatbox = ({ flow }: Props): ReactElement<ReactFragment> => {
  const [nextId, setNextId] = useState<number | false>(100);
  const [itemsToDisplay, setItemsToDisplay] = useState<InteractionType[]>([]);
  const [selectionToSend, setSelectionToSend] = useState<DBItemType[]>([]);
  const [finalizedSelection, setFinalizedSelection] = useState<DBItemType[]>(
    []
  );
  const [isFlowFinished, setIsFlowFinished] = useState(false);
  const classes = useStyles();

  const handleSelection = (
    currentId: number | false,
    nextId: number | false,
    value: string | number | boolean
  ) => {
    const currentIdData = flow?.find(
      (el: InteractionType) => el.id === currentId
    );
    if (currentIdData) {
      const currentIdDataInSelection = selectionToSend.find(
        (el: DBItemType) => el.name === currentIdData.name
      ) as DBItemType;
      const newItem = { ...currentIdDataInSelection, value };
      setFinalizedSelection((prev: DBItemType[]) => [...prev, newItem]);
    }
    setNextId(nextId);
  };

  const clearData = () => {
    setNextId(100);
    setItemsToDisplay([]);
    setSelectionToSend([]);
    setFinalizedSelection([]);
    setIsFlowFinished(false);
  };

  useEffect(() => {
    const nextItem = flow?.find((el: InteractionType) => el.id === nextId);
    if (nextItem) {
      setItemsToDisplay((prev: InteractionType[]) => [...prev, nextItem]);
      setSelectionToSend((prev: DBItemType[]) => [
        ...prev,
        { name: nextItem.name, value: undefined },
      ]);
    }
  }, [nextId, flow]);

  useEffect(() => {
    if (nextId === false) {
      setIsFlowFinished(true);
      axios.put(PUT_RECORDS_URL, finalizedSelection);
    }
  }, [finalizedSelection, nextId]);

  return flow ? (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Unser Chatbot hilft Ihnen bei der Auswahl Ihrer Versicherung:
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {itemsToDisplay.map(({ id, text, valueOptions }) => (
              <ListItemComponent
                key={id}
                id={id}
                text={text}
                buttonOptions={valueOptions}
                handleSelection={handleSelection}
              />
            ))}
          </List>
          {isFlowFinished && (
            <Grid className={classes.centerAlignedGrid} container>
              <Slide in direction="up">
                <Grid item xs={4}>
                  <Typography className={classes.messageStyles}>
                    Herzlichen Dank für Ihre Angaben!
                  </Typography>
                </Grid>
              </Slide>
              <Slide in direction="up">
                <Grid item xs={4}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="default"
                    onClick={() => clearData()}
                  >
                    Eingaben leeren
                  </Button>
                </Grid>
              </Slide>
            </Grid>
          )}
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
