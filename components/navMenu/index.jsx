import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavMenu = () => {
  const router = useRouter();
  const { pathname } = router;
  const splitLocation = pathname.split("/");

  return (
    <div className={styles.navmenu}>
      <ul>
        <li className={splitLocation[1] === "" ? styles.active : ""}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className={splitLocation[1] === "events" ? styles.active : ""}>
          <Link href="/">
            <a>Events</a>
          </Link>
        </li>

        <li className={splitLocation[1] === "members" ? styles.active : ""}>
          <Link href="/">
            <a>Members</a>
          </Link>
        </li>

        <li className={splitLocation[1] === "join" ? styles.active : ""}>
          <Link href="/">
            <a>Join Us</a>
          </Link>
        </li>

        <li className={splitLocation[1] === "about" ? styles.active : ""}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
