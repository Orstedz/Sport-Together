import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseBooking from './browseBooking/page';
{ /** @todo Imported app's root -- assigned to Nguyen Phat Tai */ }
{/** @todo Imported login and register page -- assigned to Pham Gia Minh */ }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/** @description Route to browseBooking*/}
                <Route path="/browseBooking" element={<BrowseBooking />} />
                {/** @todo Add route to Login-Register pages -- assigned to Pham Gia Minh*/}

                {/** @todo Add route to Welcome Page -- assigned to Nguyen Phat Tai*/}
                <Route path="/" element={<div>Welcome to the Booking App</div>} />
            </Routes>
        </Router>
    </React.StrictMode>
);