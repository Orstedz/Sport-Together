interface Rating {
    rating: number;
    user: string;
    comment: string;
    like: number;
    dislike: number;
}

class Court {
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
    averageRating: number;

    constructor(id: number, name: string, description: string, address: string, feature: string, sport: string, timerange: string, price: number, contact: string, ratings: Rating[]) {
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
        this.averageRating = this.calculateAverageRating();
    }

    private calculateAverageRating(): number {
        if (this.ratings.length === 0) {
            return 0; // Return 0 if no ratings
        }
        const total = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
        return Math.round(total / this.ratings.length);
    }
}

export { Court };
export type { Rating };