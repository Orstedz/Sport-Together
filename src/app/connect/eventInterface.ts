class events {
  location: string;
  date: string;
  host: string;
  playersNeeded: number;
  level: string;
  price: string;
  description: string;
  name: string;
  sport: string;
  province: string;
  district: string;

  constructor(data: events) {
    this.location = data.location;
    this.date = data.date;
    this.host = data.host;
    this.playersNeeded = data.playersNeeded;
    this.level = data.level;
    this.price = data.price;
    this.description = data.description;
    this.name = data.name;
    this.sport = data.sport;
    this.province = data.province;
    this.district = data.district;
  }
}

export { events };