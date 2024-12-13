import Court from './court';

interface CourtListProps {
    courts: Court[];
    ratingFilter: number[];
    sportFilter: string | null;
}

export default CourtListProps;