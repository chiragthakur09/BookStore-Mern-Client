import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [genres, setGenres] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setPublishYear(book.publishYear);
        setGenres(book.genres);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handleUpdateBook = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
      genres: genres,
    };

    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className="p-4">
      <BackButton>
      </BackButton>
      <h1 className="text-3xl my-4">Create Post</h1>
      { loading ? <Spinner /> : '' }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input 
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Genres</label>
          <input 
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="my-4">
          <button 
            onClick={handleUpdateBook}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    )
  }

export default EditBook;