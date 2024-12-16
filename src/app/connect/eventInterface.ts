class events {
  id: number;
  name: string;
  date: string;
  host: string;
  playersNeeded: number;
  level: string;
  price: string;
  description: string;
  sport: string;
  province: string;
  district: string;

  constructor(data: events) {
    this.id = data.id;
    this.name = data.name;
    this.date = data.date;
    this.host = data.host;
    this.playersNeeded = data.playersNeeded;
    this.level = data.level;
    this.price = data.price;
    this.description = data.description;
    this.sport = data.sport;
    this.province = data.province;
    this.district = data.district;
  }
}

export default events ;