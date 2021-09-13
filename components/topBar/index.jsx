import React from "react";
import styles from "./style.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const TopBar = () => {
  let donateHandler = () => {
    window.open("https://rzp.io/l/eJsPelTk");
  };

  return (
    <div className={`container_fluid ${styles.topbar_wrapper}`}>
      <div className={`container ${styles.topbar}`}>
        <div>
          <FacebookIcon style={{ marginRight: "10px" }} />
          <TwitterIcon style={{ marginRight: "10px" }} />
          <InstagramIcon style={{ marginRight: "10px" }} />
          <YouTubeIcon />
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <PhoneIcon style={{ marginRight: "10px" }} />
              +91-90000 11111
            </div>
            <div className={styles.contactItem}>
              <EmailIcon style={{ marginRight: "10px" }} />
              thisisngo@gmail.com
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              endIcon={<FavoriteIcon />}
              onClick={donateHandler}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
