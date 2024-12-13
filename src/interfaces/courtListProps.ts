import Court from './court';

interface CourtListProps {
    courts: Court[];
    ratingFilter: number[];
    sizeFilter: string | null;
}

export default CourtListProps;