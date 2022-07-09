import React from "react";
import styles from "../../styles/Home.module.css";

const GridList: React.FC = ({ children }) => {
    return (
        <section className={styles.wrapper}>
            <ul className={styles.grid}>{children}</ul>
        </section>
    );
};

export default GridList;
