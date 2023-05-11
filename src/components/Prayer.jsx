"use client";
import React from "react";
import "../styles/Prayer.css";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Prayer = () => {
  const defaultValues = {
    name: "",
    phone: "",
    message: "",
    email: "",
  };
  const [Prayer, setPrayer] = useState(defaultValues);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const submitPrayerForm = async (e) => {
    e.preventDefault();
    console.log(Prayer)
   
    const PrayerRef = collection(db, "Prayers");
    await addDoc(PrayerRef, {
      ...Prayer,
      created_at: serverTimestamp(),
    }).then(() => {
      setStatus("sending");
      setPrayer(defaultValues);
      setOpen(true);
      setStatus("message sent");
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <div className="body">
      <div className="Prayercontainer">
        <h1 className="form-title">Send A Prayer Request</h1>
        <form onSubmit={submitPrayerForm} id="PrayerForm">
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                value={Prayer.name}
                onChange={(e) => setPrayer({ ...Prayer, name: e.target.value })}
              />
            </div>

            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={Prayer.email}
                onChange={(e) =>
                  setPrayer({ ...Prayer, email: e.target.value })
                }
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={Prayer.phone}
                onChange={(e) =>
                  setPrayer({ ...Prayer, phone: e.target.value })
                }
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Request</label>
              <textarea
                type="text"
                rows="4"
                cols="50"
                name="Request"
                placeholder="Type Request Here"
                value={Prayer.message}
                onChange={(e) =>
                  setPrayer({ ...Prayer, message: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-submit-btn">
            <button onClick={() => {
             submitPrayerForm
            }}>
              Send
            </button>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {status}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Prayer;
