import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

const BookTable = ({ books }) => {
  return (
    <div className="flex items-stretch">
      <table className="border-separate border-0 w-full border-spacing-2 border-slate-400 self-center">
        <thead>
          <tr>
            <th className="border border-slate-400 rounded-md">No</th>
            <th className="border border-slate-400 rounded-md">Title</th>
            <th className="border border-slate-400 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-400 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-400 rounded-md">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center ">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/book/show/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-300"></BsInfoCircle>
                  </Link>
                  <Link to={`/book/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-300"></AiOutlineEdit>
                  </Link>
                  <Link to={`/book/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-400"></MdOutlineDelete>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookTable.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookTable;
