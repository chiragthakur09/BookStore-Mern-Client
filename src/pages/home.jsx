import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete} from "react-icons/md";
 
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className="text-3xl text-green-500 hover:text-green-600" />
        </Link>
      </div>
      {loading ? <Spinner /> : (
        <div className="flex items-stretch">
          <table className="border-separate border-0 w-10/12 border-spacing-2 border-slate-400 self-center">
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
      )}
    </div>
  )
}

export default Home;