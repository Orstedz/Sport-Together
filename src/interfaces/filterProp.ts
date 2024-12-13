interface FilterProp {
    onRatingFilter: (ratings: number[]) => void;
    onSportFilter: (sport: string[]) => void;
}

export default FilterProp;