interface Court {
    id: number;
    name: string;
    description: string;
    address: string;
    feature: string;
    sport: string;
    timerange: string;
    price: number;
    contact: string;
    ratings: Rating[];
    calculateAverageRating(): number;
}

interface Rating {
    rating: number;
    user: string;
    comment: string;
}

class CourtImpl implements Court {
    id: number;
    name: string;
    description: string;
    address: string;
    feature: string;
    sport: string;
    timerange: string;
    price: number;
    contact: string;
    ratings: Rating[];
    rating: number;

    constructor(id: number, name: string, description: string, address: string, feature: string, sport: string, timerange: string, price: number, contact: string, ratings: Rating[], rating: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.feature = feature;
        this.sport = sport;
        this.timerange = timerange;
        this.price = price;
        this.contact = contact;
        this.ratings = ratings;
        this.rating = rating;
    }

    calculateAverageRating(): number {
        const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
        const average = total / this.ratings.length;
        return Math.round(average);
    }
}

export default Court;