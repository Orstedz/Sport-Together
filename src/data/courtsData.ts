import { Court } from '../interfaces/court';

const courtsData: Court[] = [
    new Court(
        1,
        "Làng thiếu niên Thủ Đức sân cầu lông",
        "https://cdn.hvshop.vn/wp-content/uploads/2024/04/san-cau-long-Thu-Duc-2-1.webp",
        "Sân cầu lông tại Làng thiếu niên Thủ Đức",
        "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor Professional Court',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '22:00'
        },
        50000,
        '0123456789',
        [
            { rating: 5, user: 'proPlayer22', comment: 'Top-notch facilities, perfect lighting and court maintenance!', like: 12, dislike: 1 },
            { rating: 2, user: 'casual_player', comment: 'Crowded during peak hours, hard to book a slot.', like: 3, dislike: 8 },
            { rating: 4, user: 'weekend_warrior', comment: 'Great court quality, reasonable pricing.', like: 7, dislike: 2 },
            { rating: 1, user: 'frustrated_customer', comment: 'Poor customer service, staff was unhelpful.', like: 1, dislike: 15 }
        ]
    ),
    new Court(
        2,
        "Sân cầu lông Chương Dương Thủ Đức",
        "https://top247.vn/wp-content/uploads/2020/06/top-5-dia-diem-thue-san-cau-long-tot-nhat-tai-quan-thu-duc-1.jpg",
        "Sân cầu lông tại Chương Dương Thủ Đức",
        "Số 26, Đường Chương Dương,Phường Linh Chiểu, Quận Thủ Đức, TP.HCM",
        'Indoor Community Court',
        'Badminton',
        {
            startTime: '7:00',
            endTime: '22:00'
        },
        60000,
        '0111111111',
        [
            { rating: 5, user: 'local_club', comment: 'Perfect for group training sessions!', like: 9, dislike: 1 },
            { rating: 3, user: 'amateur_player', comment: 'Decent court, could use some equipment upgrades.', like: 5, dislike: 4 },
            { rating: 1, user: 'equipment_critic', comment: 'Nets are worn out, racket rental is poor quality.', like: 2, dislike: 11 },
            { rating: 4, user: 'friendly_player', comment: 'Good atmosphere, helpful staff.', like: 8, dislike: 2 }
        ]
    ),
    new Court(
        3,
        "Sân bóng đá Cá Sấu Hoa Cà",
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-ca-sau-hoa-ca.jpg",
        "Sân bóng đá tại Cá Sấu Hoa Cà",
        "61 Đường sô 48, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor Premium Pitch',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 5, user: 'soccer_enthusiast', comment: 'Absolutely stunning pitch, feels like a professional stadium!', like: 15, dislike: 1 },
            { rating: 2, user: 'drainage_critic', comment: 'Field gets waterlogged after rain, terrible drainage.', like: 3, dislike: 12 },
            { rating: 4, user: 'weekend_footballer', comment: 'Great surface, good for serious matches.', like: 9, dislike: 3 },
            { rating: 1, user: 'maintenance_complainer', comment: 'Grass is uneven, goal posts are rusty.', like: 1, dislike: 14 }
        ]
    ),
    new Court(
        4,
        "Sân cầu lông Lan Anh Thủ Đức",
        "https://cdn.hvshop.vn/wp-content/uploads/2024/03/san-cau-long-lan-anh.webp",
        "Sân cầu lông tại Lan Anh Thủ Đức",
        "Số 119, Đường số 7, Phường Linh Trung. Quận Thủ Đức, TP.HCM",
        'Indoor Competitive Arena',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        50000,
        '0123456789',
        [
            { rating: 5, user: 'tournament_player', comment: 'Best court for competitive matches, perfect markings!', like: 11, dislike: 1 },
            { rating: 3, user: 'casual_badminton', comment: 'Okay facilities, a bit cramped during busy hours.', like: 6, dislike: 5 },
            { rating: 4, user: 'technique_trainer', comment: 'Great for practicing advanced techniques.', like: 8, dislike: 2 },
            { rating: 2, user: 'price_sensitive', comment: 'A bit expensive for the quality provided.', like: 3, dislike: 9 }
        ]
    ),
    new Court(
        5,
        "Sân cầu lông Rạng Đông Thủ Đức",
        "https://cdn.hvshop.vn/wp-content/uploads/2024/04/san-cau-long-Thu-Duc-3-1.webp",
        "Sân cầu lông tại Rạng Đông Thủ Đức",
        "Số 37C, Đường số 48, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM",
        'Indoor Training Center',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        70000,
        '0123456789',
        [
            { rating: 5, user: 'coaching_pro', comment: 'Absolutely perfect for professional training sessions!', like: 13, dislike: 0 },
            { rating: 4, user: 'youth_coach', comment: 'Excellent facilities for junior player development.', like: 9, dislike: 2 },
            { rating: 3, user: 'beginner_player', comment: 'Good for learning, but can get crowded.', like: 5, dislike: 6 },
            { rating: 1, user: 'equipment_manager', comment: 'Insufficient storage and changing room facilities.', like: 2, dislike: 11 }
        ]
    ),
    new Court(
        6,
        "Sân cầu lông Tường Anh Thủ Đức",
        "https://cdn.hvshop.vn/wp-content/uploads/2024/04/san-cau-long-Thu-Duc-4.webp",
        "Sân cầu lông tại Tường Anh Thủ Đức",
        "Số 56/1, Đường số 2, Phường Trường Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor Recreational Venue',
        'Badminton',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        80000,
        '0123456789',
        [
            {
                rating: 2,
                user: 'sound_sensitive',
                comment: 'Acoustics are terrible, too noisy inside.',
                like: 3,
                dislike: 10
            },
            {
                rating: 2,
                user: 'weekend_player',
                comment: 'Decent court, but booking system is complicated.',
                like: 5,
                dislike: 7
            },
            {
                rating: 2,
                user: 'rainy_day_player',
                comment: 'Roof leaks during heavy rain, not ideal for bad weather.',
                like: 2,
                dislike: 12
            },
            {
                rating: 3,
                user: 'solo_practice',
                comment: 'Good for solo practice, but lack of equipment rentals is frustrating.',
                like: 4,
                dislike: 6
            },
            {
                rating: 3,
                user: 'weekday_player',
                comment: 'Quiet on weekdays, but the court surface needs improvement.',
                like: 6,
                dislike: 5
            },
            {
                rating: 2,
                user: 'budget_player',
                comment: 'Too expensive for the facilities offered.',
                like: 3,
                dislike: 8
            }
        ]
    ),
    new Court(
        7,
        "Sân cầu lông Trường Thọ",
        "https://cdn.hvshop.vn/wp-content/uploads/2024/04/san-cau-long-Thu-Duc-3.webp",
        "Sân cầu lông tại Trường Thọ",
        "Số 4, Đường số 8, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        'Indoor Advanced Court',
        'Badminton',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        120000,
        '0123456789',
        [
            { rating: 5, user: 'national_player', comment: 'Meets international competition standards perfectly!', like: 14, dislike: 0 },
            { rating: 4, user: 'technique_master', comment: 'Excellent court surface for precise play.', like: 9, dislike: 2 },
            { rating: 2, user: 'budget_player', comment: 'Way too expensive for casual players.', like: 3, dislike: 11 },
            { rating: 3, user: 'group_coach', comment: 'Good for team practices, but limited time slots.', like: 6, dislike: 5 }
        ]
    ),
    new Court(
        8,
        "Sân bóng đá Phúc Thành",
        "https://d82bjlqmetw03.cloudfront.net/uploads/images/10/large-sanphucthanh?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQW3XISBSHKJGJBQ%2F20241216%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20241216T132317Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=e854953beabe3b76fc69b35b7fee0b6841b0743f69be1bcf01f113b5f3d0228e",
        "Sân bóng đá tại Phúc Thành",
        "Đường 47, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor Professional Pitch',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        180000,
        '0987654321',
        [
            { rating: 5, user: 'league_player', comment: 'Absolute top-tier pitch, perfect for serious matches!', like: 16, dislike: 1 },
            { rating: 4, user: 'tactical_coach', comment: 'Great field layout, ideal for tactical training.', like: 10, dislike: 3 },
            { rating: 2, user: 'night_match_critic', comment: 'Lighting is inconsistent during evening games.', like: 4, dislike: 12 },
            { rating: 3, user: 'maintenance_expert', comment: 'Needs more frequent ground maintenance.', like: 6, dislike: 8 }
        ]
    ),
    new Court(
        9,
        "Sân bóng đá Bình Triệu 3",
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-binh-trieu-2.jpg",
        "Sân bóng đá tại Bình Triệu 3",
        "51 Đường Số 20, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor Community Pitch',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 5, user: 'neighborhood_team', comment: 'Perfect community field, great for local tournaments!', like: 15, dislike: 0 },
            { rating: 4, user: 'youth_trainer', comment: 'Excellent for youth football development.', like: 11, dislike: 2 },
            { rating: 2, user: 'surface_critic', comment: 'Artificial turf feels unnatural and slippery.', like: 3, dislike: 13 },
            { rating: 3, user: 'weekend_footballer', comment: 'Decent field, but booking can be challenging.', like: 7, dislike: 6 }
        ]
    ),
    new Court(
        10,
        "Sân bóng đá Ngọc Việt",
        "https://top10tphcm.com/wp-content/uploads/2020/12/San-bong-da-Ngoc-Viet.jpg",
        "Sân bóng đá tại Ngọc Việt",
        "Đường 20, Hiệp Bình Chánh, Thủ Đức, TPHCM",
        'Outdoor Elite Venue',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        250000,
        '0987654321',
        [
            { rating: 5, user: 'national_squad', comment: 'World-class facilities, perfect for high-level training!', like: 18, dislike: 0 },
            { rating: 4, user: 'pro_striker', comment: 'Exceptional field conditions, great for skill practice.', like: 12, dislike: 2 },
            { rating: 2, user: 'pricing_critic', comment: 'Extremely overpriced for amateur players.', like: 4, dislike: 15 },
            { rating: 3, user: 'local_organizer', comment: 'Good for events, but limited parking space.', like: 6, dislike: 9 }
        ]
    ),
    new Court(
        11,
        "Sân bóng đá Nhà thiếu nhi Thủ Đức",
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-nha-thieu-nhi-thu-duc.jpg",
        "Sân bóng đá tại Nhà thiếu nhi Thủ Đức",
        "281 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TPHCM",
        'Well-Maintained Outdoor Pitch',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        240000,
        '0987654321',
        [
            { rating: 5, user: 'SoccerFan87', comment: 'Absolutely stunning pitch! The grass is perfectly maintained and the markings are crisp.', like: 23, dislike: 2 },
            { rating: 4, user: 'LocalPlayer', comment: 'Great facilities, though the goal nets could use a bit of repair.', like: 15, dislike: 5 },
            { rating: 2, user: 'CasualKicker', comment: 'Uneven surface makes playing a bit challenging. Needs some ground leveling.', like: 7, dislike: 12 },
            { rating: 5, user: 'CoachTomi', comment: 'Perfect training ground for youth teams. Excellent lighting and spacious area.', like: 18, dislike: 3 },
            { rating: 3, user: 'WeekendWarrior', comment: 'Decent pitch, parking could be improved.', like: 10, dislike: 8 }
        ]
    ),
    new Court(
        12,
        "Sân bóng đá Linh Đông",
        "https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Linh-dong.jpg",
        "Sân bóng đá tại Linh Đông",
        "26 Đường số 30, Linh Đông, Thủ Đức, TPHCM",
        'Premium Community Football Field',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        280000,
        '0987654321',
        [
            {
                rating: 1,
                user: 'DisappointedFan',
                comment: 'Terrible experience. Overpriced and poorly maintained.',
                like: 5,
                dislike: 28
            },
            {
                rating: 2,
                user: 'UnhappyVisitor',
                comment: 'Not worth the hype. The field was muddy and unplayable.',
                like: 3,
                dislike: 20
            },
            {
                rating: 2,
                user: 'CriticalCoach',
                comment: 'Poor facilities and unprofessional staff.',
                like: 7,
                dislike: 15
            },
            {
                rating: 1,
                user: 'UpsetSpectator',
                comment: 'Absolutely terrible. Will never return!',
                like: 2,
                dislike: 32
            },
            {
                rating: 1,
                user: 'AngryAthlete',
                comment: 'A complete rip-off. The worst field I’ve ever played on.',
                like: 4,
                dislike: 25
            }
        ]


    ),
    new Court(
        14,
        "CLB Tennis Thiên Nga",
        "https://northstateresurfacing.com/wp-content/uploads/2020/02/Tennis-Courts-development-in-Zionville-NC.jpg",
        "Câu lạc bộ tennis tại Thiên Nga",
        "751 đường số 49A, Thành phố Thủ Đức",
        'Professional Grade Tennis Courts',
        'Tennis',
        {
            startTime: '5:00',
            endTime: '23:00'
        },
        300000,
        '0123456789',
        [
            { rating: 5, user: 'TennisPro', comment: 'Absolutely top-notch court with perfect court surface and professional-grade maintenance.', like: 42, dislike: 1 },
            { rating: 4, user: 'RecreationalPlayer', comment: 'Great court, good amenities, but a bit pricey for casual players.', like: 25, dislike: 8 },
            { rating: 2, user: 'BudgetConscious', comment: 'Expensive and the booking system is complicated.', like: 10, dislike: 20 },
            { rating: 5, user: 'CoachLinda', comment: 'Perfect for training. High-quality nets, excellent court lines, and great lighting.', like: 35, dislike: 3 },
            { rating: 3, user: 'WeekendTennis', comment: 'Decent court, but can get crowded during peak hours.', like: 18, dislike: 12 }
        ]
    ),
    new Court(
        16,
        "Sân Pickleball USC Thạnh Mỹ Lợi",
        "https://img.thegioithethao.vn/thumbs/san-picklebakll/ho-chi-minh/quan-2/san-usc-pickleball-thanh-my-loi/san-usc-pickleball-thanh-my-loi-4_thumb_720.webp",
        "Sân Pickleball tại USC Thạnh Mỹ Lợi",
        "91 TML Thủ Thiêm Villa, Phường Thạnh Mỹ Lợi, TP. Thủ Đức",
        'Premier Pickleball Training Venue',
        'Pickleball',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        180000,
        '0123456789',
        [
            { rating: 5, user: 'PickleballEnthusiast', comment: 'State-of-the-art facility with perfect court markings and amazing atmosphere!', like: 45, dislike: 2 },
            { rating: 4, user: 'CommunityPlayer', comment: 'Great court, friendly staff, but can get a bit noisy during peak hours.', like: 30, dislike: 7 },
            { rating: 1, user: 'BeginnerPlayer', comment: 'Intimidating for new players. Needs more beginner-friendly sessions.', like: 12, dislike: 25 },
            { rating: 5, user: 'CoachMark', comment: 'Perfect training facility. High-quality paddles and ball rentals available.', like: 38, dislike: 3 },
            { rating: 3, user: 'CasualSporter', comment: 'Okay facility, parking is a bit challenging.', like: 20, dislike: 15 }
        ]
    ),
    new Court(
        20,
        "Sân bóng rổ khu dân cư Opal River Side",
        "https://i.pinimg.com/736x/12/1c/bd/121cbdb40cfc01767606ce14fe7e682e.jpg",
        "Sân bóng rổ tại khu dân cư Opal River Side",
        "Đường số 10, khu phố 5, phường Hiệp Bình Chánh, Thủ Đức",
        'Community Basketball Practice Court',
        'Basketball',
        {
            startTime: '6:00',
            endTime: '18:00'
        },
        100000,
        '0123456789',
        [
            { rating: 5, user: 'BallerPro', comment: 'Perfect court for street basketball. Great rim height and smooth surface.', like: 40, dislike: 3 },
            { rating: 4, user: 'LocalTeenager', comment: 'Cool spot to hang out and practice shots. Could use some shade.', like: 28, dislike: 9 },
            { rating: 1, user: 'CompetitivePlayer', comment: 'Limited space, not ideal for serious training or full-court games.', like: 15, dislike: 22 },
            { rating: 5, user: 'CommunityCoach', comment: 'Excellent for youth basketball programs. Safe and well-maintained.', like: 35, dislike: 2 },
            { rating: 3, user: 'CasualShooter', comment: 'Decent court, but gets too hot during midday.', like: 20, dislike: 12 }
        ]
    ),
    new Court(
        21,
        "Sân bóng rổ khu thể thao Chương Dương",
        "https://i.pinimg.com/736x/94/b3/60/94b36057f8dfc87770bd413847e2a463.jpg",
        "Sân bóng rổ tại khu thể thao Chương Dương",
        "26 Chương Dương, Khu phố 3, Phường Linh Chiểu, Thủ Đức",
        'Open-Air Urban Court',
        'Basketball',
        {
            startTime: '6:00',
            endTime: '18:00'
        },
        350000,
        '0123456789',
        [
            { rating: 5, user: 'ProPlayer23', comment: 'Exceptional court with perfect surface and professional markings!', like: 15, dislike: 1 },
            { rating: 2, user: 'CasualHooper', comment: 'Lighting could be better during evening hours.', like: 5, dislike: 7 },
            { rating: 4, user: 'WeekendWarrior', comment: 'Great space for pickup games, nice community vibe.', like: 12, dislike: 3 },
            { rating: 5, user: 'FitnessFreak', comment: 'Immaculate maintenance and great basketball atmosphere!', like: 18, dislike: 0 }
        ]
    ),
    new Court(
        22,
        "Sân bóng đá KDC Vạn Phúc",
        "https://i.pinimg.com/736x/3f/0e/e7/3f0ee7f9b1004800e14562ffe380a156.jpg",
        "Sân bóng đá tại KDC Vạn Phúc",
        "Hiệp Bình Phước, Thủ Đức, TP.HCM",
        'Spacious Community Field',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        240000,
        '0987654321',
        [
            { rating: 5, user: 'SoccerCaptain', comment: 'Best pitch in the area, top-notch grass quality!', like: 22, dislike: 1 },
            { rating: 1, user: 'FrustatedPlayer', comment: 'Uneven surface makes precise play challenging.', like: 3, dislike: 16 },
            { rating: 4, user: 'TeamTrainer', comment: 'Great for training sessions, good field dimensions.', like: 15, dislike: 4 },
            { rating: 3, user: 'WeekendPlayer', comment: 'Decent field, but gets crowded during peak hours.', like: 8, dislike: 7 }
        ]
    ),
    new Court(
        23,
        "Sân bóng đá Xóm Trũng",
        "https://i.pinimg.com/736x/bd/60/9b/bd609b005cda88b46ab118d67b02cd37.jpg",
        "Sân bóng đá tại Xóm Trũng",
        "151/2 Trần Văn Nửa, Linh Chiểu, Thủ Đức, TP.HCM",
        'Neighborhood Football Arena',
        'Football',
        {
            startTime: '6:00',
            endTime: '23:00'
        },
        200000,
        '0987654321',
        [
            { rating: 5, user: 'LocalChamp', comment: 'Hidden gem with amazing community spirit!', like: 17, dislike: 2 },
            { rating: 2, user: 'PrecisionPlayer', comment: 'Poor goal post alignment affects gameplay.', like: 4, dislike: 12 },
            { rating: 4, user: 'SundayLeaguer', comment: 'Great for casual matches, friendly environment.', like: 13, dislike: 3 },
            { rating: 2, user: 'NightPlayer', comment: 'Lighting could use some improvement for night games.', like: 6, dislike: 8 }
        ]
    ),
    new Court(
        24,
        "Sân Tennis Rạch Dừa",
        "https://i.pinimg.com/736x/d6/41/01/d6410132a9eedaf44e234965ffc32fbd.jpg",
        "Sân tennis tại Rạch Dừa",
        "29 Tống Hữu Định, Phường Thảo Điền, Thành Phố Thủ Đức",
        'Premium Tennis Complex',
        'Tennis',
        {
            startTime: '6:00',
            endTime: '22:00'
        },
        300000,
        '0123456789',
        [
            { rating: 5, user: 'TennisPro', comment: 'World-class court with exceptional surface and facilities!', like: 25, dislike: 0 },
            { rating: 1, user: 'CasualPlayer', comment: 'Expensive and intimidating for beginners.', like: 3, dislike: 15 },
            { rating: 4, user: 'CoachMartin', comment: 'Great court for serious training and practice.', like: 18, dislike: 2 },
            { rating: 5, user: 'WeekendTennis', comment: 'Good court, but booking can be challenging.', like: 10, dislike: 6 }
        ]
    ),
];

export default courtsData;