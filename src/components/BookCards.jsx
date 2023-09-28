import BookCard from "./BookCard";
import PropTypes from "prop-types";

const BookCards = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={book._id} book={book} index={index} />
      ))}
    </div>
  );
};

BookCards.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookCards;
