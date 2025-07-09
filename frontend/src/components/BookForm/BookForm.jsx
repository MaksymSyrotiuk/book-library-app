import { useState } from "react";
import "./BookForm.css";
import createBookWithId from "../../utils/createBookWithId";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../redux/books/actionCreators";
import booksData from "../../data/books.json";

const BookForm = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const dispatch = useDispatch();

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length);
		const randomBook = booksData[randomIndex];

		dispatch(addBook(createBookWithId(randomBook)));
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		if (title && author) {
			const book = createBookWithId({ title, author });
			console.log(addBook(book));

			dispatch(addBook(book));
			setTitle("");
			setAuthor("");
		}
	};
	return (
		<div className="app-block book-form">
			<h2>Add a new Book</h2>
			<form onSubmit={handleSumbit}>
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
				<button type="submit" onClick={handleAddRandomBook}>
					Add Random
				</button>
			</form>
		</div>
	);
};

export default BookForm;
