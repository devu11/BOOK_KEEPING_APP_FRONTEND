import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BooksSection from "../components/BooksSection/BooksSection";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchQuery = query.get("query");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/book/search?query=${searchQuery}`);
        setData(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Search Results</h4>
      </div>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : data.length > 0 ? (
        <BooksSection data={data} />
      ) : (
        <div className="text-white">No books found.</div>
      )}
    </div>
  );
}

export default SearchResults;
