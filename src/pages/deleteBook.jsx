import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
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
  const handleCancel = () => {
    navigate("/");
  }

  return (    
    <div className="p-4">
      <BackButton></BackButton>
      {(loading) ? <Spinner /> : (
        <div className="flex flex-col border-2 border-red-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <h1 className="text-3xl my-4 text-center"> Are You Sure, You want to delete this book?</h1>
            <button className="bg-red-500 p-4 my-2 text-white rounded-md w-full" onClick={handleDeleteBook}>Yes Delete</button>
            <button className="bg-gray-400 p-4 my-2 text-white rounded-md w-full" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeleteBook;
