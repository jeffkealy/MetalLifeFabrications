import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
