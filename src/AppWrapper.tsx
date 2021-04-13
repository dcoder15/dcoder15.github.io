import "./index.css";
import React from "react";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useStoreState } from "rfluxx-react";
import { AppStore } from "./stores/AppStore";
import { ContainerFactory } from "./logic/ContainerFactory";

const AppWrapper: React.FunctionComponent = () => {
  const appStore = ContainerFactory.getContainer().resolve<AppStore>("AppStore");
  const storeState = useStoreState(appStore);

  if (!storeState) {
    return null;
  }

  const { darkMode } = storeState;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#c0c4b4"
      },
      secondary: {
        main: "#221e33"
      },
      type: darkMode ? "dark" : "light"
    }
  });

  return <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>;
}

export default AppWrapper;
