// Layout.js
import React from "react";
// import Navigation from "../0.2_navigation/Navigation";
// Assuming the Navigation component is one level up in the folder structure
import styles from "./Layout1.module.css";
import Button from "../CustomButtonComponent";


const Layout1 = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <p>header</p>
      </header>
      <aside className={styles.sidebar}>
        <p>sidebar</p>
        
        <Button 
          border="none"
          color="pink"
          height = "200px"
          onClick={() => console.log("You clicked on the pink circle!")}
          radius = "50%"
          width = "200px"
          children = "I'm a pink circle!"
        />

      </aside>

      <main className={styles.mainContent}>
        <div className={styles.contentSection1}>
          {children}
          <p>contentSection1</p>
          </div>
        <div className={styles.contentSection2}>
          <p>contentSection2</p>
        </div>
        <div className={styles.contentSection3}>
          <p>contentSection3</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>foot</p>
      </footer>

    </div>
  );
};

export default Layout1;
