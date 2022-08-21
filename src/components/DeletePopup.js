import React from "react";

function DeletePopup({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Delete This Movie
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <p>Are you shore you want to delete this Movie?</p>

          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Don't show this dialoge again.
          </label>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Delete
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletePopup;
