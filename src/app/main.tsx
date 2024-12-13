import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./booking/page";
import Payment from './payment/page';
import ProceedPayment from "./proceedPayment/page";
import Register from "./register/page";
import LogIn from "./login/page";
import RecoverPasswordPage from "./recoverPassword/page";
import WelcomePage from "./welcome/page";
import History from "./history/page"
{
  /** @todo Imported app's root -- assigned to Nguyen Phat Tai */
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/** @description Route to browseBooking*/}
        <Route path="/history" element={<History></History>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/proceed" element={<ProceedPayment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/recoverPassword" element={<RecoverPasswordPage />} />
        <Route path="/" element={<WelcomePage></WelcomePage>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
