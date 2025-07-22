import { useState } from "react";
import "./BookForm.css";
import {FaSpinner} from "react-icons/fa";
import createBookWithId from "../../utils/createBookWithId";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import booksData from "../../data/books.json";
import {setError} from "../../redux/slices/errorSlice"

const BookForm = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length);
		const randomBook = booksData[randomIndex];

		dispatch(addBook(createBookWithId(randomBook, "random")));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && author) {
			const book = createBookWithId({ title, author }, "manual");
			console.log(addBook(book));

			dispatch(addBook(book));
			setTitle("");
			setAuthor("");
		} else {
			dispatch(setError("You must fill title and author!"));
		}
	};

	const handleAddRandomBookViaAPI = async () => {
		try {
			setIsLoading(true);
			await dispatch(fetchBook("http://localhost:4000/random-book-deleyed"));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="app-block book-form">
			<h2>Add a new Book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="author">Author</label>
					<input
						type="text"
						id="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<button type="submit">Add Book</button>
				<button type="button" onClick={handleAddRandomBook}>
					Add Random
				</button>
				<button type="button" onClick={handleAddRandomBookViaAPI} disabled = {isLoading}>
					{isLoading ? (
							<>
								<span>Loading book...</span>
								<FaSpinner className="spinner" />
							</>
						) : "Add Random via API"
					}
				</button>
			</form>
		</div>
	);
};

export default BookForm;
