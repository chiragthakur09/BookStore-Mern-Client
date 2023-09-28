import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BookCard = ({ book, index }) => {
  return (
    <div className="border-2 border-gray-600 rounded-lg px-4 py-2 m-4 relative hover:shadw-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{index + 1}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-around gap-x-2 mt-4 p4">
        <Link to={`/book/show/${book._id}`}>
          <BsInfoCircle className="text-2xl hover:text-black text-green-300"></BsInfoCircle>
        </Link>
        <Link to={`/book/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl hover:text-black text-yellow-300"></AiOutlineEdit>
        </Link>
        <Link to={`/book/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl hover:text-black text-red-400"></MdOutlineDelete>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
