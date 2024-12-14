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
            { rating: 4, contact: 'user1' },
            { rating: 5, contact: 'user2' },
            { rating: 3, contact: 'user3' }
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
            { rating: 3, contact: 'user4' },
            { rating: 4, contact: 'user5' },
            { rating: 2, contact: 'user6' }
        ],
        calculateAverageRating: function () {
            const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
            const average = total / this.ratings.length;
            return Math.round(average);
        }
    }
];

export default courtsData;