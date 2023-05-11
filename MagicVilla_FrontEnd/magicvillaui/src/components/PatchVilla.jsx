import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./styles/villa.css";

function PatchModal({ villa, onHide, onPatch }) {
  const [editableField, setEditableField] = useState("");
  const [newValue, setNewValue] = useState("");

  function handleFieldClick(fieldName) {
    setEditableField(fieldName);
  }
  function handleInputChange(e) {
    setNewValue(e.target.value);
  }
  function handleClose() {
    onHide();
    setEditableField("");
    setNewValue("");
  }

  async function handlePatch() {
    if (!editableField || !newValue) {
      return;
    }
    try {
      console.log(villa.id, editableField, newValue);
      await onPatch(villa.id, editableField, newValue);
      handleClose();
    } catch (err) {
      console.error(err);
    }
    setEditableField("");
    setNewValue("");
  }
  return (
    <Modal show={true} onHide={handleClose} className="villa-modal">
      <Modal.Header closeButton>
        <Modal.Title>Make Changes to {villa.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Click on a field to edit it:</p>
        <div>
          <div onClick={() => handleFieldClick("name")}>
            <strong>Name:</strong> {villa.name}
          </div>
          <div onClick={() => handleFieldClick("imageUrl")}>
            <strong>Image:</strong> {villa.imageUrl}
          </div>
          <div onClick={() => handleFieldClick("details")}>
            <strong>Details:</strong> {villa.details}
          </div>
          <div onClick={() => handleFieldClick("amenity")}>
            <strong>Amenities:</strong> {villa.amenity}
          </div>
          <div onClick={() => handleFieldClick("occupancy")}>
            <strong>Occupancy:</strong> {villa.occupancy}
          </div>
          <div onClick={() => handleFieldClick("rate")}>
            <strong>Rate:</strong> ${villa.rate}
          </div>
          <div onClick={() => handleFieldClick("sqFt")}>
            <strong>Square Feet:</strong> {villa.sqFt} sqft
          </div>
        </div>
        {editableField && (
          <div>
            <p>Enter new value:</p>
            <input type="text" value={newValue} onChange={handleInputChange} />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handlePatch}
          disabled={!editableField}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PatchModal;
