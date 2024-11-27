import './BookList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook, toggleFavorite, selectBooks } from '../../redux/slices/bookSlices'
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectFilterTitle, selectFilterAuthor, selectFilterFavorite } from '../../redux/slices/filterSlices';

const BookList = () => {
    const books = useSelector(selectBooks)
    const filterTitleState = useSelector(selectFilterTitle)
    const filterAuthorState = useSelector(selectFilterAuthor)
    const filterFavoriteState = useSelector(selectFilterFavorite)
    const dispatch = useDispatch()

    const handleDeleteBook = (bookId) => {
        dispatch(deleteBook(bookId))
    }

    const toggleFavoriteHandle = (bookId) => {
        dispatch(toggleFavorite(bookId))
    }

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(filterTitleState.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(filterAuthorState.toLowerCase());
        const matchesFavorite = filterFavoriteState ? book.isFavorite : true
        
        return matchesTitle && matchesAuthor && matchesFavorite
    })

    const highlightMatch = (text, filter) => {
        if(!filter) return text

        const regex = new RegExp(`(${filter})`, 'gi')
        
        return text.split(regex).map((part, index) => {
            if(part.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={index} className="highlight">{part}</span>
                )
            }

            return part
        })
    }

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul className="book-list">
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {highlightMatch(book.title, filterTitleState)} by <strong>{highlightMatch(book.author, filterAuthorState)}</strong>
                            </div>
                            <div className="book-actions">
                                <span onClick={() => toggleFavoriteHandle(book.id)}>
                                    {!book.isFavorite ? (
                                        <BsBookmarkStar className='star-icon' />    
                                    ) : (
                                        <BsBookmarkStarFill className='star-icon' />
                                    )}
                                </span>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}          
        </div>
    )
}

export default BookList