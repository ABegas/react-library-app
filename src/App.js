import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';
import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="app-main">
                <div className="app-left-column">
                    <BookForm />
                </div>
                <div className="app-right-column">
                    <Filter />
                    <BookList />
                </div>
            </main>
        </div>
    );
}

export default App;
