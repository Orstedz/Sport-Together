interface FilterProp {
    onRatingFilter: (ratings: number[]) => void;
    onSportFilter: (sport: string | null) => void;
}

export default FilterProp;