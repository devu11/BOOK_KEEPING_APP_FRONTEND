import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection/BooksSection.jsx";

function Books() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios.get("http://localhost:5000/book/findBook").then((res) => {
        setData(res.data);
      });
    };
    fetch();
  }, []);
  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Books Section</h4>
      </div>
      {data ? (
        <BooksSection data={data} />
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
}

export default Books;
