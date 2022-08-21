import React from "react";

function AddForm({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <form className="modal-content modal-dialog-centered mt-4 ">
        <div className="container mt-4">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Add New Movie
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div class="form-floating mb-3 ">
            <input
              type="email"
              class="form-control"
              id="floatingInputValue"
              value=""
              placeholder="Title"
            />

            <label for="floatingInput">Title</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputValue"
              value=""
              placeholder="Genere"
            />
            <label for="floatingInput">Genere</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputValue"
              value={""}
              placeholder="Stock"
            />
            <label for="floatingInput">Stock</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInputValue"
              value={""}
              placeholder="Rate"
            />
            <label for="floatingInput">Rate</label>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddForm;
