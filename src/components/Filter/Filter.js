import "./Filter.css"
import { useSelector, useDispatch } from "react-redux"
import {
    setTitleFilter,
    setAuthorFilter,
    selectFilterTitle,
    selectFilterAuthor,
    selectFilterFavorite,
    resetFilters,
    setOnlyFavorite,
} from "../../redux/slices/filterSlices"

const Filter = () => {
    const dispatch = useDispatch()
    const titleFilterState = useSelector(selectFilterTitle)
    const authorFilterState = useSelector(selectFilterAuthor)
    const favoriteFilterState = useSelector(selectFilterFavorite)

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleResetFilters = () => {
        dispatch(resetFilters())
    }

    const handleFavoritesFilter = () => {
        dispatch(setOnlyFavorite())
    }

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        value={titleFilterState}
                        onChange={handleTitleFilterChange}
                        placeholder="Filter by title..."
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        value={authorFilterState}
                        onChange={handleAuthorFilterChange}
                        placeholder="Filter by author..."
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="checkbox"
                        checked={favoriteFilterState}
                        onChange={handleFavoritesFilter}
                        id="favorites"
                    />
                    <label htmlFor="favorites">Only Favorites</label>
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset Filters
                </button>
            </div>
        </div>
    )
}

export default Filter
