import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";

import AddBooks from "./pages/AddBooks.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/addBooks" element={<AddBooks/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
