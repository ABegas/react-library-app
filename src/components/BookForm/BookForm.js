import './BookForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slices/bookSlices'
import createBookWithId from '../../utils/createBookWithId';
import randomBooks from '../../data/books.json'

const BookForm = () => {
    const [formData, setFormData] = useState({ title: '', author: '' })
    const dispatch = useDispatch()

    const changeHandler = ((text, inputName) => {
        setFormData({...formData, [inputName]: text})
    })

    const submitHandler = (e) => {
        e.preventDefault()

        if(formData.title && formData.author) {
                
            dispatch(addBook(createBookWithId({
                title: formData.title,
                author: formData.author
            })))

            //Reset fields
            setFormData({title: '', author: ''})
        }
    }

    const addRandomHandler = (() => {
        const randomBook = randomBooks[Math.floor((Math.random() * randomBooks.length))]
        //randomBook.id = uuidv4() // short add id

        dispatch(addBook(createBookWithId(randomBook)))
    })

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" 
                        placeholder="Book Title" 
                        id="title" 
                        value={formData.title} 
                        onChange={(e) => changeHandler(e.target.value, 'title'
                    )} />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input type="text" 
                        placeholder="Book Author" 
                        id="author" 
                        value={formData.author} 
                        onChange={(e) => changeHandler(e.target.value, 'author')}
                    />
                </div>
                
                <button type="submit">Add Book</button>
                <button type="button" onClick={() => addRandomHandler()}>Add Random</button>
            </form>
        </div>
    )
}

export default BookForm