import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddForm({ open, onClose, setMovieData, movieData }) {
  const [addMovie, setAddMovie] = useState({
    Title: "",
    Genere: "",
    Metascore: "",
    imdbRating: "",
  });
  const handelAddForm = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormMovie = { ...addMovie };
    console.log("newFormMovie :>> ", newFormMovie);
    newFormMovie[fieldName] = fieldValue;
    setAddMovie(newFormMovie);
  };
  const handelAddFormSubmit = (event) => {
    event.preventDefault();
    if (
      setAddMovie === { Title: "", Genere: "", Metascore: "", imdbRating: "" }
    ) {
      return;
    } else {
      const newMovie = {
        Title: addMovie.Title,
        Genre: addMovie.Genere,
        Metascore: addMovie.Metascore,
        imdbRating: addMovie.imdbRating,
      };
      const newMovies = [...movieData, newMovie];
      console.log("newMovies", newMovies);
      setMovieData(newMovies);
    }
  };
  //
  if (!open) return null;

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Form
          className="modal-content modal-dialog-centered"
          onSubmit={handelAddFormSubmit}
        >
          <div className="container mt-4">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Add New Movie
              </h5>
              <Button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></Button>
            </div>
            <div class="form-floating mb-3 ">
              <input
                type="test"
                class="form-control"
                id="floatingInputValue"
                name="Title"
                placeholder="Title"
                onChange={handelAddForm}
              />

              <label for="floatingInput">Title</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInputValue"
                name="Genere"
                placeholder="Genere"
                onChange={handelAddForm}
              />
              <label for="floatingInput">Genere</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInputValue"
                name="Metascore"
                placeholder="Stock"
                onChange={handelAddForm}
              />
              <label for="floatingInput">Stock</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInputValue"
                name="imdbRating"
                placeholder="Rate"
                onChange={handelAddForm}
              />
              <label for="floatingInput">Rate</label>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Add
              </button>
              <Button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default AddForm;
