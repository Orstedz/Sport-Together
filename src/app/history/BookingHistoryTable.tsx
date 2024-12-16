import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import the star icon
import { Booking } from './types'; // Import the Booking type

interface BookingTableProps {
    bookings: Booking[];
    onDelete: (id: string) => void; // Add a prop for the delete function
}

const BookingHistoryTable: React.FC<BookingTableProps> = ({ bookings, onDelete }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [showReviewDialog, setShowReviewDialog] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number | null>(null); // State for rating

    const handleButtonClick = (status: string, booking: Booking) => {
        if (status === 'COMPLETED') {
            // Show review dialog instead of navigating
            setSelectedBooking(booking);
            setShowReviewDialog(true);
        } else {
            // Show confirmation dialog for cancellation
            setSelectedBooking(booking);
            setShowDialog(true);
        }
    };

    const handleConfirmCancel = () => {
        if (selectedBooking) {
            onDelete(selectedBooking.id); // Call the delete function
            setShowDialog(false); // Close the dialog
            setSelectedBooking(null); // Clear the selected booking
        }
    };

    const handleCancel = () => {
        setShowDialog(false); // Close the dialog without action
        setSelectedBooking(null); // Clear the selected booking
    };

    const handleSubmitReview = () => {
        // Handle the review submission logic here
        console.log(`Review for ${selectedBooking?.courtName}: ${reviewText}, Rating: ${rating}`);
        setShowReviewDialog(false); // Close the review dialog
        setSelectedBooking(null); // Clear the selected booking
        setReviewText(''); // Clear the review text
        setRating(null); // Reset the rating
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="py-3 px-4 text-left">Court name</th>
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-200">
                            <td className="py-3 px-4 text-purple-700 font-medium">
                                {booking.courtName}
                            </td>
                            <td className="py-3 px-4">{booking.bookingDate}</td>
                            <td className="py-3 px-4">
                                <span className={`font-medium ${
                                    booking.status === 'COMPLETED' 
                                        ? 'text-blue-600' 
                                        : booking.status === 'PAID'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                }`}>
                                    {booking.status}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                                <button 
                                    className={`px-4 py-1 rounded text-white ${
                                        booking.status === 'COMPLETED' 
                                            ? 'bg-yellow-500 hover:bg-yellow-600' // Yellow for Review
                                            : 'bg-red-500 hover:bg-red-600' // Red for Cancel
                                    }`}
                                    onClick={() => handleButtonClick(booking.status, booking)} // Call the function on button click
                                >
                                    {booking.status === 'COMPLETED' ? 'Review' : 'Cancel'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Confirmation Dialog */}
            {showDialog && selectedBooking && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-lg font-bold">Confirm Cancellation</h3>
                        <p>Do you want to cancel the booking at {selectedBooking.courtName} on {selectedBooking.bookingDate}?</p>
                        <div className="mt-4 flex justify-end">
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2" 
                                onClick={handleConfirmCancel}
                            >
                                Confirm
                            </button>
                            <button 
                                className="bg-gray-300 text-black px-4 py-2 rounded" 
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Review Dialog */}
            {showReviewDialog && selectedBooking && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96"> {/* Set a wider width for the dialog */}
                        <h3 className="text-lg font-bold">Leave a Review</h3>
                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, index) => (
                                <FaStar 
                                    key={index} 
                                    className={`cursor-pointer ${rating && rating >= index + 1 ? 'text-yellow-500' : 'text-gray-300'}`} 
                                    onClick={() => setRating(index + 1)} 
                                />
                            ))}
                        </div>
                        <textarea 
                            className="w-full border border-gray-300 rounded p-2 mt-2"
                            rows={4}
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review here..."
                        />
                        <div className="mt-4 flex justify-end">
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2" 
                                onClick={handleSubmitReview}
                            >
                                Submit
                            </button>
                            <button 
                                className="bg-gray-300 text-black px-4 py-2 rounded" 
                                onClick={() => setShowReviewDialog(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingHistoryTable;