import  events  from './eventInterface';

const eventData: events[] = [
    new events(
      {
        id: 1,
        name: "Sân Thành Thắng",
        date: "Thứ 7, 20/12/2024, 17:30",
        host: "Trà Minh Trọng",
        playersNeeded: 5,
        level: "Trung bình khá",
        price: "25k",
        description: "",
        sport: "PickleBall",
        province: "Hồ Chí Minh",
        district: "Quận 12",
      },
    ),
    new events(
      {
        id: 2,
        name: "Sân Bình Minh",
        date: "Chủ nhật, 21/12/2024, 18:00",
        host: "Nguyễn Văn An",
        playersNeeded: 8,
        level: "Cao",
        price: "50k",
        description: "Cần thêm người để đủ sân.",
        sport: "Badminton",
        province: "Hồ Chí Minh",
        district: "Quận 1",
      },
    ),
    new events(
      {
        id: 3,
        name: "Sân Ngọc Thảo",
        date: "Thứ 2, 22/12/2024, 19:00",
        host: "Lê Hải Đăng",
        playersNeeded: 4,
        level: "Trung bình",
        price: "20k",
        description: "Tham gia giao lưu vui vẻ.",
        sport: "Football",
        province: "Thủ Đức",
        district: "Quận 9",
      },
    ),
    new events(
      {
        id: 4,
        name: "Sân Ngọc",
        date: "Thứ 2, 22/12/2024, 19:00",
        host: "Lê Hải Đăng",
        playersNeeded: 4,
        level: "Trung bình",
        price: "20k",
        description: "Tham gia giao lưu vui vẻ.",
        sport: "Football",
        province: "Thủ Đức",
        district: "Quận 9",
      },
    ),
];

export default eventData;