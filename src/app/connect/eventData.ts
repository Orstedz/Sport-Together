import { events } from './eventInterface';

const eventData: events[] = [
    new events(
      {
        location: "Sân Thành Thắng, quận 12",
        date: "Thứ 7, 20/12/2024, 17:30",
        host: "Trà Minh Trọng",
        playersNeeded: 5,
        level: "Trung bình khá",
        price: "25k",
        description: "",
        name: "PickleBall Championship",
        sport: "PickleBall",
        province: "Hà Nội",
        district: "Quận 1",
      },
    ),
    new events(
      {
        location: "Sân Bình Minh, quận 10",
        date: "Chủ nhật, 21/12/2024, 18:00",
        host: "Nguyễn Văn An",
        playersNeeded: 8,
        level: "Cao",
        price: "50k",
        description: "Cần thêm người để đủ sân.",
        name: "Badminton Open",
        sport: "Badminton",
        province: "Đà Nẵng",
        district: "Quận 3",
      },
    ),
    new events(
      {
        location: "Sân Ngọc Thảo, quận 5",
        date: "Thứ 2, 22/12/2024, 19:00",
        host: "Lê Hải Đăng",
        playersNeeded: 4,
        level: "Trung bình",
        price: "20k",
        description: "Tham gia giao lưu vui vẻ.",
        name: "Football League",
        sport: "Football",
        province: "TP. Hồ Chí Minh",
        district: "Quận 7",
      },
    )
];

export default eventData;