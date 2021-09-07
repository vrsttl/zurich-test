import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
  messageStyles: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid gray",
    boxShadow: "1px 1px 0 gray",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
  },
  leftAlignedGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  rightAlignedGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  disabledButton: {
    disabled: {
      opacity: 1,
      backgroundColor: "tomato",
    },
  },
});
