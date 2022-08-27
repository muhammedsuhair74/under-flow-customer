import { CssVarsProvider, Sheet } from "@mui/joy";
import React from "react";
import EventTile from "../../components/EventTile";

import styles from './styles.scss';

function HomePage(props) {
  return <CssVarsProvider>
      <div className={styles.container}>
        <EventTile />
      </div>
  </CssVarsProvider>
}

export default HomePage

