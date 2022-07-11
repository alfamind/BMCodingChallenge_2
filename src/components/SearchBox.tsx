import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

interface IProps {
    handleKeywordChange: (keyword: string) => void;
}

const SearchBox: React.FC<IProps> = ({ handleKeywordChange }) => {
    const [keyword, setKeyword] = useState("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleKeywordChange(keyword);
    };

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        setKeyword("");
        handleKeywordChange("");
    };
    return (
        <form
            onSubmit={handleFormSubmit}
            className={`${styles.wrapper} ${styles.flexRow}`}
        >
            <span className={styles.searchLabel}>Search for a product:</span>
            <input
                type="search"
                placeholder="Search for a product"
                id={styles.searchInput}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleFormSubmit}
            >
                Search
            </button>
            <button
                className={`${styles.btn} ${styles.btnReset}`}
                onClick={handleReset}
            >
                Reset
            </button>
        </form>
    );
};

export default SearchBox;
