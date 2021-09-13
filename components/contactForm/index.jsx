import React from "react";
import styles from "./style.module.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const ContactForm = () => {
  return (
    <div className={styles.contact_bg}>
      <div className={styles.contact}>
        <div className={styles.title}>
          <h2>Contact Us</h2>
        </div>
        <div className={styles.input}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            style={{ marginBottom: "20px" }}
          />
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
