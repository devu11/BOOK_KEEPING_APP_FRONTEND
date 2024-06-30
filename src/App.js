import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AddBooks from "./pages/AddBooks.jsx";
import Books from "./pages/Books.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import SearchResults from "./pages/SearchResult.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addBooks" element={<AddBooks />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
