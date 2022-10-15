import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Sidebar from "./Sidebar";

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleclick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.title}>
      <div className={styles.title1}>
        {showDropdown ? (
          <IoIosArrowBack
            onClick={handleclick}
            className={styles.Fahamburger}
          />
        ) : (
          <FaBars onClick={handleclick} className={styles.Fahamburger} />
        )}
        <span>Tekswipe</span>
      </div>
      {showDropdown && <Sidebar />}
    </div>
  );
};

export default Navbar;
