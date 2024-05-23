import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function BooksSection({ data }) {
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/book/deleteBook/${id}`);
      Swal.fire("Deleted!", "Book has been deleted.", "success");
      window.location.reload();
    } catch (error) {
      Swal.fire("Error!", "There was an error deleting the book.", "error");
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(
        `http://localhost:5000/book/updateBook/${selectedBook._id}`,
        selectedBook
      );
      Swal.fire("Updated!", "Book has been updated.", "success");
      handleClose();
      window.location.reload();
    } catch (error) {
      Swal.fire("Error!", "There was an error updating the book.", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  return (
    <div className="container" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      <div className="row">
        {data&&
          data.map((item) => (
            <div className="col-md-4 col-sm-6" key={item._id}>
              <div
                className="m-3"
                style={{
                  height: "300px",
                  border: "1px solid white",
                  borderRadius: "20px",
                }}
              >
                <div>
                  <img
                    style={{
                      width: "100%",
                      height: "120px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                    className="img-fluid"
                    src={item.image}
                    alt={item.title}
                  />
                  
                </div>
                <div className="p-2">
                  <h6 style={{ fontSize: "15px" }} className="text-white">
                    {item.title}
                  </h6>
                  <p style={{ fontSize: "12px" }} className="text-white">
                    By {item.author}
                  </p>
                  <p style={{ fontSize: "12px" }} className="text-white">
                    {item.description.slice(0, 50)}...
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShow(item)}
                  >
                    UPDATE
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBook(item._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedBook && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={selectedBook.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={selectedBook.author}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={selectedBook.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={selectedBook.image}
                onChange={handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateBook}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default BooksSection;
