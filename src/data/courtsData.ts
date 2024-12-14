import Court from '../interfaces/court';

const courtsData: Court[] = [
    {
        id: 1,
        name: "Làng thiếu niên Thủ Đức sân cầu lông",
        description: "Sân cầu lông tại Làng thiếu niên Thủ Đức",
        address: "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        feature: 'Indoor',
        timerange: '5:00 - 22:00',
        sport: 'Badminton',
        price: 50000,
        contact: '0123456789',
        ratings: [
            { rating: 5, user: 'user1', comment: 'Great place!' },
            { rating: 4, user: 'user2', comment: 'Good!' },
            { rating: 3, user: 'user3', comment: 'Not bad!' }
        ],
        calculateAverageRating: function () {
            const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
            const average = total / this.ratings.length;
            return Math.round(average);
        }
    },
    {
        id: 2,
        name: "Sân cầu lông Chương Dương Thủ Đức",
        description: "Sân cầu lông tại Chương Dương Thủ Đức",
        address: "Số 26, Đường Chương Dương,Phường Linh Chiểu, Quận Thủ Đức, TP.HCM",
        feature: 'Indoor',
        timerange: '7:00 - 22:00',
        sport: 'Badminton',
        price: 60000,
        contact: '0111111111',
        ratings: [
            { rating: 3, user: 'user4', comment: 'Not good!' },
            { rating: 4, user: 'user5', comment: 'Good!' },
            { rating: 2, user: 'user6', comment: 'Bad!' }
        ],
        calculateAverageRating: function () {
            const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
            const average = total / this.ratings.length;
            return Math.round(average);
        }
    },
    {
        id: 3,
        name: "Sân bóng đá Cá Sấu Hoa Cà",
        description: "Sân bóng đá tại Cá Sấu Hoa Cà",
        address: "61 Đường sô 48, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        ratings: [
            { rating: 5, user: 'user7', comment: 'Great place!' },
            { rating: 4, user: 'user8', comment: 'Good!' },
            { rating: 3, user: 'user9', comment: 'Not bad!' },
            { rating: 2, user: 'user10', comment: 'Bad!' }
        ],
        feature: 'Outdoor',
        timerange: '6:00 - 23:00',
        sport: 'Football',
        price: 150000,
        contact: '012121212',
        calculateAverageRating: function () {
            const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
            const average = total / this.ratings.length;
            return Math.round(average);
        }
    }
];

export default courtsData;