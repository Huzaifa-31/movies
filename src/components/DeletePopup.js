import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function DeletePopup(props) {
  const { open, onClose, popDelete } = props;
  if (!open) return null;
  return (
    <div>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete This Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you shore you want to delete this Movie?
          <Form.Check label={" Don't show this dialoge again."} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={popDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default DeletePopup;
