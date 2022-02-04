import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  //This is using media query concept on the material ui components and breakpoints
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
