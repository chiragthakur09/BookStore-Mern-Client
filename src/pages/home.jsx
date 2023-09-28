import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookTable from "../components/BookTable";
import BookCards from "../components/BookCards";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");

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
      <div className="flex justify-center items-center gap-x-4">
      <button className="bg-sky-300 hover:bg-sky-700 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}
        >Table</button>
        <button className="bg-sky-300 hover:bg-sky-700 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}
        >Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className="text-3xl text-green-500 hover:text-green-600" />
        </Link>
      </div>
      { loading ? <Spinner /> : ( 
        showType === 'table' ? <BookTable books={books} />  : <BookCards books={books} />
        )
      }
    </div>
  )
}

export default Home;