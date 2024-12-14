import { Court, Rating } from '../interfaces/court';

const courtsData: Court[] = [
    new Court(
        1,
        "Làng thiếu niên Thủ Đức sân cầu lông",
        "Sân cầu lông tại Làng thiếu niên Thủ Đức",
        "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        '5:00 - 22:00',
        50000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Great place!', like: 5, dislike: 1 },
            { rating: 4, user: 'user2', comment: 'Good!', like: 3, dislike: 2 },
            { rating: 3, user: 'user3', comment: 'Not bad!', like: 2, dislike: 1 }
        ]
    ),
    new Court(
        2,
        "Sân cầu lông Chương Dương Thủ Đức",
        "Sân cầu lông tại Chương Dương Thủ Đức",
        "Số 26, Đường Chương Dương,Phường Linh Chiểu, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        '7:00 - 22:00',
        60000,
        '0111111111',
        [
            { rating: 3, user: 'user4', comment: 'Not good!', like: 1, dislike: 2 },
            { rating: 4, user: 'user5', comment: 'Good!', like: 3, dislike: 2 },
            { rating: 2, user: 'user6', comment: 'Bad!', like: 1, dislike: 3 }
        ]
    ),
    new Court(
        3,
        "Sân bóng đá Cá Sấu Hoa Cà",
        "Sân bóng đá tại Cá Sấu Hoa Cà",
        "61 Đường sô 48, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        '6:00 - 23:00',
        150000,
        '012121212',
        [
            { rating: 5, user: 'user7', comment: 'Great place!', like: 5, dislike: 1 },
            { rating: 4, user: 'user8', comment: 'Good!', like: 3, dislike: 2 },
            { rating: 3, user: 'user9', comment: 'Not bad!', like: 2, dislike: 1 },
            { rating: 2, user: 'user10', comment: 'Bad!', like: 1, dislike: 3 }
        ]
    )
];

export default courtsData;