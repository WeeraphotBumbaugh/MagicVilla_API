import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PatchModal from "./PatchVilla";
import "./styles/villa.css";

function Villa({ villa, onDelete, onPatch }) {
  const [showModal, setShowModal] = useState(false);
  const handleReadMoreClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [showPatchModal, setShowPatchModal] = useState(false);
  const handlePatchClick = () => {
    setShowPatchModal(true);
  };

  return (
    <section>
      <div className="villacard">
        <div className="img-host">
          <img
            src={villa.imageUrl}
            className="villacard-img"
            alt={villa.name}
          />
        </div>
        <div className="villabody">
          <h5 className="villacard-title">{villa.name}</h5>
          <p className="villacard-details">{villa.details}</p>
          <p className="villacard-text">Occupancy: {villa.occupancy}</p>
          <p className="villacard-text">Rate: ${villa.rate}</p>
          <p className="villacard-text">{villa.sqFt} sqft</p>
          <div className="button-group">
            <Button
              variant="outline-success"
              size="sm"
              onClick={handleReadMoreClick}
            >
              Read More
            </Button>
            <Button variant="outline-info" size="sm">
              <Link
                to={{
                  pathname: `/edit/${villa.id}`,
                  villaData: villa,
                }}
                className="no-link"
              >
                Put
              </Link>
            </Button>
            <Button
              variant="outline-warning"
              size="sm"
              onClick={handlePatchClick}
            >
              Patch
            </Button>

            <Button
              onClick={() => onDelete(villa.id)}
              variant="outline-danger"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className="villa-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{villa.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={villa.imageUrl} alt={villa.name} className="img-fluid" />
            <p>{villa.details}</p>
            <p>Amenities: {villa.amenity}</p>
            <p>Occupancy: {villa.occupancy}</p>
            <p>Rate: ${villa.rate}</p>
            <p>{villa.sqFt} sqft</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {showPatchModal && (
        <PatchModal
          villa={villa}
          onHide={() => setShowPatchModal(false)}
          onPatch={onPatch}
        />
      )}
      ;
    </section>
  );
}

export default Villa;
