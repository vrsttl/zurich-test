import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  buttonStyles: {
    margin: "0.4rem 0.2rem 0.2rem 0",
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
    overflowX: "hidden",
  },
  messageStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid gray",
    boxShadow: "1px 1px 0 gray",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    height: "fit-content",
    flexWrap: "wrap",
    maxWidth: "20rem",
  },
  leftAlignedGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  centerAlignedGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightAlignedGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
