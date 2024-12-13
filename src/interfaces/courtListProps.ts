import Court from './court';

interface CourtListProps {
    courts: Court[];
    ratingFilter: number[];
    sportFilter: string[];
}

export default CourtListProps;