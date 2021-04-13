import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import NavBar from "./elements/NavBar";
import { ContainerFactory } from "./logic/ContainerFactory";
import { useStoreState } from "rfluxx-react";
import { AppStore } from "./stores/AppStore";
import Intro from "./elements/Intro";
import Education from "./elements/Education";
import WorkExperience from "./elements/WorkExperience";
import Competences from "./elements/Competences";
import Contact from "./elements/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-gutterBottom": {
      marginBottom: "1em"
    }
  }
}));

/**
 * Props passed to the @see App.
 */
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  const classes = useStyles();

  const appStore = ContainerFactory.getContainer().resolve<AppStore>("AppStore");
  const storeState = useStoreState(appStore);

  if (!storeState) {
    return null;
  }

  return <Container
    className={classes.root}
    id={"app"}>
    <CssBaseline />
    <NavBar />
    <Intro />
    <Education />
    <WorkExperience />
    <Competences />
    <Contact />
  </Container>;
}

export default App;
