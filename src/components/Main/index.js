import React from "react"
import * as styles from "./Main.module.css"

const Main = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>
}

export default Main
