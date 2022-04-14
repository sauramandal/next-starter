import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
