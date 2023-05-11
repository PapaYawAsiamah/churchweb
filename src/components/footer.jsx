"use client";
import React from "react";
import "../styles/footer.css";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc,collection,doc,serverTimestamp } from "firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Footer = () => {
  const defaultValues = {
    name: "",
    phone: "",
    message: "",
  };
  const [Contact, setContact] = useState(defaultValues);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("")
  const submitForm = async (e) => {
    e.preventDefault();
    const ContactRef = collection(db, "Contacts");
    await addDoc( ContactRef, {
      ...Contact,
      created_at: serverTimestamp(),
     
    }).then(() => {
      setStatus("sending")
      setContact(defaultValues)
      setOpen(true);
      setStatus("message sent")
    })

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <footer id="footer">
      <div className="footMain-content">
        <div className="left box">
          <h2>Services</h2>
          <div className="FootContent">
            <p>
              our services are on Sunday 8:00-10:00am <br />
              Mondays and Wednesdays 8:00pm-10:00pm
            </p>

            <div className="social">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="FootContent">
            <div className="place">
              <img src="/location.png" alt="location" />
              <span className="LocText">Birendgr, sejnd </span>
            </div>
            <div className="place">
              <img src="/phone.png" alt="location" />
              <span className="LocText">0544859521</span>
            </div>
            <div className="place">
              <img src="/email.png" alt="location" />
              <span className="LocText">Towerofpraise@gmail.com </span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact Us</h2>
          <form  onSubmit={submitForm} id="studentForm">
            <div className="email">
              <div className="LocText">Name</div>
              <input
                type="text"
                required
                className="conInput"
                value={Contact.name}
                onChange={(e) =>
                  setContact({ ...Contact, name: e.target.value })
                }
              />
            </div>
            <div className="email">
              <div className="LocText">Phone</div>
              <input
                type="number"
                required
                className="conInput"
                value={Contact.phone}
                onChange={(e) =>
                  setContact({ ...Contact, phone: e.target.value })
                }
              />
            </div>
            <div className="msg">
              <div className="LocText">Message *</div>
              <textarea
                id=""
                cols="25"
                rows="2"
                required
                className="conInput"
                value={Contact.message}
                onChange={(e) =>
                  setContact({ ...Contact, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="btn">
              <button type="submit" form="studentForm">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {status}
        </Alert>
      </Snackbar>
    </footer>
  );
};
export default Footer;
