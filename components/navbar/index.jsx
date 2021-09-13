import React from "react";
import styles from "./style.module.css";
import NavMenu from "../navMenu";
import MobileMenu from "../mobileMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={`container_fluid ${styles.navbar} `}>
      <div className={`container ${styles.nav_wrapper}`}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <img src="/logo.svg" alt="logo" />
            </div>
          </a>
        </Link>

        <div>
          <NavMenu />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
