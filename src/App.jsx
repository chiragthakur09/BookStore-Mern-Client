import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/createBook';
import Home from './pages/home';
import ShowBook from './pages/showBook';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/create" element={<CreateBook />} />
      <Route path="/book/show/:id" element={<ShowBook />} />
      <Route path="/book/edit/:id" element={<EditBook />} />
      <Route path="/book/delete/:id" element={<DeleteBook />} />
    </Routes>
  )
}

export default App;