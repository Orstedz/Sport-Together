import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrowseBooking from "./browseBooking/page";
import Payment from './payment/page';
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
        <Route path="/browseBooking" element={<BrowseBooking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/recoverPassword" element={<RecoverPasswordPage />} />
        {/** @todo Add route to Welcome Page -- assigned to Nguyen Phat Tai*/}
        <Route path="/" element={<WelcomePage></WelcomePage>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
