import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddBooks() {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/book/createBook", data);
      Swal.fire("Created!", "Book has been created.", "success");
      setData({
        title: "",
        author: "",
        description: "",
        image: "",
      });
    } catch (error) {
      Swal.fire("Error!", "There was an error creating the book.", "error");
    }
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3 ">
          <label className="form-label text-white">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Book Name"
            name="title"
            value={data.title}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label text-white">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter The Name Of Author"
            name="author"
            value={data.author}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label text-white">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Description"
            name="description"
            value={data.description}
            onChange={change}
          />
        </div>

        <div className="mb-3 ">
          <label className="form-label text-white">Image</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter The URL of Image"
            name="image"
            value={data.image}
            onChange={change}
          />
        </div>

        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddBooks;
