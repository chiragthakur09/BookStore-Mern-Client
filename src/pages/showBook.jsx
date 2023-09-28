import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl"> Show Book</h1>
      {(loading) ? <Spinner /> : (
        <div className="flex flex-col border-2 border-sky-200 rounded-xl w-fit p-4">
          <Link to={`/book/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-300"></AiOutlineEdit>
          </Link>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span className="text-xl">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Public Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Genres</span>
            <span>{book.genres}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created At</span>
            <span>{book.createdAt}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Updated At</span>
            <span>{book.updatedAt}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook;