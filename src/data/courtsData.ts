import { Court } from '../interfaces/court';

const courtsData: Court[] = [
    new Court(
        1,
        "Làng thiếu niên Thủ Đức sân cầu lông",
        "Sân cầu lông tại Làng thiếu niên Thủ Đức",
        "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '22:00'
        },
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
        {
            startTime: '7:00',
            endTime: '22:00'
        },
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
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        150000,
        '012121212',
        [
            { rating: 5, user: 'user7', comment: 'Great place!', like: 5, dislike: 1 },
            { rating: 4, user: 'user8', comment: 'Good!', like: 3, dislike: 2 },
            { rating: 3, user: 'user9', comment: 'Not bad!', like: 2, dislike: 1 },
            { rating: 2, user: 'user10', comment: 'Bad!', like: 1, dislike: 3 }
        ]
    ),
    new Court(
        4,
        "Sân cầu lông Lan Anh Thủ Đức",
        "Sân cầu lông tại Lan Anh Thủ Đức",
        "Số 119, Đường số 7, Phường Linh Trung. Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        50000,
        '0123456789',
        [
            { rating: 3, user: 'user1', comment: 'Not bad!', like: 2, dislike: 1 },
            { rating: 4, user: 'user2', comment: 'Nice!', like: 4, dislike: 0 },
            { rating: 5, user: 'user3', comment: 'Excellent!', like: 6, dislike: 0 }
        ]
    ),
    new Court(
        5,
        "Sân cầu lông Rạng Đông Thủ Đức",
        "Sân cầu lông tại Rạng Đông Thủ Đức",
        "Số 37C, Đường số 48, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        70000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Outstanding!', like: 8, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Very good!', like: 5, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Fine!', like: 2, dislike: 2 }
        ]
    ),
    new Court(
        6,
        "Sân cầu lông Tường Anh Thủ Đức",
        "Sân cầu lông tại Tường Anh Thủ Đức",
        "Số 56/1, Đường số 2, Phường Trường Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        80000,
        '0123456789',
        [
            { rating: 4, user: 'user1', comment: 'Nice place!', like: 4, dislike: 2 },
            { rating: 5, user: 'user2', comment: 'Excellent!', like: 7, dislike: 0 },
            { rating: 3, user: 'user3', comment: 'Average!', like: 2, dislike: 1 }
        ]
    ),
    new Court(
        7,
        "Sân cầu lông Trường Thọ",
        "Sân cầu lông tại Trường Thọ",
        "Số 4, Đường số 8, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor',
        'Badminton',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        120000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Awesome!', like: 6, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Good!', like: 3, dislike: 2 },
            { rating: 3, user: 'user3', comment: 'Fine!', like: 1, dislike: 1 }
        ]
    ),
    new Court(
        8,
        "Sân bóng đá Cá Sấu Hoa Cà",
        "Sân bóng đá tại Cá Sấu Hoa Cà",
        "61 Đường sô 48, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 4, user: 'user1', comment: 'Nice football field!', like: 4, dislike: 2 },
            { rating: 3, user: 'user2', comment: 'Good enough.', like: 3, dislike: 3 },
            { rating: 5, user: 'user3', comment: 'Outstanding!', like: 8, dislike: 1 }
        ]
    ),
    new Court(
        9,
        "Sân bóng đá Phúc Thành",
        "Sân bóng đá tại Phúc Thành",
        "Đường 47, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        180000,
        '0987654321',
        [
            { rating: 4, user: 'user1', comment: 'Great field!', like: 7, dislike: 0 },
            { rating: 3, user: 'user2', comment: 'Not bad.', like: 5, dislike: 2 },
            { rating: 5, user: 'user3', comment: 'Amazing!', like: 9, dislike: 0 }
        ]
    ),
    new Court(
        10,
        "Sân bóng đá Bình Triệu 3",
        "Sân bóng đá tại Bình Triệu 3",
        "51 Đường Số 20, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 5, user: 'user1', comment: 'Great!', like: 9, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Nice field!', like: 6, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Good enough.', like: 4, dislike: 2 }
        ]
    ),
    new Court(
        11,
        "Sân bóng đá Ngọc Việt",
        "Sân bóng đá tại Ngọc Việt",
        "Đường 20, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        250000,
        '0987654321',
        [
            { rating: 4, user: 'user1', comment: 'Well-maintained!', like: 7, dislike: 2 },
            { rating: 3, user: 'user2', comment: 'Okay!', like: 5, dislike: 1 },
            { rating: 5, user: 'user3', comment: 'Amazing!', like: 8, dislike: 0 }
        ]
    ),
    new Court(
        12,
        "Sân bóng đá Nhà thiếu nhi Thủ Đức",
        "Sân bóng đá tại Nhà thiếu nhi Thủ Đức",
        "281 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        240000,
        '0987654321',
        [
            { rating: 5, user: 'user1', comment: 'Excellent!', like: 10, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Good spot!', like: 7, dislike: 2 },
            { rating: 3, user: 'user3', comment: 'Not bad.', like: 5, dislike: 3 }
        ]
    ),
    new Court(
        13,
        "Sân bóng đá Linh Đông",
        "Sân bóng đá tại Linh Đông",
        "26 Đường số 30, Linh Đông, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        280000,
        '0987654321',
        [
            { rating: 4, user: 'user1', comment: 'Well-designed!', like: 6, dislike: 1 },
            { rating: 5, user: 'user2', comment: 'Perfect!', like: 9, dislike: 0 },
            { rating: 3, user: 'user3', comment: 'Average.', like: 4, dislike: 2 }
        ]
    ),
    new Court(
        14,
        "Sân bóng đá Ti Gôn",
        "Sân bóng đá tại Ti Gôn",
        "64 Đường số 10, Bình Chiểu, Thủ Đức, TPHCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        250000,
        '0987654321',
        [
            { rating: 3, user: 'user1', comment: 'Good location!', like: 5, dislike: 2 },
            { rating: 4, user: 'user2', comment: 'Pretty decent.', like: 6, dislike: 1 },
            { rating: 5, user: 'user3', comment: 'Great field!', like: 7, dislike: 0 }
        ]
    ),
    new Court(
        15,
        "CLB Tennis Thiên Nga",
        "Câu lạc bộ tennis tại Thiên Nga",
        "751 đường số 49A, Thành phố Thủ Đức",
        'Outdoor',
        'Tennis',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        300000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Amazing court!', like: 10, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Good!', like: 8, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Okay.', like: 5, dislike: 2 }
        ]
    ),
    new Court(
        16,
        "CLB Tennis An Phú",
        "Câu lạc bộ tennis tại An Phú",
        "43 Thảo Điền, Phường Thảo Điền, Thành Phố Thủ Đức",
        'Outdoor',
        'Tennis',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0123456789',
        [
            { rating: 4, user: 'user1', comment: 'Nice surface!', like: 7, dislike: 1 },
            { rating: 5, user: 'user2', comment: 'Great environment!', like: 9, dislike: 0 },
            { rating: 3, user: 'user3', comment: 'Not bad.', like: 6, dislike: 3 }
        ]
    ),
    new Court(
        17,
        "Sân Pickleball USC Thạnh Mỹ Lợi",
        "Sân Pickleball tại USC Thạnh Mỹ Lợi",
        "91 TML Thủ Thiêm Villa, Phường Thạnh Mỹ Lợi, TP. Thủ Đức",
        'Outdoor',
        'Pickleball',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        180000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Excellent court!', like: 10, dislike: 1 },
            { rating: 4, user: 'user2', comment: 'Good facilities!', like: 8, dislike: 2 },
            { rating: 3, user: 'user3', comment: 'Fair enough.', like: 6, dislike: 3 }
        ]
    ),
    new Court(
        18,
        "Sân Pickleball RUDAL",
        "Sân Pickleball tại RUDAL",
        "28 Đường số 12, Phường Bình An, TP. Thủ Đức",
        'Outdoor',
        'Pickleball',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        160000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Perfect!', like: 9, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Great vibe!', like: 8, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Okay.', like: 6, dislike: 2 }
        ]
    ),
    new Court(
        19,
        "Sân Pickleball HitPark",
        "Sân Pickleball tại HitPark",
        "789K Đường số 1, Phường Bình An, TP. Thủ Đức",
        'Outdoor',
        'Pickleball',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        200000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Amazing spot!', like: 8, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Good quality!', like: 7, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Decent!', like: 5, dislike: 2 }
        ]
    ),
    new Court(
        20,
        "Sân Pickleball D-Joy",
        "Sân Pickleball tại D-Joy",
        "15/1B Lương Định Của, Phường An Khánh, Quận 2, TP.HCM",
        'Outdoor',
        'Pickleball',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        250000,
        '0123456789',
        [
            { rating: 4, user: 'user1', comment: 'Well-equipped!', like: 6, dislike: 1 },
            { rating: 5, user: 'user2', comment: 'Perfect place!', like: 9, dislike: 0 },
            { rating: 3, user: 'user3', comment: 'Not bad.', like: 5, dislike: 2 }
        ]
    ),
    new Court(
        21,
        "Sân bóng rổ khu dân cư Opal River Side",
        "Sân bóng rổ tại khu dân cư Opal River Side",
        "Đường số 10, khu phố 5, phường Hiệp Bình Chánh, Thủ Đức",
        'Outdoor',
        'Basketball',
        {
            startTime: '6:00',
            endTime: '18:00'
        },
        0,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Great for practice!', like: 7, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Nice court!', like: 6, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Okay for free.', like: 5, dislike: 2 }
        ]
    ),
    new Court(
        22,
        "Sân bóng rổ khu thể thao Chương Dương",
        "Sân bóng rổ tại khu thể thao Chương Dương",
        "26 Chương Dương, Khu phố 3, Phường Linh Chiểu, Thủ Đức",
        'Outdoor',
        'Basketball',
        {
            startTime: '6:00',
            endTime: '18:00'
        },
        350000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'High-quality court!', like: 9, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Great spot!', like: 8, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Decent!', like: 6, dislike: 2 }
        ]
    ),
    new Court(
        23,
        "Sân bóng đá KDC Vạn Phúc",
        "Sân bóng đá tại KDC Vạn Phúc",
        "Hiệp Bình Phước, Thủ Đức, TP.HCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        240000,
        '0987654321',
        [
            { rating: 4, user: 'user1', comment: 'Good spot!', like: 7, dislike: 1 },
            { rating: 5, user: 'user2', comment: 'Amazing!', like: 10, dislike: 0 },
            { rating: 3, user: 'user3', comment: 'Not bad.', like: 6, dislike: 3 }
        ]
    ),
    new Court(
        24,
        "Sân bóng đá Xóm Trũng",
        "Sân bóng đá tại Xóm Trũng",
        "151/2 Trần Văn Nửa, Linh Chiểu, Thủ Đức, TP.HCM",
        'Outdoor',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 3, user: 'user1', comment: 'Decent field.', like: 4, dislike: 2 },
            { rating: 5, user: 'user2', comment: 'Well-maintained!', like: 9, dislike: 0 },
            { rating: 4, user: 'user3', comment: 'Good!', like: 6, dislike: 1 }
        ]
    ),
    new Court(
        25,
        "Sân Tennis Rạch Dừa",
        "Sân tennis tại Rạch Dừa",
        "29 Tống Hữu Định, Phường Thảo Điền, Thành Phố Thủ Đức",
        'Outdoor',
        'Tennis',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        300000,
        '0123456789',
        [
            { rating: 5, user: 'user1', comment: 'Perfect place!', like: 10, dislike: 0 },
            { rating: 4, user: 'user2', comment: 'Good facilities!', like: 8, dislike: 1 },
            { rating: 3, user: 'user3', comment: 'Okay.', like: 5, dislike: 2 }
        ]
    ),
  
];

export default courtsData;